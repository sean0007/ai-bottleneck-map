import { getMapBottlenecks, type Bottleneck } from "@/lib/bottlenecks";

export type QuizOption = {
  id: string;
  label: string;
  slug: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "Chip production for data centers can ramp fast. What does not magically keep up?",
    options: [
      {
        id: "q1-power",
        slug: "power",
        label: "Electrical output, interconnects, and transformers",
      },
      {
        id: "q1-compute",
        slug: "compute",
        label: "High-end accelerators / GPU allocations",
      },
      {
        id: "q1-memory",
        slug: "memory",
        label: "HBM and the packaging that attaches it",
      },
      {
        id: "q1-optics",
        slug: "optics",
        label: "Optical transceivers, lasers, or cluster fabric",
      },
      {
        id: "q1-space",
        slug: "space",
        label: "A viable site, backhaul, or coverage path",
      },
      {
        id: "q1-servers",
        slug: "servers",
        label: "Dense, coolable racks actually assembled",
      },
    ],
  },
  {
    id: "q2",
    prompt: "Which failure mode would stop a new cluster first?",
    options: [
      {
        id: "q2-power",
        slug: "power",
        label: "The utility or substation timeline slips past the lease.",
      },
      {
        id: "q2-compute",
        slug: "compute",
        label: "The chips never show up in the quantity you booked.",
      },
      {
        id: "q2-memory",
        slug: "memory",
        label: "The chips exist on paper but memory yield / attach is the gate.",
      },
      {
        id: "q2-optics",
        slug: "optics",
        label: "The hall is full of boxes that cannot talk to each other fast enough.",
      },
      {
        id: "q2-servers",
        slug: "servers",
        label: "Racks, cooling loops, or firmware integration slip.",
      },
      {
        id: "q2-space",
        slug: "space",
        label: "You cannot place or connect the site where users actually are.",
      },
    ],
  },
  {
    id: "q3",
    prompt: "What do your infrastructure people actually argue about?",
    options: [
      {
        id: "q3-power",
        slug: "power",
        label: "PUE, substations, and whether the campus can energize",
      },
      {
        id: "q3-compute",
        slug: "compute",
        label: "Who gets the next accelerator allocation",
      },
      {
        id: "q3-memory",
        slug: "memory",
        label: "Bandwidth, HBM generations, and packaging risk",
      },
      {
        id: "q3-optics",
        slug: "optics",
        label: "East-west traffic, transceivers, and the network wall",
      },
      {
        id: "q3-space",
        slug: "space",
        label: "Geography, fiber, satellite backhaul, remote coverage",
      },
      {
        id: "q3-servers",
        slug: "servers",
        label: "Liquid cooling, rack design, and who builds the box",
      },
    ],
  },
  {
    id: "q4",
    prompt: "If accelerators showed up tomorrow, what still wouldn’t be ready?",
    options: [
      {
        id: "q4-power",
        slug: "power",
        label: "Power, heat rejection, or the interconnect to the grid",
      },
      {
        id: "q4-memory",
        slug: "memory",
        label: "The memory/packaging combo that makes those chips complete",
      },
      {
        id: "q4-optics",
        slug: "optics",
        label: "The optical fabric between racks",
      },
      {
        id: "q4-servers",
        slug: "servers",
        label: "Chassis, cooling manifolds, and factory integration",
      },
      {
        id: "q4-space",
        slug: "space",
        label: "A place to put them that can actually reach users",
      },
    ],
  },
  {
    id: "q5",
    prompt: "Which constraint would you want a friend to understand first?",
    options: [
      {
        id: "q5-power",
        slug: "power",
        label: "Power — electricity does not appear because chips were allocated",
      },
      {
        id: "q5-compute",
        slug: "compute",
        label: "Compute — the accelerator queue is still real",
      },
      {
        id: "q5-memory",
        slug: "memory",
        label: "Memory — FLOPs starve without HBM",
      },
      {
        id: "q5-optics",
        slug: "optics",
        label: "Optics — light is the new copper problem",
      },
      {
        id: "q5-space",
        slug: "space",
        label: "Space — land, latency, and coverage are inputs too",
      },
      {
        id: "q5-servers",
        slug: "servers",
        label: "Servers — chips are not clusters",
      },
    ],
  },
];

export function scoreQuiz(answers: string[]) {
  const tallies = new Map<string, number>();
  for (const slug of answers) {
    tallies.set(slug, (tallies.get(slug) ?? 0) + 1);
  }

  let winner = getMapBottlenecks()[0];
  let best = -1;
  for (const bottleneck of getMapBottlenecks()) {
    const value = tallies.get(bottleneck.slug) ?? 0;
    if (value > best) {
      best = value;
      winner = bottleneck;
    }
  }
  return winner;
}

export function resultCopy(bottleneck: Bottleneck) {
  return {
    headline: `Your stack looks most constrained in ${bottleneck.shortTitle}.`,
    body: bottleneck.oneLiner,
  };
}
