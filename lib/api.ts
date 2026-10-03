import { bottlenecks, getBottleneck, type Bottleneck } from "./bottlenecks";
import { quizQuestions, resultCopy, scoreQuiz } from "./quiz";
import { InputError, type Endpoint, type Input } from "./agent-api";
import { COMPANY_EDUCATION_LABEL, DISCLAIMER_SHORT, SITE_NAME, SITE_TAGLINE } from "./site";

export const PUBLIC_URL = "https://ai-bottleneck-map.vercel.app";
export const API_DISCLAIMER = `${DISCLAIMER_SHORT} Company names and tickers are examples often cited in public discussion: ${COMPANY_EDUCATION_LABEL}`;
export const API_INFO = { title: `${SITE_NAME} API`, description: `${SITE_TAGLINE} Six physical constraints on AI infrastructure: compute, memory, optics, power, space, and servers.` };

const SLUGS = bottlenecks.map((b) => b.slug);

function present(b: Bottleneck) {
  const { color, colorSoft, ...rest } = b;
  void color;
  void colorSoft;
  return { ...rest, url: `${PUBLIC_URL}/b/${b.slug}` };
}

function readAnswers(i: Input): string[] {
  const raw = i.answers;
  const list = Array.isArray(raw) ? raw.map(String) : typeof raw === "string" ? raw.split(/[,|\s]+/) : [];
  const answers = list.map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (!answers.length) throw new InputError(`Give answers: a list of bottleneck slugs, one per question (${SLUGS.join(", ")}).`);
  const bad = answers.filter((a) => !SLUGS.includes(a));
  if (bad.length) throw new InputError(`Unknown slug(s): ${bad.join(", ")}. Allowed: ${SLUGS.join(", ")}`);
  return answers;
}

export const ENDPOINTS: Record<"bottlenecks" | "quiz", Endpoint> = {
  bottlenecks: {
    path: "/api/bottlenecks",
    operationId: "aiInfrastructureBottlenecks",
    summary: "Explain the physical bottlenecks of the AI buildout (compute, memory/HBM, optics, power, space, servers)",
    description:
      "Without a slug, returns all six bottlenecks with a one-liner, why it constrains AI infrastructure, and example public companies often cited in that discussion. With slug, returns one. Educational context, not investment advice.",
    params: [{ name: "slug", type: "string", enum: SLUGS, description: "Optional: one bottleneck to return." }],
    example: "/api/bottlenecks?slug=power",
    compute: (i) => {
      const slug = typeof i.slug === "string" ? i.slug.trim().toLowerCase() : "";
      if (slug) {
        const b = getBottleneck(slug);
        if (!b) throw new InputError(`Unknown slug "${slug}". Allowed: ${SLUGS.join(", ")}`);
        return { bottleneck: present(b) };
      }
      return { bottlenecks: bottlenecks.map(present) };
    },
  },
  quiz: {
    path: "/api/quiz",
    operationId: "aiBottleneckQuiz",
    summary: "Score the 'which AI bottleneck is your stack most constrained by' quiz",
    description: `Without answers, returns the five quiz questions and their options (each option maps to a slug). With answers (one slug per question), returns the bottleneck picked most often. Slugs: ${SLUGS.join(", ")}.`,
    params: [{ name: "answers", type: "string", description: "Comma-separated slugs, one per question, e.g. power,power,memory,optics,power. POST may send an array." }],
    example: "/api/quiz?answers=power,power,memory,optics,power",
    compute: (i) => {
      if (i.answers === undefined || i.answers === "") return { questions: quizQuestions };
      const answers = readAnswers(i);
      const winner = scoreQuiz(answers);
      return { answers, result: { ...resultCopy(winner), bottleneck: present(winner) } };
    },
  },
};

export const PLUGIN = {
  name: SITE_NAME,
  nameForModel: "ai_bottleneck_map",
  descriptionForHuman: "Educational map of the physical bottlenecks behind the AI boom: power, memory, optics, and more.",
  descriptionForModel:
    "Use when a user asks what constrains AI data center and infrastructure growth beyond chips (power, HBM memory, optical networking, servers and cooling, sites and backhaul). Returns structured explanations and example companies often mentioned publicly. Never present the examples as investment picks; relay the disclaimer: not investment advice.",
  logo: "/icon.svg",
};
