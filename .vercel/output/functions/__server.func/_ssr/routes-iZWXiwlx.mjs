import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, l as Search } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-iZWXiwlx.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-1 flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .8,
					opacity: 0,
					rotate: -20
				},
				animate: {
					scale: 1,
					opacity: 1,
					rotate: 0
				},
				transition: {
					duration: .9,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						animate: { rotate: [
							0,
							8,
							-6,
							4,
							0
						] },
						transition: {
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "relative flex h-24 w-24 items-center justify-center rounded-[28px] glass-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#58F29D]/30 via-[#5AC8FA]/20 to-[#8E7CFF]/40 blur-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "relative h-10 w-10 text-white",
							strokeWidth: 2.5
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute -right-3 -top-3 h-4 w-4 rounded-full bg-[#FF5A6E] shadow-[0_0_20px_#FF5A6E]",
						animate: {
							scale: [
								1,
								1.4,
								1
							],
							opacity: [
								1,
								.6,
								1
							]
						},
						transition: {
							duration: 1.6,
							repeat: Infinity
						}
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .1 },
				className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[#58F29D]/30 bg-[#58F29D]/10 px-4 py-1 text-xs font-medium text-[#58F29D] backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2 w-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58F29D] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#58F29D]" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Firebase Realtime Cloud Database Enabled" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				initial: {
					y: 30,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .9,
					delay: .15,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "text-balance text-[13vw] font-bold leading-[0.9] tracking-[-0.04em] md:text-[96px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-gradient-to-r from-[#FF5A6E] to-[#FFB0B8] bg-clip-text text-transparent",
						children: "Red Flag,"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-gradient-to-r from-[#58F29D] to-[#5AC8FA] bg-clip-text text-transparent",
						children: "Green Flag"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white",
						children: "Detector."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				initial: {
					y: 20,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .7,
					delay: .4
				},
				className: "mt-8 max-w-md text-balance text-lg text-white/60 md:text-xl",
				children: [
					"Decode the vibes. Know the truth.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/80",
						children: "Date smart, not hard."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: 20,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .7,
					delay: .6
				},
				className: "mt-12 flex flex-col items-center gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mission",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
						size: "lg",
						children: ["Start Investigation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mission",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
						size: "lg",
						variant: "ghost",
						children: "How it works"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1 },
				className: "mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7 Questions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-white/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2 Min" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-white/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant Verdict" })
				]
			})
		]
	})] });
}
//#endregion
export { Landing as component };
