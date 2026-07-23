import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, d as ScanEye, p as MessageCircle, r as Trophy, v as Cpu } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { t as GlassCard } from "./GlassCard-CEH8JAzN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mission-BZEhx1Sb.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: MessageCircle,
		title: "Answer",
		desc: "Honest, quick-fire scenarios about your partner."
	},
	{
		icon: Cpu,
		title: "Analyze",
		desc: "Our (fake but confident) AI crunches the vibes."
	},
	{
		icon: ScanEye,
		title: "Detect",
		desc: "We spot patterns across five key categories."
	},
	{
		icon: Trophy,
		title: "Reveal",
		desc: "Get a verdict, breakdown, and shareable card."
	}
];
function MissionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-1 flex-col items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mb-4 text-xs uppercase tracking-[0.4em] text-[#58F29D]",
				children: "Mission Brief"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .1 },
				className: "max-w-3xl text-balance text-center text-5xl font-bold tracking-tight md:text-6xl",
				children: "Relationship Intelligence Bureau"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .2 },
				className: "mt-6 max-w-xl text-balance text-center text-lg text-white/60",
				children: "We'll analyze communication, respect, emotional intelligence and conflict patterns — then hand back a verdict you can actually feel."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "mt-14 w-full max-w-4xl p-6 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-4",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .35 + i * .12,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative rounded-3xl bg-white/[0.03] p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8E7CFF]/40 to-[#5AC8FA]/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-white" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono text-white/40",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/50",
								children: s.desc
							})
						]
					}, s.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-sm text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-semibold text-white",
								children: "7"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-white/40",
								children: "Questions"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-semibold text-white",
								children: "2m"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-white/40",
								children: "Est. time"
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/user-info",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
							size: "lg",
							children: ["Begin Mission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				})]
			})
		]
	})] });
}
//#endregion
export { MissionPage as component };
