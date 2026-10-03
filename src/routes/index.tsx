import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, PointerEvent, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  Database,
  FlaskConical,
  Linkedin,
  MapPin,
  Phone,
  Radio,
  Server,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import resumeAsset from "@/assets/vaibhav-resume.pdf.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Sharma | AI & Backend Software Engineer" },
      {
        name: "description",
        content:
          "Vaibhav Sharma builds AI-powered software and scalable backend systems with Generative AI, Agentic AI, RAG, Java, Spring Boot and Python.",
      },
      { property: "og:title", content: "Vaibhav Sharma | AI & Backend Software Engineer" },
      {
        property: "og:description",
        content:
          "Software engineer applying Generative AI, Agentic AI and RAG to real enterprise engineering problems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const positioning = ["AI Engineering", "Backend Engineering", "Agentic AI", "RAG", "Java", "Python"];

const whatIBuild = [
  {
    icon: BrainCircuit,
    label: "GENERATIVE AI",
    title: "LLM-powered engineering tools",
    text: "Code generation, documentation, refactoring and API generation workflows built on LangChain and RAG pipelines.",
  },
  {
    icon: Bot,
    label: "AGENTIC AI",
    title: "Multi-step autonomous workflows",
    text: "LangGraph agents that plan, call tools and complete engineering tasks with review checkpoints.",
  },
  {
    icon: Server,
    label: "BACKEND",
    title: "Scalable Java & Spring services",
    text: "Secure REST APIs, OAuth 2.0 authentication and parallel processing designed for enterprise traffic.",
  },
  {
    icon: Workflow,
    label: "AUTOMATION",
    title: "Engineering acceleration",
    text: "Reusable accelerators that remove repetitive delivery work for large engineering teams.",
  },
];

const impact = [
  ["5,000+", "Concurrent authentication requests supported"],
  ["2.5×", "Faster bank enrollment through parallel processing"],
  ["35%", "Reduction in user friction during enrollment"],
  ["50+", "Financial institutions enrolled securely"],
  ["25+", "Application defects resolved at CMA CGM"],
  ["1,000+", "Competitive programming problems solved"],
];

const stack = [
  { label: "AI / LLM", items: ["Generative AI", "Agentic AI", "RAG", "LangChain", "LangGraph", "LlamaIndex", "Hugging Face"] },
  { label: "BACKEND", items: ["Java", "Spring Boot", "Spring Security", "Python", "Go", "C++", "REST APIs", "Microservices", "Kafka"] },
  { label: "DATA & VECTOR", items: ["PostgreSQL", "MySQL", "Redis", "FAISS", "Pinecone"] },
  { label: "DEVOPS & TESTING", items: ["Docker", "Kubernetes", "Jenkins", "Git", "JUnit", "Vault"] },
];

const aiToolkit = ["Claude Code", "GitHub Copilot", "Google Gemini", "Devin AI"];

const principles = [
  "Ground every AI answer in retrieved, verifiable context.",
  "Design for concurrency before optimising for speed.",
  "Automate the repetitive work, review the important work.",
  "Ship code that another engineer can read on day one.",
];

const exploring = ["Agent evaluation & tracing", "Vector store tuning", "Model context protocols", "LLM cost optimisation"];

const credentials = [
  { title: "Full Stack Generative and Agentic AI with Python", issuer: "Udemy", issued: "Issued Sep 2026" },
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic" },
  { title: "Complete Guide to Java Testing with JUnit & Mockito", issuer: "LinkedIn" },
  { title: "Data Structure & Algorithms — Series I", issuer: "upGrad" },
  { title: "Machine Learning Workshop", issuer: "Coding Blocks" },
  { title: "AWS Fundamentals: Going Cloud-Native", issuer: "Amazon Web Services (AWS)" },
  { title: "Introduction to Cybersecurity Tools & Cyber Attacks", issuer: "IBM" },
  { title: "Devin Certification", issuer: "Devin" },
];

function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const xRatio = x / bounds.width - 0.5;
    const yRatio = y / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    event.currentTarget.style.setProperty("--mouse-shift-x", `${xRatio * 18}px`);
    event.currentTarget.style.setProperty("--mouse-shift-y", `${yRatio * 14}px`);
  };

  const resetHeroPointer = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--mouse-x", "50%");
    event.currentTarget.style.setProperty("--mouse-y", "32%");
    event.currentTarget.style.setProperty("--mouse-shift-x", "0px");
    event.currentTarget.style.setProperty("--mouse-shift-y", "0px");
  };

  return (
    <div className={`${theme === "light" ? "theme-light " : ""}min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300`}>
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold" aria-label="Vaibhav Sharma, home">
          <span className="grid size-9 place-items-center rounded-md bg-brand-gradient font-mono text-sm font-bold text-primary-foreground">VS</span>
          <span className="text-sm text-muted-foreground">vaibhav<span className="text-foreground">.sharma</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#impact">Impact</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#stack">Stack</a>
          <a className="nav-link" href="#lab">AI Lab</a>
          <a className="nav-link" href="#credentials">Credentials</a>
        </nav>
        <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="button-outline">
          <Download className="size-4" aria-hidden="true" /><span className="hidden sm:inline">Résumé</span>
        </a>
      </header>

      <main id="top">
        <section
          className="mouse-reactive hero-grid relative border-b border-border"
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={resetHeroPointer}
        >
          <div className="hero-glow" />
          <div className="cursor-aura" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-14 text-center sm:px-6 sm:pt-20">
            <div className="animate-rise mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 font-mono text-[11px] text-muted-foreground backdrop-blur">
              <span className="status-dot" />
              SPECIALIST PROGRAMMER · INFOSYS
            </div>
            <h1 className="animate-rise-delay mx-auto max-w-5xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Software Engineer building <span className="hero-text">AI-powered software</span> and scalable backend systems.
            </h1>
            <p className="animate-rise-delay-2 mx-auto mt-7 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build intelligent engineering solutions using Generative AI, Agentic AI, RAG, Java, Spring Boot, Python, and modern software engineering practices.
            </p>
            <div className="animate-rise-delay-2 mt-6 flex flex-wrap items-center justify-center gap-2">
              {positioning.map((item) => <span key={item} className="tech-tag">{item}</span>)}
            </div>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#work" className="button-primary">View My Work <ArrowDown className="size-4" aria-hidden="true" /></a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="button-outline">
                <Download className="size-4" aria-hidden="true" /> Download Resume
              </a>
            </div>
            <LiveSystemTrace />
            <TerminalPlayground theme={theme} onThemeChange={setTheme} />
          </div>
        </section>

        <section aria-label="Career highlights" className="border-b border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {impact.slice(0, 4).map(([value, label]) => (
              <div key={label} className="stat-cell px-4 py-8 text-center sm:px-6">
                <div className="font-mono text-2xl font-bold text-foreground sm:text-3xl">{value}</div>
                <div className="mt-2 text-[10px] uppercase leading-4 text-muted-foreground sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="build" className="section-shell">
          <div className="section-heading">
            <div><p className="eyebrow">WHAT I BUILD</p><h2>AI applied to real engineering problems.</h2></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatIBuild.map((item) => (
              <article key={item.title} className="project-card accent-violet">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-5 font-mono text-[10px] text-muted-foreground">{item.label}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="border-y border-border bg-card/30 scroll-mt-4">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">ENGINEERING IMPACT</p><h2>Numbers from shipped work.</h2></div></div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {impact.map(([value, label]) => (
                <div key={label} className="bg-background p-6">
                  <p className="font-mono text-3xl font-bold text-foreground">{value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell scroll-mt-4">
          <div className="section-heading">
            <div><p className="eyebrow">CASE STUDIES</p><h2>Systems I designed and delivered.</h2></div>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">03 / DEEP DIVES</span>
          </div>

          <article className="case-panel">
            <p className="font-mono text-[10px] text-primary">01 / LEGACY MODERNIZATION · APL LOGISTICS</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">COBOL applications rebuilt with AI assistance</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              A proof of concept that uses Generative AI to read legacy COBOL programs, extract business rules and regenerate them as a modern Java Spring Boot backend with an Angular front end.
            </p>
            <div className="flow-rail mt-8">
              {["Legacy COBOL", "AI rule extraction", "Spring Boot services", "Angular UI"].map((step, i) => (
                <span key={step} className="flow-node">
                  {step}
                  {i < 3 && <ArrowRight className="size-3.5 text-primary" aria-hidden="true" />}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Generative AI", "Java", "Spring Boot", "Angular", "COBOL"].map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </article>

          <article className="case-panel mt-4">
            <p className="font-mono text-[10px] text-primary">02 / RAG PROJECT · SLA DOC INSIGHTS</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Document intelligence for SLA contracts</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Upload an agreement and ask questions about it. The app extracts document structure, embeds the content and returns grounded answers with the supporting passages.
            </p>
            <ArchitectureExplorer />
            <div className="mt-7 flex flex-wrap gap-2">
              {["Python", "Gemini 1.5", "Azure Document Intelligence", "FAISS", "RAG"].map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </article>

          <article className="case-panel mt-4">
            <p className="font-mono text-[10px] text-primary">03 / PAYMENTS · VISA BANK ENROLLMENT</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Secure enrollment for 50+ financial institutions</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Built the enrollment service with Spring Security and OAuth 2.0, using parallel processing to reach 2.5× faster onboarding, support 5,000+ concurrent authentication requests and cut user friction by 35%.
            </p>
            <div className="flow-rail mt-8">
              {["Bank request", "OAuth 2.0 auth", "Parallel enrollment", "Secure activation"].map((step, i) => (
                <span key={step} className="flow-node">
                  {step}
                  {i < 3 && <ArrowRight className="size-3.5 text-primary" aria-hidden="true" />}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Spring Security", "OAuth 2.0", "Vault", "JUnit"].map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </article>
        </section>

        <section id="experience" className="border-y border-border bg-card/30 scroll-mt-4">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">EXPERIENCE</p><h2>From enterprise systems to AI platforms.</h2></div></div>
            <div className="experience-grid">
              <div className="experience-meta">
                <BriefcaseBusiness className="size-5 text-primary" />
                <span>INFOSYS LIMITED</span>
                <span className="text-muted-foreground">FEB 2024 — PRESENT</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin className="size-3.5" /> Bengaluru, India</span>
              </div>
              <div className="space-y-9">
                <Experience title="Exponential Engineering · AI Platform" date="Dec 2025 — Present" text="Developing next-generation engineering accelerators with Generative AI, Agentic AI, RAG, LangChain and LangGraph — covering code generation, documentation, testing, debugging, refactoring and API generation." />
                <Experience title="Visa Payments" date="Jan 2025 — Nov 2025" text="Delivered secure bank enrollment using Java, Spring Boot, Spring Security and OAuth 2.0, reaching 2.5× faster enrollment and 5,000+ concurrent authentication requests." />
                <Experience title="CMA CGM" date="Jul 2024 — Dec 2024" text="Developed enterprise logistics features with Java, Spring Boot, REST APIs and SQL, resolving 25+ application defects and improving release stability." />
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell scroll-mt-4">
          <div className="section-heading"><div><p className="eyebrow">ENGINEERING STACK</p><h2>Tools I use from idea to production.</h2></div></div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {stack.map((group) => (
              <div key={group.label} className="bg-background p-6">
                <p className="font-mono text-[10px] text-primary">{group.label}</p>
                <div className="mt-5 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-border bg-card/40 p-6">
            <p className="font-mono text-[10px] text-primary">AI TOOLKIT I WORK WITH DAILY</p>
            <div className="tool-rail mt-5">
              {aiToolkit.map((tool) => <span key={tool} className="tool-pill">{tool}</span>)}
            </div>
          </div>
        </section>

        <section id="lab" className="border-y border-border bg-card/30 scroll-mt-4">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">AI LAB</p><h2>How I keep sharpening the craft.</h2></div></div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <p className="inline-flex items-center gap-2 font-mono text-[10px] text-primary"><FlaskConical className="size-3.5" /> CURRENTLY EXPLORING</p>
                <div className="mt-5 flex flex-wrap gap-2">{exploring.map((item) => <span key={item} className="skill-chip">{item}</span>)}</div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <p className="font-mono text-[10px] text-primary">ENGINEERING PRINCIPLES</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {principles.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="credentials" className="section-shell scroll-mt-4">
          <div className="section-heading"><div><p className="eyebrow">MILESTONES & CREDENTIALS</p><h2>Built on consistency.</h2></div></div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 font-mono text-[10px] text-primary">COMPETITIVE PROGRAMMING</p>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <Milestone value="906" label="All India rank" detail="CodeKaze 2023 · 1.4 lakh+ participants" />
                <Milestone value="548" label="Global rank" detail="Codegoda 2022 · 49,000+ participants" />
                <Milestone value="1,000+" label="Problems solved" detail="Consistent competitive programming practice" />
              </div>
              <div className="mt-4 flex items-center gap-4 rounded-lg border border-border bg-background p-5">
                <Sparkles className="size-5 shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">B.Tech in Information Technology · 84%</span><br />Pranveer Singh Institute of Technology, Kanpur · 2019–2023</p>
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="font-mono text-[10px] text-primary">CERTIFICATIONS</p>
                <span className="font-mono text-[10px] text-muted-foreground">{String(credentials.length).padStart(2, "0")} CREDENTIALS</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-border">
                {credentials.map((credential, index) => (
                  <article key={credential.title} className="flex gap-4 border-b border-border bg-card p-5 last:border-b-0">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-background font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-5 sm:text-base">{credential.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px]">
                        <span className="text-primary">{credential.issuer.toUpperCase()}</span>
                        {credential.issued && <span className="text-muted-foreground">{credential.issued.toUpperCase()}</span>}
                      </div>
                    </div>
                    <Award className="ml-auto size-4 shrink-0 text-accent" aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/30">
          <div className="section-shell text-center">
            <p className="eyebrow">OPEN TO OPPORTUNITIES</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
              Looking for AI engineering and backend roles where both sides matter.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Enterprise software experience, applied Generative and Agentic AI, and a habit of solving hard problems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://www.linkedin.com/in/vaibhav-sharma-3020/" target="_blank" rel="noreferrer" className="button-primary"><Linkedin className="size-4" /> Connect on LinkedIn</a>
              <a href="tel:+919305338724" className="button-outline"><Phone className="size-4" /> +91 93053 38724</a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="button-outline"><Download className="size-4" /> Download Resume</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono">© 2026 VAIBHAV SHARMA<span className="cursor text-primary">_</span></p>
          <div className="flex gap-6"><a className="nav-link" href="https://www.linkedin.com/in/vaibhav-sharma-3020/" target="_blank" rel="noreferrer">LinkedIn</a><a className="nav-link" href={resumeAsset.url} target="_blank" rel="noreferrer">Résumé</a></div>
        </div>
      </footer>
    </div>
  );
}

function ArchitectureExplorer() {
  const [open, setOpen] = useState(false);
  const steps = [
    ["Upload", "PDF or DOCX agreement received"],
    ["Extract", "Azure Document Intelligence parses layout and tables"],
    ["Chunk & embed", "Sections split and stored as vectors in FAISS"],
    ["Retrieve", "Semantic search finds the relevant SLA clauses"],
    ["Generate", "Gemini 1.5 answers grounded in retrieved passages"],
  ];
  return (
    <div className="mt-8">
      <Button type="button" variant="outline" onClick={() => setOpen((v) => !v)} className="button-outline h-auto shadow-none">
        {open ? "Hide Architecture" : "Explore Architecture"} <ArrowRight className={`size-4 transition-transform ${open ? "rotate-90" : ""}`} aria-hidden="true" />
      </Button>
      {open && (
        <ol className="arch-list mt-6">
          {steps.map(([title, detail], index) => (
            <li key={title} className="arch-step">
              <span className="arch-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function Experience({ title, date, text }: { title: string; date: string; text: string }) {
  return <article className="relative border-l border-border pl-6"><span className="timeline-dot" /><p className="font-mono text-[10px] text-primary">{date.toUpperCase()}</p><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{text}</p></article>;
}

function Milestone({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <article className="rounded-lg border border-border bg-card/40 p-6"><p className="font-mono text-3xl font-bold text-foreground">{value}</p><p className="mt-5 text-sm font-semibold">{label}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></article>;
}

function LiveSystemTrace() {
  const nodes = [
    { label: "Request", detail: "query", icon: Radio },
    { label: "Retrieve", detail: "vector", icon: Database },
    { label: "Reason", detail: "agent", icon: BrainCircuit },
    { label: "Respond", detail: "grounded", icon: Sparkles },
  ];

  return (
    <div className="system-trace animate-rise-delay-2 mx-auto mt-12 max-w-3xl" aria-label="Animated AI request pipeline">
      <div className="system-trace-head">
        <span className="inline-flex items-center gap-2"><span className="status-dot" /> LIVE REQUEST PIPELINE</span>
        <span className="system-latency"><span className="latency-value">84</span> MS</span>
      </div>
      <div className="system-track" aria-hidden="true">
        <span className="data-packet packet-one" />
        <span className="data-packet packet-two" />
        {nodes.map((node, index) => (
          <div className="system-node" key={node.label}>
            <span className="node-ring"><node.icon className="size-4" /></span>
            <span className="system-node-copy"><strong>{node.label}</strong><small>{node.detail}</small></span>
            {index < nodes.length - 1 && <span className="node-link" />}
          </div>
        ))}
      </div>
    </div>
  );
}

const terminalCommands: Record<string, string[]> = {
  help: ["PROFILE  about · work · impact · projects · experience · stack", "PROOF    achievements · credentials · education · toolkit · principles", "SYSTEM   whoami · ls · history · date · theme · light · dark · clear", "NAVIGATE goto work | impact | experience | stack | lab | credentials | contact"],
  about: ["Vaibhav Sharma — AI & Backend Software Engineer", "Specialist Programmer at Infosys, building AI-powered software and scalable backend systems."],
  work: ["Generative AI  → LLM engineering tools", "Agentic AI     → LangGraph autonomous workflows", "Backend        → Java, Spring Boot, secure APIs", "Automation     → reusable engineering accelerators"],
  impact: ["→ 5,000+ concurrent auth requests", "→ 2.5× faster enrollment", "→ 35% less user friction", "→ 50+ financial institutions", "→ 25+ defects resolved", "→ 1,000+ problems solved"],
  projects: ["01  APL Logistics COBOL → Java modernization", "02  SLA Doc Insights (RAG document intelligence)", "03  Visa Bank Enrollment"],
  experience: ["Infosys Limited · Feb 2024 — Present · Bengaluru", "  Exponential Engineering AI Platform  Dec 2025 — Present", "  Visa Payments                        Jan 2025 — Nov 2025", "  CMA CGM                              Jul 2024 — Dec 2024"],
  stack: ["AI/LLM   : Generative AI, Agentic AI, RAG, LangChain, LangGraph", "Backend  : Java, Spring Boot, Python, Go, C++, Kafka", "Data     : PostgreSQL, MySQL, Redis, FAISS, Pinecone", "DevOps   : Docker, Kubernetes, Jenkins, Git, JUnit"],
  achievements: ["CodeKaze 2023 — All India rank 906", "Codegoda 2022 — Global rank 548", "Infosys Make-a-thon 2025 — Finalist"],
  credentials: credentials.map((credential) => `${credential.title} — ${credential.issuer}${credential.issued ? ` · ${credential.issued}` : ""}`),
  certifications: ["Alias detected: credentials", ...credentials.map((credential) => `${credential.title} — ${credential.issuer}`)],
  education: ["B.Tech in Information Technology · 84%", "Pranveer Singh Institute of Technology, Kanpur · 2019–2023"],
  toolkit: ["Claude Code · AI-assisted development", "GitHub Copilot · AI pair programming", "Google Gemini · LLM-powered applications", "Devin AI · AI software engineering"],
  principles: principles.map((principle) => `→ ${principle}`),
  whoami: ["vaibhav", "AI & Backend Software Engineer · Specialist Programmer @ Infosys"],
  ls: ["about/  work/  impact/  projects/  experience/", "stack/  lab/  credentials/  contact/  resume.pdf"],
  contact: ["LinkedIn: linkedin.com/in/vaibhav-sharma-3020", "Phone: +91 93053 38724"],
  resume: ["Opening Vaibhav's résumé in a new tab…"],
};

function TerminalPlayground({ theme, onThemeChange }: { theme: "dark" | "light"; onThemeChange: (theme: "dark" | "light") => void }) {
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<string[]>(["Welcome. Type ‘help’ to explore my profile.", "Try ‘light’ or ‘dark’ to change the website theme."]);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    setHistory((current) => [...current, command]);
    if (command === "clear") {
      setLines([]);
    } else if (command === "light" || command === "dark") {
      onThemeChange(command);
      setLines((current) => [...current, `$ ${command}`, `Theme changed to ${command} mode.`]);
    } else if (command === "theme") {
      setLines((current) => [...current, "$ theme", `Current theme: ${theme}. Use ‘light’ or ‘dark’ to switch.`]);
    } else if (command === "history") {
      setLines((current) => [...current, "$ history", ...(history.length ? history.map((item, index) => `${index + 1}  ${item}`) : ["No command history yet."])]);
    } else if (command === "date") {
      setLines((current) => [...current, "$ date", new Intl.DateTimeFormat("en-IN", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date())]);
    } else if (command.startsWith("goto ")) {
      const destination = command.slice(5).trim();
      const validDestinations: Record<string, string> = { work: "work", projects: "work", impact: "impact", experience: "experience", stack: "stack", lab: "lab", achievements: "credentials", credentials: "credentials", contact: "contact" };
      const targetId = validDestinations[destination];
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setLines((current) => [...current, `$ ${command}`, `Navigating to ${destination}…`]);
      } else {
        setLines((current) => [...current, `$ ${command}`, "Unknown destination. Try: goto work, stack, lab, credentials, or contact."]);
      }
    } else {
      setLines((current) => [...current, `$ ${command}`, ...(terminalCommands[command] ?? [`command not found: ${command}`, "Type ‘help’ for available commands."])]);
      if (command === "resume") window.open(resumeAsset.url, "_blank", "noopener,noreferrer");
    }
    setValue("");
    inputRef.current?.focus();
  };

  const runCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand(value);
  };

  return (
    <div className="terminal-window terminal-live animate-rise-delay-2 mx-auto mt-3 max-w-3xl text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2"><span className="terminal-light bg-destructive" /><span className="terminal-light bg-accent" /><span className="terminal-light bg-primary" /></div>
        <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground"><Terminal className="size-3.5" /> vaibhav@portfolio:~</span>
        <span className="w-12" />
      </div>
      <div className="min-h-48 max-h-64 overflow-y-auto p-5 font-mono text-xs leading-6 sm:text-sm" aria-live="polite">
        {lines.map((line, index) => <p key={`${line}-${index}`} className={line.startsWith("$") ? "text-primary" : "whitespace-pre-wrap text-muted-foreground"}>{line}</p>)}
        <form onSubmit={runCommand} className="mt-1 flex items-center gap-2">
          <label htmlFor="terminal-input" className="text-primary">$</label>
          <input ref={inputRef} id="terminal-input" value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck={false} className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50" placeholder="try: help" aria-label="Terminal command" />
        </form>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
        {["help", "projects", "credentials", "goto work", "light", "dark", "clear"].map((command) => <Button key={command} type="button" variant="ghost" size="sm" className="terminal-command h-auto shadow-none" onClick={() => executeCommand(command)}>{command}</Button>)}
      </div>
    </div>
  );
}
