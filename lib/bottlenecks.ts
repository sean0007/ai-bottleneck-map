export type ExampleCompany = {
  ticker: string;
  name: string;
  venue: string;
  whyCited: string;
};

export type Bottleneck = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  threadLine: string;
  oneLiner: string;
  whyHeadline: string;
  why: string[];
  color: string;
  colorSoft: string;
  examples: ExampleCompany[];
  privateOrAdjacent?: string;
  featured?: boolean;
};

export const bottlenecks: Bottleneck[] = [
  {
    slug: "compute",
    number: "01",
    title: "Compute",
    shortTitle: "Compute",
    threadLine: "The accelerator everyone already argues about — still a real queue.",
    oneLiner:
      "Training and serving models still collide with how fast advanced accelerators can actually be produced, packed, and allocated.",
    whyHeadline: "Why compute still bottlenecks",
    why: [
      "Public AI infrastructure talk still starts with accelerators because demand for training and inference has outrun a comfortable supply of the highest-end chips. That is a manufacturing and allocation story, not a slogan.",
      "A finished accelerator is the end of a long chain: leading-edge foundry wafers, advanced packaging, high-bandwidth memory (a separate node on this map), firmware, and a buyer who can actually get a slot. Any tight link in that chain looks like “we can’t get GPUs.”",
      "Custom silicon from large cloud providers competes for some of the same wafer and packaging capacity. The bottleneck is not only one brand — it is how many complete, power-hungry accelerators the physical stack can ship in a year.",
      "Compute eases in cycles. When it does, the constraint often slides into memory, optics, power, or the servers that turn chips into clusters. That is why this map has six nodes, not one.",
    ],
    color: "#f0b429",
    colorSoft: "rgba(240,180,41,0.16)",
    examples: [
      {
        ticker: "NVDA",
        name: "NVIDIA",
        venue: "NASDAQ",
        whyCited:
          "Often cited as the default maker of the accelerators that dominate public AI-cluster discussions.",
      },
      {
        ticker: "AMD",
        name: "Advanced Micro Devices",
        venue: "NASDAQ",
        whyCited:
          "Often cited as an alternative accelerator supplier in the same public buildout conversation.",
      },
      {
        ticker: "TSM",
        name: "TSMC",
        venue: "NYSE",
        whyCited:
          "Often cited as the leading-edge foundry that many AI accelerators depend on before they ever reach a rack.",
      },
    ],
  },
  {
    slug: "memory",
    number: "02",
    title: "Memory / HBM",
    shortTitle: "Memory",
    threadLine: "The stacking problem inside the package — FLOPs starve without bandwidth.",
    oneLiner:
      "High-bandwidth memory and advanced packaging decide how many complete accelerators can ship, not just how fast they theoretically calculate.",
    whyHeadline: "Why memory / HBM bottlenecks",
    why: [
      "Modern accelerators are hungry for bytes, not just math. High-bandwidth memory (HBM) stacked on or beside the compute die is what keeps those chips fed. Without it, a “GPU shortage” is sometimes a memory-and-packaging shortage wearing a GPU costume.",
      "HBM is a different industrial problem than commodity DRAM. It needs through-silicon vias, tight stacking yields, and a packaging line that can attach memory to an expensive logic die without scrapping both.",
      "Public commentary from chipmakers and cloud builders keeps returning to memory bandwidth as a limiter even when headline FLOPs look abundant. The map treats that as a first-class node.",
      "If HBM supply loosens, watch whether the next bind is optics (moving data between chips) or power (running the denser boxes you can finally fill).",
    ],
    color: "#7aa2ff",
    colorSoft: "rgba(122,162,255,0.16)",
    examples: [
      {
        ticker: "MU",
        name: "Micron Technology",
        venue: "NASDAQ",
        whyCited:
          "Often cited among the handful of firms that can manufacture high-bandwidth memory at scale.",
      },
      {
        ticker: "000660.KS",
        name: "SK hynix",
        venue: "KRX",
        whyCited:
          "Often cited in public AI-infra discussions as a leading HBM supplier used in advanced accelerators.",
      },
      {
        ticker: "005930.KS",
        name: "Samsung Electronics",
        venue: "KRX",
        whyCited:
          "Often cited as another major memory manufacturer in the HBM conversation — not as a score or forecast.",
      },
    ],
  },
  {
    slug: "optics",
    number: "03",
    title: "Optics",
    shortTitle: "Optics",
    threadLine: "Once you stack enough chips, moving tokens becomes a physics problem.",
    oneLiner:
      "Copper runs out of steam between racks. Lasers, transceivers, and optical switches become the fabric of a cluster.",
    whyHeadline: "Why optics bottleneck",
    why: [
      "A large training job is a networking problem wearing a model-architecture costume. Gradient updates and expert routing only work if accelerators can talk to each other fast enough, with enough energy efficiency to stay on.",
      "Inside a rack, copper still carries a lot of short-reach traffic. Between racks and rows, optical transceivers, lasers, fiber, and increasingly co-packaged optics show up in public roadmaps as the way to keep scaling.",
      "Optics has its own supply chain: indium phosphide and silicon photonics, DSP silicon, packaging, and the switch chips that sit in the spine of a data hall. That chain does not magically expand just because GPU allocations improve.",
      "When people say “the network is the new wall,” they are usually pointing at this node — the light, not the model card.",
    ],
    color: "#3ee0c5",
    colorSoft: "rgba(62,224,197,0.16)",
    examples: [
      {
        ticker: "COHR",
        name: "Coherent",
        venue: "NYSE",
        whyCited:
          "Often cited for lasers, transceivers, and optical components that show up in AI-cluster networking discussions.",
      },
      {
        ticker: "LITE",
        name: "Lumentum",
        venue: "NASDAQ",
        whyCited:
          "Often cited alongside other photonics names when people map datacom optics for large clusters.",
      },
      {
        ticker: "AVGO",
        name: "Broadcom",
        venue: "NASDAQ",
        whyCited:
          "Often cited for switching silicon and optical-related parts of the AI networking stack — not as a price target.",
      },
    ],
  },
  {
    slug: "power",
    number: "04",
    title: "Power",
    shortTitle: "Power",
    featured: true,
    threadLine: "Chip production can ramp. Electricity does not appear because a cluster was funded.",
    oneLiner:
      "Accelerators can be ordered on a factory calendar. Megawatts, transformers, and interconnection queues cannot. Electrical supply is the bind that does not care about a GPU keynote.",
    whyHeadline: "Why power — electricity — is the hero bottleneck",
    why: [
      "Public remarks from Elon Musk have framed a mismatch that keeps showing up in AI-infrastructure talk: chip production for data centers can scale on a manufacturing curve, while electrical output — especially outside China — stays relatively flat. The cluster still needs a grid that exists in the physical world.",
      "AI halls draw continuous, dense electricity and dump it as heat. Land with fiber is not enough; the site needs a path to generation, transmission, substations, and transformers that can be delivered on a human timescale. There is no spare electricity that materializes because chips were allocated.",
      "Interconnection queues and high-voltage equipment are industrial products with long lead times. Public utility and developer commentary often treats “we leased the land” as the beginning of the power story, not the end.",
      "Cooling is part of the same node on this map: liquid loops, heat rejection, and the electrical gear that feeds them. A rack that cannot be cooled is a rack that cannot be filled. When compute supply improves, power is the constraint most likely to become the public talking point next — because you cannot software-update a substation.",
    ],
    color: "#ff6b4a",
    colorSoft: "rgba(255,107,74,0.16)",
    examples: [
      {
        ticker: "CEG",
        name: "Constellation Energy",
        venue: "NASDAQ",
        whyCited:
          "Often cited in public discussions of firm, around-the-clock power (including nuclear) for large compute loads.",
      },
      {
        ticker: "VST",
        name: "Vistra",
        venue: "NYSE",
        whyCited:
          "Often cited among independent power producers mentioned when people talk about feeding AI campuses.",
      },
      {
        ticker: "GEV",
        name: "GE Vernova",
        venue: "NYSE",
        whyCited:
          "Often cited for generation and grid equipment that has to exist before a dense data hall can stay on.",
      },
    ],
  },
  {
    slug: "space",
    number: "05",
    title: "Space / Satellite",
    shortTitle: "Space",
    threadLine: "Ground sites and fiber are finite. Coverage and remote backhaul enter the chat.",
    oneLiner:
      "Land, latency, and last-mile coverage push some of the AI-infra conversation off the ground — toward satellites, remote gateways, and speculative orbital ideas.",
    whyHeadline: "Why space / satellite shows up as a bottleneck",
    why: [
      "This node is the least “chip-like” on the map, and that is the point. Public AI-infrastructure talk now includes where campuses can be built, how they connect to users and other regions, and what happens when terrestrial fiber and suitable land are the scarce inputs.",
      "Satellite constellations and ground stations get cited as ways to backhaul, cover remote sites, or stitch regions together. That does not mean every AI cluster will live in orbit. It means connectivity and location are constraints, not footnotes.",
      "Orbital compute is still mostly a research and narrative layer compared with terrestrial halls. This map includes it as an educational edge of the discussion — not as a claim that satellites replace substations.",
      "If you only map chips, you miss why some operators talk about remote power, new geographies, and non-terrestrial links in the same breath as GPUs.",
    ],
    color: "#c084fc",
    colorSoft: "rgba(192,132,252,0.16)",
    examples: [
      {
        ticker: "ASTS",
        name: "AST SpaceMobile",
        venue: "NASDAQ",
        whyCited:
          "Often cited in public discussions of space-based cellular connectivity — an adjacent thread to remote coverage, not a chip substitute.",
      },
      {
        ticker: "RKLB",
        name: "Rocket Lab",
        venue: "NASDAQ",
        whyCited:
          "Often cited among launch and space-systems names when people talk about getting hardware to orbit.",
      },
      {
        ticker: "IRDM",
        name: "Iridium Communications",
        venue: "NASDAQ",
        whyCited:
          "Often cited as an existing satellite-communications operator in coverage and remote-link discussions.",
      },
    ],
    privateOrAdjacent:
      "A privately held operator (SpaceX / Starlink) is also often cited in this conversation. Private companies have no public ticker on this map on purpose.",
  },
  {
    slug: "servers",
    number: "06",
    title: "Servers",
    shortTitle: "Servers",
    threadLine: "Accelerators don’t plug themselves in. Someone has to build the box.",
    oneLiner:
      "Rack-scale design, liquid cooling, firmware, and contract manufacturing turn chips into a cluster you can actually run.",
    whyHeadline: "Why servers bottleneck",
    why: [
      "A GPU on a pallet is not a training cluster. It needs a board, a chassis, power delivery, cooling, networking mezzanines, firmware, and a factory that can assemble the whole thing without a multi-year wait.",
      "Public discussions of “server lead times” sit next to chip lead times for a reason. Rack-scale designs (dense, liquid-cooled, tightly networked) are their own product cycle, with their own vendors and their own capacity limits.",
      "Some firms sell the boxes; some firms rent the boxes as GPU cloud. Both show up in educational maps because they are how accelerators become a service. Neither is a recommendation.",
      "When compute and memory loosen, server integration can still bind — especially if the industry is shifting from air-cooled racks to liquid-cooled, high-density designs at the same time.",
    ],
    color: "#a3e635",
    colorSoft: "rgba(163,230,53,0.16)",
    examples: [
      {
        ticker: "SMCI",
        name: "Super Micro Computer",
        venue: "NASDAQ",
        whyCited:
          "Often cited as a builder of dense AI servers and rack-scale systems in public infra discussions.",
      },
      {
        ticker: "DELL",
        name: "Dell Technologies",
        venue: "NYSE",
        whyCited:
          "Often cited among incumbent server vendors supplying AI-oriented systems to enterprises and clouds.",
      },
      {
        ticker: "HPE",
        name: "Hewlett Packard Enterprise",
        venue: "NYSE",
        whyCited:
          "Often cited for servers and liquid-cooled / supercomputing systems that show up in the same buildout talk.",
      },
    ],
  },
];

export function getBottleneck(slug: string) {
  return bottlenecks.find((item) => item.slug === slug);
}

export function getBottleneckSlugs() {
  return bottlenecks.map((item) => item.slug);
}

export function getNeighborBottlenecks(slug: string) {
  const index = bottlenecks.findIndex((item) => item.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: bottlenecks[(index + bottlenecks.length - 1) % bottlenecks.length],
    next: bottlenecks[(index + 1) % bottlenecks.length],
  };
}

export function getFeaturedBottleneck() {
  return bottlenecks.find((item) => item.featured) ?? bottlenecks[0];
}

export function getMapBottlenecks() {
  return [...bottlenecks].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}
