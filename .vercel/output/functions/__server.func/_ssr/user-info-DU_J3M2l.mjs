import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useQuiz } from "./QuizContext-BM70TETA.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowRight, h as Heart, t as User } from "../_libs/lucide-react.mjs";
import { n as TopBar, t as PageShell } from "./TopBar-BiXRTss-.mjs";
import { n as cn, t as GlassButton } from "./GlassButton-R3pfgseL.mjs";
import { t as GlassCard } from "./GlassCard-CEH8JAzN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/user-info-DU_J3M2l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var genders = [
	"Male",
	"Female",
	"Non-binary",
	"Prefer not to say"
];
var relationships = [
	"Dating",
	"Situationship",
	"Crush",
	"Don't know"
];
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		type: "button",
		whileTap: { scale: .96 },
		onClick,
		className: cn("rounded-full px-4 py-2 text-sm transition-all", active ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]" : "glass text-white/70 hover:text-white"),
		children
	});
}
function UserInfoPage() {
	const { state, setInfo } = useQuiz();
	const navigate = useNavigate();
	const [local, setLocal] = (0, import_react.useState)(state.info);
	const ready = local.yourName.trim() && local.partnerName.trim() && local.relationship;
	const submit = (e) => {
		e.preventDefault();
		if (!ready) return;
		setInfo(local);
		navigate({ to: "/quiz" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-balance text-4xl font-bold tracking-tight md:text-5xl",
				children: "Who are we investigating?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: .15 },
				className: "mt-3 text-white/60",
				children: "A little context helps us personalize every question."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: submit,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "mt-8 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: local.yourName,
									onChange: (e) => setLocal({
										...local,
										yourName: e.target.value
									}),
									placeholder: "Alex",
									className: "w-full bg-transparent text-lg outline-none placeholder:text-white/25"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Their name",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: local.partnerName,
									onChange: (e) => setLocal({
										...local,
										partnerName: e.target.value
									}),
									placeholder: "Jordan",
									className: "w-full bg-transparent text-lg outline-none placeholder:text-white/25"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Your gender" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: genders.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: local.yourGender === g,
									onClick: () => setLocal({
										...local,
										yourGender: g
									}),
									children: g
								}, g))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Their gender" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: genders.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: local.partnerGender === g,
									onClick: () => setLocal({
										...local,
										partnerGender: g
									}),
									children: g
								}, g))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Relationship type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: relationships.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								active: local.relationship === r,
								onClick: () => setLocal({
									...local,
									relationship: r
								}),
								children: r
							}, r))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-white/10 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/40",
								children: "Nothing is saved. This stays on your device."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
								type: "submit",
								size: "lg",
								disabled: !ready,
								children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			})
		]
	})] });
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 text-xs uppercase tracking-[0.25em] text-white/40",
		children
	});
}
function Field({ label, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40",
			children: [
				icon,
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-white/30",
			children
		})]
	});
}
//#endregion
export { UserInfoPage as component };
