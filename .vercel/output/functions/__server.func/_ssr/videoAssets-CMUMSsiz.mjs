import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/videoAssets-CMUMSsiz.js
var import_jsx_runtime = require_jsx_runtime();
function FlagFlash({ color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-50",
		style: { background: `radial-gradient(ellipse at center, transparent 45%, ${color} 100%)` },
		initial: { opacity: .5 },
		animate: { opacity: [
			.5,
			.2,
			.5
		] },
		transition: {
			duration: 2.6,
			ease: "easeInOut",
			repeat: Infinity
		}
	});
}
var greenVideoUrl = "/assets/green-C69qxujf.mp4";
var redVideoUrl = "/assets/red-i_Kkf7UG.mp4";
var yellowVideoUrl = "/assets/yellow-D3WnDfEc.mp4";
function getVideoUrlForVerdict(verdict) {
	if (verdict === "GREEN FLAG") return greenVideoUrl;
	if (verdict === "YELLOW FLAG") return yellowVideoUrl;
	return redVideoUrl;
}
//#endregion
export { getVideoUrlForVerdict as n, FlagFlash as t };
