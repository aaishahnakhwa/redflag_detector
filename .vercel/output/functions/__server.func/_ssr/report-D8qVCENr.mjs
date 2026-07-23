import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, a as Swords, g as HeartHandshake, p as MessageCircle, s as Shield, u as ScrollText } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { t as GlassCard } from "./GlassCard-CEH8JAzN.mjs";
import { t as scoreAnswers } from "./scoring-Co3SFqLS.mjs";
import { t as ProgressBar } from "./ProgressBar-Bz5S8fps.mjs";
import { i as ResponsiveContainer, n as RadialBar, r as PolarAngleAxis, t as RadialBarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-D8qVCENr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var meta = {
	Communication: {
		icon: MessageCircle,
		blurb: (p) => `How openly ${p} shares and receives hard conversations.`
	},
	Respect: {
		icon: Shield,
		blurb: (p) => `How ${p} treats your boundaries, time, and space.`
	},
	"Conflict Resolution": {
		icon: Swords,
		blurb: (p) => `The tone and tactics ${p} brings to a disagreement.`
	},
	Accountability: {
		icon: ScrollText,
		blurb: (p) => `Whether ${p} owns mistakes without deflection.`
	},
	"Emotional Safety": {
		icon: HeartHandshake,
		blurb: (p) => `How safe you feel being fully yourself around ${p}.`
	}
};
function ReportPage() {
	const navigate = useNavigate();
	const { state, partnerLabel } = useQuiz();
	const result = (0, import_react.useMemo)(() => scoreAnswers(state.answers), [state.answers]);
	(0, import_react.useEffect)(() => {
		if (Object.keys(state.answers).length === 0) navigate({ to: "/" });
	}, [state.answers, navigate]);
	const distribution = [
		{
			name: "green",
			value: result.green,
			fill: "#58F29D"
		},
		{
			name: "yellow",
			value: result.yellow,
			fill: "#FFD25A"
		},
		{
			name: "red",
			value: result.red,
			fill: "#FF5A6E"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				className: "text-xs uppercase tracking-[0.4em] text-white/40",
				children: "Psychology Report"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl",
				children: ["The full breakdown on ", partnerLabel]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Category scores"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-widest text-white/40",
							children: "/ 100"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: result.categories.map((c, i) => {
							const M = meta[c.category];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .1 + i * .1 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(M.icon, { className: "h-4 w-4 text-white/80" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: c.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/50",
											children: M.blurb(partnerLabel)
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold tabular-nums",
										children: c.percent
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
									value: c.percent,
									tone: c.percent >= 70 ? "green" : c.percent >= 40 ? "yellow" : "red"
								})]
							}, c.category);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-2 text-lg font-semibold",
								children: "Vibe distribution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-48",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadialBarChart, {
									innerRadius: "30%",
									outerRadius: "100%",
									data: distribution,
									startAngle: 90,
									endAngle: -270,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
										type: "number",
										domain: [0, 100],
										tick: false
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBar, {
										background: { fill: "rgba(255,255,255,0.06)" },
										dataKey: "value",
										cornerRadius: 20
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-3xl font-bold",
										children: [result.percent, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-white/40",
										children: result.verdict
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-3 gap-2 text-center text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
										color: "#58F29D",
										label: "Green",
										value: result.green
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
										color: "#FFD25A",
										label: "Yellow",
										value: result.yellow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
										color: "#FF5A6E",
										label: "Red",
										value: result.red
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/meme",
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
							className: "w-full",
							size: "lg",
							variant: result.verdict === "RED FLAG" ? "danger" : "primary",
							children: ["See the verdict meme ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				})]
			})
		]
	})] });
}
function Legend({ color, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-white/[0.03] p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-2 w-2 rounded-full",
				style: {
					background: color,
					boxShadow: `0 0 12px ${color}`
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white/60",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 text-lg font-semibold tabular-nums",
			children: [value, "%"]
		})]
	});
}
//#endregion
export { ReportPage as component };
