import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analysis-Cfy5RTWm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BrainMascot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		animate: { y: [
			0,
			-12,
			0
		] },
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		},
		className: "relative mx-auto h-44 w-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#8E7CFF,transparent_60%)] blur-2xl opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 200",
			className: "relative h-full w-full drop-shadow-[0_10px_30px_rgba(142,124,255,0.5)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "brain",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#FFB6C6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#8E7CFF"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 70 C40 70 30 95 45 110 C30 125 55 150 80 145 C90 160 120 160 130 145 C160 152 175 125 158 108 C172 92 160 68 140 72 C130 55 100 55 90 72 C80 62 66 62 60 70 Z",
					fill: "url(#brain)",
					stroke: "#fff",
					strokeOpacity: "0.3",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 70 V150 M80 80 C90 100 90 120 80 140 M120 80 C110 100 110 120 120 140",
					stroke: "#fff",
					strokeOpacity: "0.4",
					strokeWidth: "1.5",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "55",
					y: "95",
					width: "90",
					height: "4",
					rx: "2",
					fill: "#0a0a0a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "55",
					y: "97",
					width: "38",
					height: "22",
					rx: "8",
					fill: "#0a0a0a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "107",
					y: "97",
					width: "38",
					height: "22",
					rx: "8",
					fill: "#0a0a0a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "62",
					y: "101",
					width: "8",
					height: "4",
					rx: "2",
					fill: "#58F29D",
					opacity: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "114",
					y: "101",
					width: "8",
					height: "4",
					rx: "2",
					fill: "#58F29D",
					opacity: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(135 130) rotate(15)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "0",
							y: "0",
							width: "40",
							height: "52",
							rx: "4",
							fill: "#fff"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "12",
							y: "-4",
							width: "16",
							height: "8",
							rx: "2",
							fill: "#8E7CFF"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "6",
							y: "14",
							width: "28",
							height: "2",
							fill: "#8E7CFF",
							opacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "6",
							y: "22",
							width: "20",
							height: "2",
							fill: "#8E7CFF",
							opacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "6",
							y: "30",
							width: "24",
							height: "2",
							fill: "#8E7CFF",
							opacity: "0.6"
						})
					]
				})
			]
		})]
	});
}
var lines = [
	"Checking communication…",
	"Measuring accountability…",
	"Scanning emotional maturity…",
	"Detecting conflict patterns…",
	"Cross-referencing red flag database…"
];
function AnalysisPage() {
	const navigate = useNavigate();
	const { state } = useQuiz();
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!state.info.partnerName) navigate({ to: "/user-info" });
	}, [state.info.partnerName, navigate]);
	(0, import_react.useEffect)(() => {
		const tick = setInterval(() => setI((v) => (v + 1) % lines.length), 1500);
		const done = setTimeout(() => navigate({ to: "/result" }), 6e3);
		return () => {
			clearInterval(tick);
			clearTimeout(done);
		};
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-1 flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainMascot, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mt-10 text-balance text-4xl font-bold tracking-tight md:text-5xl",
				children: "Analyzing your answers…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-8 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							y: 20,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						exit: {
							y: -20,
							opacity: 0
						},
						transition: { duration: .4 },
						className: "text-white/60",
						children: lines[i]
					}, i)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-12 h-32 w-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 100 100",
					className: "h-full w-full -rotate-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "50",
							cy: "50",
							r: "44",
							strokeWidth: "6",
							stroke: "rgba(255,255,255,0.08)",
							fill: "none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
							cx: "50",
							cy: "50",
							r: "44",
							strokeWidth: "6",
							stroke: "url(#g)",
							strokeLinecap: "round",
							fill: "none",
							strokeDasharray: 2 * Math.PI * 44,
							initial: { strokeDashoffset: 2 * Math.PI * 44 },
							animate: { strokeDashoffset: 0 },
							transition: {
								duration: 6,
								ease: "easeInOut"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "g",
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#58F29D"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "50%",
									stopColor: "#5AC8FA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#8E7CFF"
								})
							]
						}) })
					]
				})
			})
		]
	})] });
}
//#endregion
export { AnalysisPage as component };
