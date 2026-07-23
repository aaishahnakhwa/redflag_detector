import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { _ as Download, c as Share2, f as RotateCcw, m as House, n as UserPlus, y as Copy } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { n as topStrengths, t as scoreAnswers } from "./scoring-Co3SFqLS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/share-CMs_fttu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SharePage() {
	const navigate = useNavigate();
	const { state, resetAll, resetAnswers, partnerLabel } = useQuiz();
	const result = (0, import_react.useMemo)(() => {
		if (Object.keys(state.answers).length === 0) return {
			total: 8,
			max: 35,
			percent: 23,
			green: 14,
			yellow: 14,
			red: 71,
			verdict: "RED FLAG",
			categories: [
				{
					category: "Respect",
					score: 1,
					max: 5,
					percent: 20
				},
				{
					category: "Communication",
					score: 1,
					max: 5,
					percent: 20
				},
				{
					category: "Consistency",
					score: 1,
					max: 5,
					percent: 20
				},
				{
					category: "Trust",
					score: 1,
					max: 5,
					percent: 20
				},
				{
					category: "Emotional safety",
					score: 1,
					max: 5,
					percent: 20
				},
				{
					category: "Conflict",
					score: 2,
					max: 5,
					percent: 40
				},
				{
					category: "Future alignment",
					score: 1,
					max: 5,
					percent: 20
				}
			]
		};
		return scoreAnswers(state.answers);
	}, [state.answers]);
	const strengths = (0, import_react.useMemo)(() => topStrengths(result), [result]);
	const cardRef = (0, import_react.useRef)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {}, []);
	const color = result.verdict === "GREEN FLAG" ? "#58F29D" : result.verdict === "YELLOW FLAG" ? "#FFD25A" : "#FF5A6E";
	const darkAccent = result.verdict === "GREEN FLAG" ? "#064E3B" : result.verdict === "YELLOW FLAG" ? "#78350F" : "#7F1D1D";
	const copy = async () => {
		await navigator.clipboard.writeText(`${partnerLabel} scored ${result.percent}% — ${result.verdict} on the Red Flag / Green Flag Detector.`);
		setCopied(true);
		setTimeout(() => setCopied(false), 1600);
	};
	const share = async () => {
		const text = `${partnerLabel}: ${result.verdict} — ${result.percent}% match`;
		if (typeof navigator !== "undefined" && navigator.share) try {
			await navigator.share({
				title: "R/G Detector",
				text,
				url: typeof location !== "undefined" ? location.origin : void 0
			});
		} catch {}
		else copy();
	};
	const download = () => {
		const svgData = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs>
    <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1024"/>
      <stop offset="100%" stop-color="#151030"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="40" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="1080" height="1350" fill="url(#cardBg)"/>
  <circle cx="850" cy="250" r="300" fill="${color}" opacity="0.08" filter="url(#glow)"/>
  <circle cx="200" cy="1150" r="280" fill="${color}" opacity="0.06" filter="url(#glow)"/>
  <rect x="40" y="40" width="1000" height="1270" rx="60" fill="none" stroke="${color}" stroke-width="16" opacity="0.9"/>
  <rect x="72" y="72" width="936" height="1206" rx="44" fill="none" stroke="${color}" stroke-width="4" opacity="0.3"/>
  <rect x="90" y="110" rx="999" width="220" height="54" fill="black"/>
  <text x="115" y="148" fill="white" font-family="Outfit, sans-serif" font-size="28" font-weight="800" letter-spacing="2">R/G DETECTOR</text>
  <circle cx="940" cy="137" r="18" fill="${color}" opacity="0.2"/>
  <circle cx="940" cy="137" r="8" fill="${color}"/>
  <text x="540" y="420" text-anchor="middle" fill="white" font-family="Outfit, sans-serif" font-size="42" font-weight="600" opacity="0.6">${escapeXml(partnerLabel)} scored</text>
  <text x="540" y="720" text-anchor="middle" fill="${color}" font-family="Outfit, sans-serif" font-size="260" font-weight="900" font-style="italic" letter-spacing="-8">${result.percent}%</text>
  <rect x="700" y="520" rx="16" width="260" height="64" fill="white" stroke="${darkAccent}" stroke-width="6" transform="rotate(-12 830 552)"/>
  <text x="830" y="564" text-anchor="middle" fill="${darkAccent}" font-family="Outfit, sans-serif" font-size="34" font-weight="900" letter-spacing="2" transform="rotate(-12 830 552)">VERIFIED</text>
  <rect x="170" y="820" rx="32" width="740" height="140" fill="${darkAccent}" transform="rotate(-2 540 890)"/>
  <text x="540" y="908" text-anchor="middle" fill="${color}" font-family="Outfit, sans-serif" font-size="72" font-weight="900" uppercase="yes" letter-spacing="4" transform="rotate(-2 540 890)">${result.verdict}</text>
  <text x="540" y="1040" text-anchor="middle" fill="white" font-family="Figtree, sans-serif" font-size="24" font-weight="700" opacity="0.5" letter-spacing="6">CORE STRENGTHS</text>
  ${strengths.map((s, i) => {
			const x = 540 + (i - (strengths.length - 1) / 2) * 320;
			const y = 1120 + i % 2 * 90;
			return `<rect x="${x - 140}" y="${y - 36}" rx="24" width="280" height="72" fill="white" stroke="${darkAccent}" stroke-width="6"/><circle cx="${x - 110}" cy="${y}" r="8" fill="${color}"/><text x="${x}" y="${y + 10}" text-anchor="middle" fill="${darkAccent}" font-family="Outfit, sans-serif" font-size="30" font-weight="800" letter-spacing="1">${escapeXml(s).toUpperCase()}</text>`;
		}).join("")}
  <text x="540" y="1290" text-anchor="middle" fill="white" font-family="Figtree, sans-serif" font-size="24" opacity="0.35" letter-spacing="3">rgdetector.app · scan your partner</text>
</svg>`;
		const blob = new Blob([svgData], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `rg-detector-${partnerLabel.toLowerCase().replace(/\s+/g, "-")}.svg`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-4 py-8 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				className: "text-xs uppercase tracking-[0.4em] text-white/40",
				children: "Share your verdict"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "font-display mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl",
				children: "A card worth posting."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-white/60",
				children: "Download it, drop it in the group chat, or start a fresh investigation on someone else."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
						onClick: download,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
						variant: "ghost",
						onClick: copy,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }),
							" ",
							copied ? "Copied!" : "Copy link"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
						variant: "ghost",
						onClick: share,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							resetAnswers();
							navigate({ to: "/quiz" });
						},
						className: "glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mb-2 h-4 w-4 text-[#5AC8FA]" }), "Retake quiz"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							resetAll();
							navigate({ to: "/user-info" });
						},
						className: "glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mb-2 h-4 w-4 text-[#8E7CFF]" }), "Test another person"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: () => resetAll(),
						className: "glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "mb-2 h-4 w-4 text-[#58F29D]" }), "Return home"]
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: {
				opacity: 1,
				y: 0
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
			className: "relative flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: cardRef,
				className: "relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[48px] bg-[#0b1024] p-6 shadow-2xl md:p-8",
				style: { boxShadow: `0 0 0 10px ${color}30, 0 40px 100px -20px rgba(0,0,0,0.7)` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[100px]",
						style: {
							background: color,
							opacity: .1
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-[100px]",
						style: {
							background: color,
							opacity: .08
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-4 rounded-[36px] border-2 opacity-30 md:inset-5",
						style: { borderColor: color }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-widest text-white",
							children: "R/G Detector"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-8 w-8 items-center justify-center rounded-full",
							style: { background: `${color}30` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-2.5 w-2.5 rounded-full",
								style: { background: color },
								animate: {
									scale: [
										1,
										1.6,
										1
									],
									opacity: [
										1,
										.6,
										1
									]
								},
								transition: {
									duration: 2,
									repeat: Infinity
								}
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mt-10 flex flex-col items-center text-center md:mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold uppercase tracking-widest text-white/60",
								children: [partnerLabel, " scored"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display mt-2 text-[26vw] font-black italic leading-none tracking-tighter md:text-[140px]",
								style: { color },
								children: [result.percent, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute right-2 top-16 rounded-xl border-2 bg-white px-4 py-1.5 text-sm font-black uppercase tracking-widest shadow-lg md:right-6 md:top-20",
								style: {
									borderColor: darkAccent,
									color: darkAccent
								},
								animate: { rotate: [
									-10,
									-14,
									-10
								] },
								transition: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: "Verified"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "relative z-10 mx-auto mt-8 w-max max-w-full rounded-3xl px-8 py-4 shadow-2xl md:mt-10",
						style: { background: darkAccent },
						animate: { rotate: [
							-1.5,
							1.5,
							-1.5
						] },
						transition: {
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-black uppercase italic tracking-wider md:text-4xl",
							style: { color },
							children: result.verdict
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mt-8 md:mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-xs font-bold uppercase tracking-[0.2em] text-white/50",
							children: "Core strengths"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap justify-center gap-2",
							children: strengths.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .1 + i * .08 },
								className: "flex items-center gap-2 rounded-2xl border-2 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]",
								style: {
									borderColor: darkAccent,
									color: darkAccent
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: { background: color }
								}), s]
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-5 z-10 flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold uppercase tracking-widest text-white/70",
							children: "rgdetector.app · scan your partner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-8 rounded-full bg-white/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-8 rounded-full bg-white/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-8 rounded-full",
									style: { background: color }
								})
							]
						})]
					})
				]
			})
		})]
	})] });
}
function escapeXml(v) {
	return v.replace(/[<>&'"]/g, (c) => ({
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"'": "&apos;",
		"\"": "&quot;"
	})[c]);
}
//#endregion
export { SharePage as component };
