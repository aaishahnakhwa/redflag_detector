import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useTransform, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, b as CloudCheck, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { n as getVideoUrlForVerdict, t as FlagFlash } from "./videoAssets-CMUMSsiz.mjs";
import { t as scoreAnswers } from "./scoring-Co3SFqLS.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import "../_libs/firebase.mjs";
import { i as set, n as push, r as ref, t as getDatabase } from "../_libs/@firebase/database+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/result-7wW4kZ82.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var db = getDatabase(getApps().length > 0 ? getApp() : initializeApp({ databaseURL: "https://preselection-3d48d-default-rtdb.firebaseio.com/" }));
/**
* Saves assessment submission data to Firebase Realtime Database under /submissions node.
*/
async function saveSubmission(data) {
	try {
		const newSubmissionRef = push(ref(db, "submissions"));
		await set(newSubmissionRef, {
			yourName: data.yourName || "Anonymous",
			partnerName: data.partnerName || "Partner",
			percent: typeof data.percent === "number" ? data.percent : 0,
			verdict: data.verdict || "UNKNOWN",
			yourGender: data.yourGender || "",
			partnerGender: data.partnerGender || "",
			relationship: data.relationship || "",
			timestamp: data.timestamp || Date.now()
		});
		console.log("Successfully saved submission to Firebase RTDB with key:", newSubmissionRef.key);
		return newSubmissionRef.key;
	} catch (error) {
		console.error("Failed to save submission to Firebase RTDB:", error);
		return null;
	}
}
function AnimatedCounter({ value }) {
	const spring = useSpring(0, {
		duration: 2500,
		bounce: .2
	});
	const display = useTransform(spring, (current) => Math.round(current));
	const [currentVal, setCurrentVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		spring.set(value);
		const unsubscribe = display.on("change", (latest) => setCurrentVal(latest));
		return () => unsubscribe();
	}, [
		value,
		spring,
		display
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentVal });
}
function ResultPage() {
	const navigate = useNavigate();
	const { state, partnerLabel } = useQuiz();
	const result = (0, import_react.useMemo)(() => scoreAnswers(state.answers), [state.answers]);
	const isGreen = result.verdict === "GREEN FLAG";
	const isYellow = result.verdict === "YELLOW FLAG";
	const isRed = result.verdict === "RED FLAG";
	const videoSrc = (0, import_react.useMemo)(() => getVideoUrlForVerdict(result.verdict), [result.verdict]);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (videoRef.current) {
			videoRef.current.muted = true;
			videoRef.current.play().catch(() => {});
		}
	}, [videoSrc]);
	const hasSavedRef = (0, import_react.useRef)(false);
	const [savedToDb, setSavedToDb] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (Object.keys(state.answers).length === 0) {
			navigate({ to: "/" });
			return;
		}
		if (!hasSavedRef.current) {
			hasSavedRef.current = true;
			saveSubmission({
				yourName: state.info.yourName || "Anonymous",
				partnerName: state.info.partnerName || partnerLabel,
				percent: result.percent,
				verdict: result.verdict,
				yourGender: state.info.yourGender,
				partnerGender: state.info.partnerGender,
				relationship: state.info.relationship
			}).then((key) => {
				if (key) setSavedToDb(true);
			});
		}
	}, [
		state.answers,
		state.info,
		result,
		navigate,
		partnerLabel
	]);
	const color = isGreen ? "#58F29D" : isYellow ? "#FFD25A" : "#FF5A6E";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagFlash, { color }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-1 flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					className: "text-xs uppercase tracking-[0.4em] text-white/40",
					children: ["Verdict for ", partnerLabel]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .6,
						opacity: 0,
						filter: "blur(20px)"
					},
					animate: {
						scale: 1,
						opacity: 1,
						filter: "blur(0px)"
					},
					transition: {
						duration: 1,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "relative mt-6 flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { color }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-[14vw] font-bold leading-none tracking-[-0.05em] md:text-[120px]",
							style: {
								color,
								textShadow: `0 0 60px ${color}80`
							},
							children: result.verdict
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9,
								y: 16
							},
							animate: {
								opacity: 1,
								scale: 1,
								y: 0
							},
							transition: {
								delay: .4,
								duration: .6
							},
							className: "relative mt-6 overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-1.5 backdrop-blur-xl shadow-2xl",
							style: { boxShadow: `0 20px 50px -10px ${color}40` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: videoRef,
								src: videoSrc,
								autoPlay: true,
								loop: true,
								muted: true,
								playsInline: true,
								controls: true,
								preload: "auto",
								"aria-label": `Verdict video for ${result.verdict}`,
								className: "mx-auto max-h-72 w-full max-w-sm rounded-2xl object-cover md:max-h-80 md:max-w-md"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .6 },
							className: "mt-6 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-6xl font-bold text-white md:text-7xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, { value: result.percent }), "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: "match"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { delay: 1.2 },
							className: "mt-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-md",
							children: savedToDb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-[#58F29D]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/80",
								children: "Saved to Firebase Realtime DB"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudCheck, { className: "h-3.5 w-3.5 text-white/40 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Syncing to Firebase..." })] })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .9 },
					className: "mt-6 max-w-md text-balance text-white/60",
					children: isGreen ? "Solid signals across the board. Keep watering this one." : isYellow ? "Mixed signals — some green, some red. Time to look closer." : "The vibes are… not vibing. Let's break down why."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: 1.1 },
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/report",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
							size: "lg",
							variant: isRed ? "danger" : "primary",
							children: ["View full report ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				})
			]
		})
	] });
}
function Flag({ color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		animate: { rotate: [
			-4,
			4,
			-4
		] },
		transition: {
			duration: 2.5,
			repeat: Infinity,
			ease: "easeInOut"
		},
		style: { transformOrigin: "bottom left" },
		className: "relative h-40 w-52",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1 h-full w-1.5 rounded-full bg-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute left-2 top-0 h-28 w-48 rounded-tr-3xl rounded-br-md rounded-tl-md",
			style: {
				background: `linear-gradient(135deg, ${color}, ${color}80)`,
				boxShadow: `0 20px 60px -20px ${color}`
			},
			animate: { skewY: [
				-3,
				3,
				-3
			] },
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut"
			}
		})]
	});
}
//#endregion
export { ResultPage as component };
