import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { o as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TopBar-BiXRTss-.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -12
		},
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: `relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 md:px-10 md:py-16 ${className}`,
		children
	});
}
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "group flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative flex h-9 w-9 items-center justify-center rounded-2xl glass",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#58F29D]" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold tracking-tight",
					children: "R/G Detector"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-white/40",
					children: "Relationship Intel"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden items-center gap-2 text-xs text-white/50 md:flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#58F29D] shadow-[0_0_10px_#58F29D]" }), "Live analysis"]
		})]
	});
}
//#endregion
export { TopBar as n, PageShell as t };
