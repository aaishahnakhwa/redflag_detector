import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlassButton-R3pfgseL.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var variants = {
	primary: "bg-gradient-to-r from-[#58F29D] via-[#5AC8FA] to-[#8E7CFF] text-black shadow-[0_10px_40px_-10px_rgba(88,242,157,0.6)]",
	ghost: "glass text-foreground hover:bg-white/10",
	danger: "bg-gradient-to-r from-[#FF5A6E] to-[#8E7CFF] text-white shadow-[0_10px_40px_-10px_rgba(255,90,110,0.6)]"
};
function GlassButton({ children, className, variant = "primary", size = "md", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		whileHover: {
			scale: 1.03,
			y: -2
		},
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 18
		},
		className: cn("relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50", size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm", variants[variant], className),
		...rest,
		children
	});
}
//#endregion
export { cn as n, GlassButton as t };
