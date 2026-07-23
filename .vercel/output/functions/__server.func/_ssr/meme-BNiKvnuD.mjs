import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, i as TriangleAlert, o as Sparkles } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { n as getVideoUrlForVerdict, t as FlagFlash } from "./videoAssets-CMUMSsiz.mjs";
import { t as GlassCard } from "./GlassCard-CEH8JAzN.mjs";
import { t as scoreAnswers } from "./scoring-Co3SFqLS.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meme-BNiKvnuD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var greenMeme = {
	headline: "Marriage Material Unlocked",
	gif: "https://media.tenor.com/PMPQPY6ZQzoAAAAC/joey-tribbiani-thumbs-up.gif",
	captions: [
		"Congratulations.",
		"You found one.",
		"Don't scare them away."
	]
};
var redMeme = {
	headline: "Major Red Alert",
	gif: "https://media.tenor.com/HkzOwWm5ln4AAAAC/michael-scott-awkward.gif",
	captions: [
		"Run.",
		"Don't walk.",
		"Collecting red flags like Pokémon."
	],
	difficulty: "Nightmare Mode"
};
var yellowMeme = {
	headline: "Mixed Signals Detected",
	captions: [
		"A little green, a little red.",
		"Proceed with curiosity, not blindfolds.",
		"Watch the patterns — not just the good days."
	],
	difficulty: "Handle With Care"
};
function MemePage() {
	const navigate = useNavigate();
	const { state } = useQuiz();
	const verdict = (0, import_react.useMemo)(() => scoreAnswers(state.answers), [state.answers]).verdict;
	const green = verdict === "GREEN FLAG";
	const yellow = verdict === "YELLOW FLAG";
	const red = verdict === "RED FLAG";
	const color = green ? "#58F29D" : yellow ? "#FFD25A" : "#FF5A6E";
	const videoSrc = (0, import_react.useMemo)(() => getVideoUrlForVerdict(verdict), [verdict]);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (videoRef.current) {
			videoRef.current.muted = true;
			videoRef.current.play().catch(() => {});
		}
	}, [videoSrc]);
	(0, import_react.useEffect)(() => {
		if (Object.keys(state.answers).length === 0) navigate({ to: "/" });
	}, [state.answers, navigate]);
	(0, import_react.useEffect)(() => {
		if (!green) return;
		const t = setTimeout(() => {
			confetti_module_default({
				particleCount: 120,
				spread: 90,
				origin: { y: .4 },
				colors: [
					"#58F29D",
					"#5AC8FA",
					"#8E7CFF",
					"#ffffff"
				]
			});
		}, 300);
		return () => clearTimeout(t);
	}, [green]);
	const meme = green ? greenMeme : yellow ? yellowMeme : redMeme;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagFlash, { color }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 -z-10",
					style: { background: green ? "radial-gradient(ellipse at top, rgba(88,242,157,0.15), transparent 60%)" : yellow ? "radial-gradient(ellipse at top, rgba(255,210,90,0.18), transparent 60%)" : "radial-gradient(ellipse at top, rgba(255,90,110,0.2), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						duration: .7,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: green ? "" : yellow ? "border-[#FFD25A]/30" : "border-[#FF5A6E]/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em]",
								children: green ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-[#58F29D]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Green Alert"]
								}) : yellow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 rounded-full bg-[#FFD25A]/20 px-3 py-1 text-[#FFD25A]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " Yellow Alert"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex animate-siren items-center gap-2 rounded-full bg-[#FF5A6E]/20 px-3 py-1 text-[#FF5A6E]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " RED ALERT"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl",
								style: { color },
								children: meme.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.video, {
								ref: videoRef,
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .4,
									duration: .6
								},
								src: videoSrc,
								autoPlay: true,
								loop: true,
								muted: true,
								playsInline: true,
								controls: true,
								preload: "auto",
								"aria-label": meme.headline,
								className: "mx-auto mt-8 max-h-80 w-full max-w-lg rounded-3xl border border-white/10 object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-2",
								children: meme.captions.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 8
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .6 + i * .15 },
									className: "text-lg text-white/80",
									children: c
								}, c))
							}),
							!green && "difficulty" in meme && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
								style: {
									borderWidth: 1,
									borderStyle: "solid",
									borderColor: `${color}66`,
									background: `${color}1a`,
									color
								},
								children: ["Relationship Difficulty: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: meme.difficulty
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: 1 },
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/share",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
							size: "lg",
							variant: red ? "danger" : "primary",
							children: ["Generate share card ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				})
			]
		})
	] });
}
//#endregion
export { MemePage as component };
