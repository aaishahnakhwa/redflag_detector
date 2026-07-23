import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, S as Check, w as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { n as cn, t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { t as questions } from "./questions-CbAaxENC.mjs";
import { t as ProgressBar } from "./ProgressBar-Bz5S8fps.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-BPf-AARv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPage() {
	const navigate = useNavigate();
	const { state, answer, partnerLabel } = useQuiz();
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!state.info.partnerName) navigate({ to: "/user-info" });
	}, [state.info.partnerName, navigate]);
	const q = questions[idx];
	const selected = state.answers[q.id];
	const progress = (idx + (selected ? 1 : 0)) / questions.length * 100;
	const next = () => {
		if (idx < questions.length - 1) setIdx(idx + 1);
		else navigate({ to: "/analysis" });
	};
	const back = () => idx > 0 ? setIdx(idx - 1) : navigate({ to: "/user-info" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex w-full max-w-3xl flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Question ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white",
						children: String(idx + 1).padStart(2, "0")
					}),
					" / ",
					String(questions.length).padStart(2, "0")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#58F29D]",
					children: q.category
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { value: progress }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 40
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -40
					},
					transition: {
						duration: .5,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl",
						children: q.prompt(partnerLabel)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3",
						children: q.options.map((opt, i) => {
							const active = selected === opt.key;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .1 + i * .06 },
								whileHover: { y: -2 },
								whileTap: { scale: .99 },
								onClick: () => answer(q.id, opt.key),
								className: cn("group relative flex items-center gap-4 rounded-3xl border p-5 text-left transition-all", active ? "border-[#58F29D]/70 bg-[#58F29D]/10 shadow-[0_0_40px_-10px_#58F29D]" : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-mono transition-all", active ? "border-[#58F29D] bg-[#58F29D] text-black" : "border-white/20 text-white/60 group-hover:border-white/40"),
									children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: { scale: 0 },
										animate: { scale: 1 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-4 w-4",
											strokeWidth: 3
										})
									}) : opt.key
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base text-white/90 md:text-lg",
									children: opt.text
								})]
							}, opt.key);
						})
					})]
				}, q.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
					variant: "ghost",
					onClick: back,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
					onClick: next,
					disabled: !selected,
					children: [
						idx === questions.length - 1 ? "Analyze" : "Next",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
				})]
			})
		]
	})] });
}
//#endregion
export { QuizPage as component };
