import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgressBar-Bz5S8fps.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressBar({ value, tone = "primary" }) {
	const bg = tone === "green" ? "from-[#58F29D] to-[#5AC8FA]" : tone === "red" ? "from-[#FF5A6E] to-[#8E7CFF]" : tone === "yellow" ? "from-[#FFD25A] to-[#FF5A6E]" : "from-[#8E7CFF] via-[#5AC8FA] to-[#58F29D]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 w-full overflow-hidden rounded-full bg-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: `h-full rounded-full bg-gradient-to-r ${bg}`,
			initial: { width: 0 },
			animate: { width: `${Math.max(0, Math.min(100, value))}%` },
			transition: {
				duration: 1,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		})
	});
}
//#endregion
export { ProgressBar as t };
