import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as cn } from "./GlassButton-R3pfgseL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlassCard-CEH8JAzN.js
var import_jsx_runtime = require_jsx_runtime();
function GlassCard({ children, className, tilt = false, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		whileHover: tilt ? {
			rotateX: -2,
			rotateY: 3,
			y: -4
		} : void 0,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 18
		},
		className: cn("glass relative overflow-hidden rounded-[32px] p-8", "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent", className),
		...rest,
		children
	});
}
//#endregion
export { GlassCard as t };
