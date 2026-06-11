export type ScopeRow = { label: string; value: string };
export type CaseSection = { label: string; body: string[] };
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string; // one-line for the /work index
  kicker: string[];
  framing: string;
  lede: string;
  sections: CaseSection[];
  scope: ScopeRow[];
};

const teaConnect: CaseStudy = {
  slug: "tea-connect",
  title: "Tea Connect",
  summary: "Brand & product · Hospitality SaaS · 2022–2023",
  kicker: ["Brand & product", "Hospitality SaaS", "2022–2023"],
  framing: "A brief for “an app and a logo,” answered with a product.",
  lede: "One of Culture Collective’s founders — a hospitality owner I’d worked with — had an idea for a messaging app built for restaurants, and brought it to Shipyard, my creative studio, for input. What he framed as an app and a brand, we reframed as a product: a definition of what it was, who it served, and how it would reach a market. From there, the work ran through brand, UX, and launch to a working alpha on both app stores.",
  sections: [
    {
      label: "The problem",
      body: [
        "Across Culture Collective’s restaurants, staff were managing guest communication across Instagram DMs, email, and phone, with several people touching the same conversations. Responses lagged and the voice drifted. The founders wanted something built for how a restaurant actually runs — a coordinated inbox, not another general-purpose messaging tool.",
        "And they were about to put their own name on it in a business that runs on credibility. Launching something that looked half-built wasn’t an option.",
      ],
    },
    {
      label: "The work",
      body: [
        "The request started from an owner’s instinct, not a spec, so the first real work was widening it. There was no product underneath the idea yet — no defined users, no boundaries on what a first version should be — and designing an interface for an undefined product would have produced a handsome dead end. So we defined the product first: who it was for, what it needed to do, and where the first release should stop. That definition is what made the brand and the interface buildable.",
        "Brand and product then ran in parallel rather than in sequence, so the identity and the interface shaped each other instead of one waiting on the other. We sourced and directed a copywriting team for the brand voice, brought in UX testing against the flows, and coordinated a remote development team through the build — all on a design system built to carry iteration.",
      ],
    },
    {
      label: "Where it landed",
      body: [
        "A loose “build us an app” became a scoped product, a complete brand system, eight app screens, and a go-to-market program a team could execute. We shipped a working alpha to the iOS and Android stores, with a launch site and a coherent product story behind it, and put it in front of restaurants.",
        "The deliverable was never a logo — it was a product someone could run with.",
      ],
    },
  ],
  scope: [
    { label: "Client", value: "Culture Collective" },
    { label: "Studio", value: "Shipyard" },
    { label: "Role", value: "Principal, creative director, designer" },
    { label: "Year", value: "2022–2023" },
    { label: "Engagement", value: "Multi-month brand & product build" },
    { label: "Disciplines", value: "Brand strategy · Product definition · UI/UX · Design systems · Go-to-market" },
    { label: "Team", value: "Sourced & directed copywriting, UX testing, remote development" },
  ],
};

const amberHealth: CaseStudy = {
  slug: "amber-health",
  title: "Amber Health",
  summary: "Brand & web · Music-industry mental health · 2023",
  kicker: ["Brand & web", "Music-industry mental health", "2023"],
  framing: "The research became a company. I built the brand it goes to market as.",
  lede: "The touring-industry mental-health research I’d co-authored at THRIV had proven the problem. Then two of the people behind it — including THRIV’s founder — set out to build the service that answered it, and came to me, through Shipyard, with a logo-and-website request and a founder’s name over the door: “BorerNewman.” The first thing I gave them was a different answer. In a guarded, high-trust industry, a brand named after two people has a ceiling. We rebuilt it as Amber Health — a market-facing identity made to scale past the founders who started it. It’s still the name the company runs under today.",
  sections: [
    {
      label: "The problem",
      body: [
        "A touring mental-health service lives or dies on trust. Artists and crews are guarded, the stakes are high, and the founders’ existing identity — named after themselves, on a low-quality site — read as two people, not an institution an industry could lean on. They needed to launch before touring season, and to look established the day they did.",
        "In a field where you’re asking artists to trust you with their most private struggles, looking like a startup isn’t a cosmetic problem — it’s a credibility one.",
      ],
    },
    {
      label: "The work",
      body: [
        "The brief was a logo and a website. The real problem was the name. “BorerNewman” tied the brand’s credibility to two individuals in a market that needed to trust an institution. I repositioned it around the audience instead of the founders — a market-facing brand, Amber Health, with room to grow.",
        "Touring season set the deadline, so we ran it in two phases. Phase one was a fast, credible launch: the identity system, presentation templates, and a one-page point-of-contact site ready for the March 2023 season. Phase two extended it into a fuller brand and web presence. The point of phase one was to look established on day one.",
        "The pitch had real evidence under it — the THRIV study I co-authored, the first major data on mental health in the touring workforce — so the brand could stand on proof, not just empathy. Those materials went out to some of the biggest tours in the world.",
      ],
    },
    {
      label: "Where it landed",
      body: [
        "Amber Health launched on time and went to market pitching major touring clients. More telling: years later, the company still operates under the name and identity I built, and has grown into the industry’s full-service mental-health provider.",
        "The brand outlasted its launch — which is the only real test of a brand.",
      ],
    },
  ],
  scope: [
    { label: "Client", value: "Amber Health" },
    { label: "Studio", value: "Shipyard" },
    { label: "Role", value: "Brand strategist & designer; web design; go-to-market" },
    { label: "Year", value: "2023" },
    { label: "Engagement", value: "Brand repositioning & naming · identity system · point-of-contact site · pitch materials" },
    { label: "Disciplines", value: "Brand strategy & naming · Identity design · Web design · Go-to-market collateral" },
    { label: "Foundation", value: "Built on THRIV research (named study co-author)" },
  ],
};

const thriv: CaseStudy = {
  slug: "tour-health-research-initiative",
  title: "Tour Health Research Initiative",
  summary: "Research, brand & campaign · Touring-industry mental health · 2019–2020",
  kicker: ["Research, brand & campaign", "Touring-industry mental health", "2019–2020"],
  framing: "Turning an industry’s anecdotal pain into evidence credible enough to build on.",
  lede: "The touring music workforce was burning out — sleep, mental health, physical strain — and everyone in it knew. What nobody had was proof: no dataset rigorous enough to move an industry or fund a service. I co-founded the Tour Health Research Initiative to build that proof. The heavy statistics belonged to our academic collaborators; my problem was access — the brand, the campaign, and the distribution that reached 1,154 touring professionals most clinics never could. The result was a peer-reviewed study in the Journal of Psychiatric Research, with my name on it, and a second paper after.",
  sections: [
    {
      label: "The problem",
      body: [
        "Touring crews and artists live in a blind spot — distributed across the world, off the grid for months, outside every normal health system. The strain on them was real but undocumented, and anecdote doesn’t move policy, fund a service, or convince a skeptic. Someone had to turn a known problem into defensible evidence. And getting a transient, hard-to-survey population to respond at all is its own design problem.",
      ],
    },
    {
      label: "The work",
      body: [
        "We turned an informal audience survey into a 236-question instrument a researcher could stand behind — covering sleep, nutrition, physical and mental health — designed with academic collaborators at Yeshiva University, who led the analysis. The heavy statistics were theirs; the access was the problem I owned.",
        "A rigorous instrument is worthless if no one fills it out. I led the initiative’s brand and campaign and ran distribution through the channels touring people actually live in — Instagram and adjacent media — and we reached 1,154 of them, a population no clinic could. We fielded it in February and March 2020, the last clear window before COVID shut touring down for years.",
        "That timing was the point, not luck: in an under-instrumented field, evidence has to be designed and operationalized, not just analyzed. Distribution, collaborator trust, and timing decided whether usable data would exist at all.",
      ],
    },
    {
      label: "Where it landed",
      body: [
        "The dataset produced two peer-reviewed papers — the first in the Journal of Psychiatric Research, which lists me as a co-author — documenting depression, burnout, and suicidality risk across the touring workforce at a scale no one had measured before. The initiative’s launch was covered in Rolling Stone’s feature on the industry’s mental-health reckoning.",
        "And the evidence became a foundation: it fed directly into Amber Health, a touring-industry care service built on what the research proved. Signal became evidence, evidence became publication, and publication became a company.",
      ],
    },
  ],
  scope: [
    { label: "Role", value: "Co-founder; brand & campaign lead; survey operations; named study co-author" },
    { label: "Contribution", value: "Branding, campaign & recruitment, survey distribution & operations (statistical analysis led by academic collaborators)" },
    { label: "Collaborators", value: "Yeshiva University, Ferkauf Graduate School of Psychology" },
    { label: "Fielded", value: "February–March 2020 (pre-COVID) · 1,154 respondents" },
    { label: "Outputs", value: "236-question study · two peer-reviewed papers · Rolling Stone coverage · evidence base for Amber Health" },
  ],
};

export const caseStudies: CaseStudy[] = [teaConnect, amberHealth, thriv];
