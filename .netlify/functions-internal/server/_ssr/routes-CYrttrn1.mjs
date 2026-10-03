import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowDown, a as Radio, c as Linkedin, d as Database, f as BriefcaseBusiness, g as ArrowRight, h as Award, i as Server, l as FlaskConical, m as Bot, n as Terminal, o as Phone, p as BrainCircuit, r as Sparkles, s as MapPin, t as Workflow, u as Download } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYrttrn1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vaibhav_resume_pdf_asset_default = {
	version: 1,
	asset_id: "d8c9e1e0-f5b6-4da5-bb2e-10630d97d075",
	project_id: "956c91f6-a5f5-4628-bb26-a9a57e4f69df",
	url: "/__l5e/assets-v1/d8c9e1e0-f5b6-4da5-bb2e-10630d97d075/Vaibhav-Sharma-Resume.pdf",
	r2_key: "a/v1/956c91f6-a5f5-4628-bb26-a9a57e4f69df/d8c9e1e0-f5b6-4da5-bb2e-10630d97d075/Vaibhav-Sharma-Resume.pdf",
	original_filename: "Vaibhav-Sharma-Resume.pdf",
	size: 61884,
	content_type: "application/pdf",
	created_at: "2026-09-21T16:55:44Z"
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var positioning = [
	"AI Engineering",
	"Backend Engineering",
	"Agentic AI",
	"RAG",
	"Java",
	"Python"
];
var whatIBuild = [
	{
		icon: BrainCircuit,
		label: "GENERATIVE AI",
		title: "LLM-powered engineering tools",
		text: "Code generation, documentation, refactoring and API generation workflows built on LangChain and RAG pipelines."
	},
	{
		icon: Bot,
		label: "AGENTIC AI",
		title: "Multi-step autonomous workflows",
		text: "LangGraph agents that plan, call tools and complete engineering tasks with review checkpoints."
	},
	{
		icon: Server,
		label: "BACKEND",
		title: "Scalable Java & Spring services",
		text: "Secure REST APIs, OAuth 2.0 authentication and parallel processing designed for enterprise traffic."
	},
	{
		icon: Workflow,
		label: "AUTOMATION",
		title: "Engineering acceleration",
		text: "Reusable accelerators that remove repetitive delivery work for large engineering teams."
	}
];
var impact = [
	["5,000+", "Concurrent authentication requests supported"],
	["2.5×", "Faster bank enrollment through parallel processing"],
	["35%", "Reduction in user friction during enrollment"],
	["50+", "Financial institutions enrolled securely"],
	["25+", "Application defects resolved at CMA CGM"],
	["1,000+", "Competitive programming problems solved"]
];
var stack = [
	{
		label: "AI / LLM",
		items: [
			"Generative AI",
			"Agentic AI",
			"RAG",
			"LangChain",
			"LangGraph",
			"LlamaIndex",
			"Hugging Face"
		]
	},
	{
		label: "BACKEND",
		items: [
			"Java",
			"Spring Boot",
			"Spring Security",
			"Python",
			"Go",
			"C++",
			"REST APIs",
			"Microservices",
			"Kafka"
		]
	},
	{
		label: "DATA & VECTOR",
		items: [
			"PostgreSQL",
			"MySQL",
			"Redis",
			"FAISS",
			"Pinecone"
		]
	},
	{
		label: "DEVOPS & TESTING",
		items: [
			"Docker",
			"Kubernetes",
			"Jenkins",
			"Git",
			"JUnit",
			"Vault"
		]
	}
];
var aiToolkit = [
	"Claude Code",
	"GitHub Copilot",
	"Google Gemini",
	"Devin AI"
];
var principles = [
	"Ground every AI answer in retrieved, verifiable context.",
	"Design for concurrency before optimising for speed.",
	"Automate the repetitive work, review the important work.",
	"Ship code that another engineer can read on day one."
];
var exploring = [
	"Agent evaluation & tracing",
	"Vector store tuning",
	"Model context protocols",
	"LLM cost optimisation"
];
var credentials = [
	{
		title: "Full Stack Generative and Agentic AI with Python",
		issuer: "Udemy",
		issued: "Issued Sep 2026"
	},
	{
		title: "Introduction to Model Context Protocol",
		issuer: "Anthropic"
	},
	{
		title: "Complete Guide to Java Testing with JUnit & Mockito",
		issuer: "LinkedIn"
	},
	{
		title: "Data Structure & Algorithms — Series I",
		issuer: "upGrad"
	},
	{
		title: "Machine Learning Workshop",
		issuer: "Coding Blocks"
	},
	{
		title: "AWS Fundamentals: Going Cloud-Native",
		issuer: "Amazon Web Services (AWS)"
	},
	{
		title: "Introduction to Cybersecurity Tools & Cyber Attacks",
		issuer: "IBM"
	},
	{
		title: "Devin Certification",
		issuer: "Devin"
	}
];
function Portfolio() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const handleHeroPointerMove = (event) => {
		if (event.pointerType !== "mouse") return;
		const bounds = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const y = event.clientY - bounds.top;
		const xRatio = x / bounds.width - .5;
		const yRatio = y / bounds.height - .5;
		event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
		event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
		event.currentTarget.style.setProperty("--mouse-shift-x", `${xRatio * 18}px`);
		event.currentTarget.style.setProperty("--mouse-shift-y", `${yRatio * 14}px`);
	};
	const resetHeroPointer = (event) => {
		event.currentTarget.style.setProperty("--mouse-x", "50%");
		event.currentTarget.style.setProperty("--mouse-y", "32%");
		event.currentTarget.style.setProperty("--mouse-shift-x", "0px");
		event.currentTarget.style.setProperty("--mouse-shift-y", "0px");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${theme === "light" ? "theme-light " : ""}min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2.5 font-semibold",
						"aria-label": "Vaibhav Sharma, home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-md bg-brand-gradient font-mono text-sm font-bold text-primary-foreground",
							children: "VS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted-foreground",
							children: ["vaibhav", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: ".sharma"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#work",
								children: "Work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#impact",
								children: "Impact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#experience",
								children: "Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#stack",
								children: "Stack"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#lab",
								children: "AI Lab"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: "#credentials",
								children: "Credentials"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: vaibhav_resume_pdf_asset_default.url,
						target: "_blank",
						rel: "noreferrer",
						className: "button-outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Résumé"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mouse-reactive hero-grid relative border-b border-border",
						onPointerMove: handleHeroPointerMove,
						onPointerLeave: resetHeroPointer,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-glow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cursor-aura",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-14 text-center sm:px-6 sm:pt-20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-rise mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 font-mono text-[11px] text-muted-foreground backdrop-blur",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), "SPECIALIST PROGRAMMER · INFOSYS"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "animate-rise-delay mx-auto max-w-5xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl",
										children: [
											"Software Engineer building ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hero-text",
												children: "AI-powered software"
											}),
											" and scalable backend systems."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "animate-rise-delay-2 mx-auto mt-7 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
										children: "I build intelligent engineering solutions using Generative AI, Agentic AI, RAG, Java, Spring Boot, Python, and modern software engineering practices."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "animate-rise-delay-2 mt-6 flex flex-wrap items-center justify-center gap-2",
										children: positioning.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tech-tag",
											children: item
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-rise-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#work",
											className: "button-primary",
											children: ["View My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
												className: "size-4",
												"aria-hidden": "true"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: vaibhav_resume_pdf_asset_default.url,
											target: "_blank",
											rel: "noreferrer",
											className: "button-outline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
												className: "size-4",
												"aria-hidden": "true"
											}), " Download Resume"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSystemTrace, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalPlayground, {
										theme,
										onThemeChange: setTheme
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "Career highlights",
						className: "border-b border-border bg-card/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
							children: impact.slice(0, 4).map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "stat-cell px-4 py-8 text-center sm:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-2xl font-bold text-foreground sm:text-3xl",
									children: value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[10px] uppercase leading-4 text-muted-foreground sm:text-xs",
									children: label
								})]
							}, label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "build",
						className: "section-shell",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "WHAT I BUILD"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "AI applied to real engineering problems." })] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: whatIBuild.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "project-card accent-violet",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-5 text-primary",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 font-mono text-[10px] text-muted-foreground",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-lg font-semibold leading-snug",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-6 text-muted-foreground",
										children: item.text
									})
								]
							}, item.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "impact",
						className: "border-y border-border bg-card/30 scroll-mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-heading",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "ENGINEERING IMPACT"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Numbers from shipped work." })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
								children: impact.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-3xl font-bold text-foreground",
										children: value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-6 text-muted-foreground",
										children: label
									})]
								}, label))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "work",
						className: "section-shell scroll-mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "CASE STUDIES"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Systems I designed and delivered." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden font-mono text-xs text-muted-foreground sm:block",
									children: "03 / DEEP DIVES"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "case-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-primary",
										children: "01 / LEGACY MODERNIZATION · APL LOGISTICS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-semibold sm:text-3xl",
										children: "COBOL applications rebuilt with AI assistance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-sm leading-7 text-muted-foreground",
										children: "A proof of concept that uses Generative AI to read legacy COBOL programs, extract business rules and regenerate them as a modern Java Spring Boot backend with an Angular front end."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flow-rail mt-8",
										children: [
											"Legacy COBOL",
											"AI rule extraction",
											"Spring Boot services",
											"Angular UI"
										].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flow-node",
											children: [step, i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-3.5 text-primary",
												"aria-hidden": "true"
											})]
										}, step))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-7 flex flex-wrap gap-2",
										children: [
											"Generative AI",
											"Java",
											"Spring Boot",
											"Angular",
											"COBOL"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tech-tag",
											children: t
										}, t))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "case-panel mt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-primary",
										children: "02 / RAG PROJECT · SLA DOC INSIGHTS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-semibold sm:text-3xl",
										children: "Document intelligence for SLA contracts"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-sm leading-7 text-muted-foreground",
										children: "Upload an agreement and ask questions about it. The app extracts document structure, embeds the content and returns grounded answers with the supporting passages."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureExplorer, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-7 flex flex-wrap gap-2",
										children: [
											"Python",
											"Gemini 1.5",
											"Azure Document Intelligence",
											"FAISS",
											"RAG"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tech-tag",
											children: t
										}, t))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "case-panel mt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-primary",
										children: "03 / PAYMENTS · VISA BANK ENROLLMENT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-semibold sm:text-3xl",
										children: "Secure enrollment for 50+ financial institutions"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-sm leading-7 text-muted-foreground",
										children: "Built the enrollment service with Spring Security and OAuth 2.0, using parallel processing to reach 2.5× faster onboarding, support 5,000+ concurrent authentication requests and cut user friction by 35%."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flow-rail mt-8",
										children: [
											"Bank request",
											"OAuth 2.0 auth",
											"Parallel enrollment",
											"Secure activation"
										].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flow-node",
											children: [step, i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-3.5 text-primary",
												"aria-hidden": "true"
											})]
										}, step))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-7 flex flex-wrap gap-2",
										children: [
											"Java",
											"Spring Boot",
											"Spring Security",
											"OAuth 2.0",
											"Vault",
											"JUnit"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tech-tag",
											children: t
										}, t))
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "experience",
						className: "border-y border-border bg-card/30 scroll-mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-heading",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "EXPERIENCE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "From enterprise systems to AI platforms." })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "experience-grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "experience-meta",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "size-5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INFOSYS LIMITED" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "FEB 2024 — PRESENT"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), " Bengaluru, India"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-9",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {
											title: "Exponential Engineering · AI Platform",
											date: "Dec 2025 — Present",
											text: "Developing next-generation engineering accelerators with Generative AI, Agentic AI, RAG, LangChain and LangGraph — covering code generation, documentation, testing, debugging, refactoring and API generation."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {
											title: "Visa Payments",
											date: "Jan 2025 — Nov 2025",
											text: "Delivered secure bank enrollment using Java, Spring Boot, Spring Security and OAuth 2.0, reaching 2.5× faster enrollment and 5,000+ concurrent authentication requests."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {
											title: "CMA CGM",
											date: "Jul 2024 — Dec 2024",
											text: "Developed enterprise logistics features with Java, Spring Boot, REST APIs and SQL, resolving 25+ application defects and improving release stability."
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "stack",
						className: "section-shell scroll-mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-heading",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "ENGINEERING STACK"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tools I use from idea to production." })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2",
								children: stack.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-primary",
										children: group.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: group.items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "skill-chip",
											children: skill
										}, skill))
									})]
								}, group.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-lg border border-border bg-card/40 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] text-primary",
									children: "AI TOOLKIT I WORK WITH DAILY"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tool-rail mt-5",
									children: aiToolkit.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tool-pill",
										children: tool
									}, tool))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "lab",
						className: "border-y border-border bg-card/30 scroll-mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-heading",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "AI LAB"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How I keep sharpening the craft." })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-background p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "inline-flex items-center gap-2 font-mono text-[10px] text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-3.5" }), " CURRENTLY EXPLORING"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: exploring.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "skill-chip",
											children: item
										}, item))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-background p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] text-primary",
										children: "ENGINEERING PRINCIPLES"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 space-y-3 text-sm leading-6 text-muted-foreground",
										children: principles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), p]
										}, p))
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "credentials",
						className: "section-shell scroll-mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "MILESTONES & CREDENTIALS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Built on consistency." })] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 font-mono text-[10px] text-primary",
									children: "COMPETITIVE PROGRAMMING"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3 lg:grid-cols-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
											value: "906",
											label: "All India rank",
											detail: "CodeKaze 2023 · 1.4 lakh+ participants"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
											value: "548",
											label: "Global rank",
											detail: "Codegoda 2022 · 49,000+ participants"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
											value: "1,000+",
											label: "Problems solved",
											detail: "Consistent competitive programming practice"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-4 rounded-lg border border-border bg-background p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: "B.Tech in Information Technology · 84%"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Pranveer Singh Institute of Technology, Kanpur · 2019–2023"
										]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] text-primary",
									children: "CERTIFICATIONS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] text-muted-foreground",
									children: [String(credentials.length).padStart(2, "0"), " CREDENTIALS"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-lg border border-border bg-border",
								children: credentials.map((credential, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex gap-4 border-b border-border bg-card p-5 last:border-b-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 shrink-0 place-items-center rounded-md bg-background font-mono text-[10px] text-primary",
											children: String(index + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold leading-5 sm:text-base",
												children: credential.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: credential.issuer.toUpperCase()
												}), credential.issued && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: credential.issued.toUpperCase()
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
											className: "ml-auto size-4 shrink-0 text-accent",
											"aria-hidden": "true"
										})
									]
								}, credential.title))
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border bg-card/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "OPEN TO OPPORTUNITIES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-5xl",
									children: "Looking for AI engineering and backend roles where both sides matter."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-xl text-muted-foreground",
									children: "Enterprise software experience, applied Generative and Agentic AI, and a habit of solving hard problems."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap justify-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://www.linkedin.com/in/vaibhav-sharma-3020/",
											target: "_blank",
											rel: "noreferrer",
											className: "button-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" }), " Connect on LinkedIn"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+919305338724",
											className: "button-outline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " +91 93053 38724"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: vaibhav_resume_pdf_asset_default.url,
											target: "_blank",
											rel: "noreferrer",
											className: "button-outline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download Resume"]
										})
									]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono",
						children: ["© 2026 VAIBHAV SHARMA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cursor text-primary",
							children: "_"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-link",
							href: "https://www.linkedin.com/in/vaibhav-sharma-3020/",
							target: "_blank",
							rel: "noreferrer",
							children: "LinkedIn"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-link",
							href: vaibhav_resume_pdf_asset_default.url,
							target: "_blank",
							rel: "noreferrer",
							children: "Résumé"
						})]
					})]
				})
			})
		]
	});
}
function ArchitectureExplorer() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "outline",
			onClick: () => setOpen((v) => !v),
			className: "button-outline h-auto shadow-none",
			children: [
				open ? "Hide Architecture" : "Explore Architecture",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: `size-4 transition-transform ${open ? "rotate-90" : ""}`,
					"aria-hidden": "true"
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "arch-list mt-6",
			children: [
				["Upload", "PDF or DOCX agreement received"],
				["Extract", "Azure Document Intelligence parses layout and tables"],
				["Chunk & embed", "Sections split and stored as vectors in FAISS"],
				["Retrieve", "Semantic search finds the relevant SLA clauses"],
				["Generate", "Gemini 1.5 answers grounded in retrieved passages"]
			].map(([title, detail], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "arch-step",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "arch-index",
					children: String(index + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-5 text-muted-foreground",
					children: detail
				})] })]
			}, title))
		})]
	});
}
function Experience({ title, date, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative border-l border-border pl-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "timeline-dot" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] text-primary",
				children: date.toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm leading-7 text-muted-foreground",
				children: text
			})
		]
	});
}
function Milestone({ value, label, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-border bg-card/40 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-3xl font-bold text-foreground",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm font-semibold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-5 text-muted-foreground",
				children: detail
			})
		]
	});
}
function LiveSystemTrace() {
	const nodes = [
		{
			label: "Request",
			detail: "query",
			icon: Radio
		},
		{
			label: "Retrieve",
			detail: "vector",
			icon: Database
		},
		{
			label: "Reason",
			detail: "agent",
			icon: BrainCircuit
		},
		{
			label: "Respond",
			detail: "grounded",
			icon: Sparkles
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "system-trace animate-rise-delay-2 mx-auto mt-12 max-w-3xl",
		"aria-label": "Animated AI request pipeline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "system-trace-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), " LIVE REQUEST PIPELINE"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "system-latency",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "latency-value",
					children: "84"
				}), " MS"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "system-track",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "data-packet packet-one" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "data-packet packet-two" }),
				nodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "system-node",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "node-ring",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(node.icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "system-node-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: node.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: node.detail })]
						}),
						index < nodes.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "node-link" })
					]
				}, node.label))
			]
		})]
	});
}
var terminalCommands = {
	help: [
		"PROFILE  about · work · impact · projects · experience · stack",
		"PROOF    achievements · credentials · education · toolkit · principles",
		"SYSTEM   whoami · ls · history · date · theme · light · dark · clear",
		"NAVIGATE goto work | impact | experience | stack | lab | credentials | contact"
	],
	about: ["Vaibhav Sharma — AI & Backend Software Engineer", "Specialist Programmer at Infosys, building AI-powered software and scalable backend systems."],
	work: [
		"Generative AI  → LLM engineering tools",
		"Agentic AI     → LangGraph autonomous workflows",
		"Backend        → Java, Spring Boot, secure APIs",
		"Automation     → reusable engineering accelerators"
	],
	impact: [
		"→ 5,000+ concurrent auth requests",
		"→ 2.5× faster enrollment",
		"→ 35% less user friction",
		"→ 50+ financial institutions",
		"→ 25+ defects resolved",
		"→ 1,000+ problems solved"
	],
	projects: [
		"01  APL Logistics COBOL → Java modernization",
		"02  SLA Doc Insights (RAG document intelligence)",
		"03  Visa Bank Enrollment"
	],
	experience: [
		"Infosys Limited · Feb 2024 — Present · Bengaluru",
		"  Exponential Engineering AI Platform  Dec 2025 — Present",
		"  Visa Payments                        Jan 2025 — Nov 2025",
		"  CMA CGM                              Jul 2024 — Dec 2024"
	],
	stack: [
		"AI/LLM   : Generative AI, Agentic AI, RAG, LangChain, LangGraph",
		"Backend  : Java, Spring Boot, Python, Go, C++, Kafka",
		"Data     : PostgreSQL, MySQL, Redis, FAISS, Pinecone",
		"DevOps   : Docker, Kubernetes, Jenkins, Git, JUnit"
	],
	achievements: [
		"CodeKaze 2023 — All India rank 906",
		"Codegoda 2022 — Global rank 548",
		"Infosys Make-a-thon 2025 — Finalist"
	],
	credentials: credentials.map((credential) => `${credential.title} — ${credential.issuer}${credential.issued ? ` · ${credential.issued}` : ""}`),
	certifications: ["Alias detected: credentials", ...credentials.map((credential) => `${credential.title} — ${credential.issuer}`)],
	education: ["B.Tech in Information Technology · 84%", "Pranveer Singh Institute of Technology, Kanpur · 2019–2023"],
	toolkit: [
		"Claude Code · AI-assisted development",
		"GitHub Copilot · AI pair programming",
		"Google Gemini · LLM-powered applications",
		"Devin AI · AI software engineering"
	],
	principles: principles.map((principle) => `→ ${principle}`),
	whoami: ["vaibhav", "AI & Backend Software Engineer · Specialist Programmer @ Infosys"],
	ls: ["about/  work/  impact/  projects/  experience/", "stack/  lab/  credentials/  contact/  resume.pdf"],
	contact: ["LinkedIn: linkedin.com/in/vaibhav-sharma-3020", "Phone: +91 93053 38724"],
	resume: ["Opening Vaibhav's résumé in a new tab…"]
};
function TerminalPlayground({ theme, onThemeChange }) {
	const [value, setValue] = (0, import_react.useState)("");
	const [lines, setLines] = (0, import_react.useState)(["Welcome. Type ‘help’ to explore my profile.", "Try ‘light’ or ‘dark’ to change the website theme."]);
	const [history, setHistory] = (0, import_react.useState)([]);
	const inputRef = (0, import_react.useRef)(null);
	const executeCommand = (rawCommand) => {
		const command = rawCommand.trim().toLowerCase();
		if (!command) return;
		setHistory((current) => [...current, command]);
		if (command === "clear") setLines([]);
		else if (command === "light" || command === "dark") {
			onThemeChange(command);
			setLines((current) => [
				...current,
				`$ ${command}`,
				`Theme changed to ${command} mode.`
			]);
		} else if (command === "theme") setLines((current) => [
			...current,
			"$ theme",
			`Current theme: ${theme}. Use ‘light’ or ‘dark’ to switch.`
		]);
		else if (command === "history") setLines((current) => [
			...current,
			"$ history",
			...history.length ? history.map((item, index) => `${index + 1}  ${item}`) : ["No command history yet."]
		]);
		else if (command === "date") setLines((current) => [
			...current,
			"$ date",
			new Intl.DateTimeFormat("en-IN", {
				dateStyle: "full",
				timeStyle: "short",
				timeZone: "Asia/Kolkata"
			}).format(/* @__PURE__ */ new Date())
		]);
		else if (command.startsWith("goto ")) {
			const destination = command.slice(5).trim();
			const targetId = {
				work: "work",
				projects: "work",
				impact: "impact",
				experience: "experience",
				stack: "stack",
				lab: "lab",
				achievements: "credentials",
				credentials: "credentials",
				contact: "contact"
			}[destination];
			const target = targetId ? document.getElementById(targetId) : null;
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
				setLines((current) => [
					...current,
					`$ ${command}`,
					`Navigating to ${destination}…`
				]);
			} else setLines((current) => [
				...current,
				`$ ${command}`,
				"Unknown destination. Try: goto work, stack, lab, credentials, or contact."
			]);
		} else {
			setLines((current) => [
				...current,
				`$ ${command}`,
				...terminalCommands[command] ?? [`command not found: ${command}`, "Type ‘help’ for available commands."]
			]);
			if (command === "resume") window.open(vaibhav_resume_pdf_asset_default.url, "_blank", "noopener,noreferrer");
		}
		setValue("");
		inputRef.current?.focus();
	};
	const runCommand = (event) => {
		event.preventDefault();
		executeCommand(value);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "terminal-window terminal-live animate-rise-delay-2 mx-auto mt-3 max-w-3xl text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "terminal-light bg-destructive" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "terminal-light bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "terminal-light bg-primary" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 font-mono text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }), " vaibhav@portfolio:~"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-12" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-48 max-h-64 overflow-y-auto p-5 font-mono text-xs leading-6 sm:text-sm",
				"aria-live": "polite",
				children: [lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: line.startsWith("$") ? "text-primary" : "whitespace-pre-wrap text-muted-foreground",
					children: line
				}, `${line}-${index}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: runCommand,
					className: "mt-1 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "terminal-input",
						className: "text-primary",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						id: "terminal-input",
						value,
						onChange: (event) => setValue(event.target.value),
						autoComplete: "off",
						spellCheck: false,
						className: "min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50",
						placeholder: "try: help",
						"aria-label": "Terminal command"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 border-t border-border px-4 py-3",
				children: [
					"help",
					"projects",
					"credentials",
					"goto work",
					"light",
					"dark",
					"clear"
				].map((command) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "terminal-command h-auto shadow-none",
					onClick: () => executeCommand(command),
					children: command
				}, command))
			})
		]
	});
}
//#endregion
export { Portfolio as component };
