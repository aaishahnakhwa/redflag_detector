import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QuizProvider } from "./QuizContext-BM70TETA.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CFgFaABx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DMjSHCu-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var blobs = [
	{
		size: 520,
		color: "#8E7CFF",
		top: "-10%",
		left: "-10%",
		delay: 0
	},
	{
		size: 460,
		color: "#5AC8FA",
		top: "20%",
		left: "70%",
		delay: 2
	},
	{
		size: 400,
		color: "#58F29D",
		top: "60%",
		left: "-5%",
		delay: 4
	},
	{
		size: 380,
		color: "#FF5A6E",
		top: "70%",
		left: "60%",
		delay: 1
	}
];
function FloatingBlobs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,124,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(88,242,157,0.08),transparent_50%)]" }),
			blobs.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute rounded-full opacity-40 blur-[120px]",
				style: {
					width: b.size,
					height: b.size,
					top: b.top,
					left: b.left,
					background: b.color
				},
				animate: {
					x: [
						0,
						40,
						-30,
						0
					],
					y: [
						0,
						-30,
						40,
						0
					],
					scale: [
						1,
						1.1,
						.95,
						1
					]
				},
				transition: {
					duration: 18 + i * 2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: b.delay
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: Array.from({ length: 30 }).map((_, i) => {
					const left = i * 37 % 100;
					const top = i * 53 % 100;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute h-1 w-1 rounded-full bg-white/60",
						style: {
							left: `${left}%`,
							top: `${top}%`
						},
						animate: {
							opacity: [
								.1,
								.9,
								.1
							],
							y: [
								0,
								-20,
								0
							]
						},
						transition: {
							duration: 4 + i % 5,
							repeat: Infinity,
							delay: i * .15
						}
					}, i);
				})
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Red Flag • Green Flag Detector" },
			{
				name: "description",
				content: "Decode the vibes. Know the truth. A premium relationship intelligence quiz that turns dating chaos into a clear verdict."
			},
			{
				name: "author",
				content: "R/G Detector"
			},
			{
				property: "og:title",
				content: "Red Flag • Green Flag Detector"
			},
			{
				property: "og:description",
				content: "Decode the vibes. Know the truth. Date smart, not hard."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&family=Figtree:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuizProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBlobs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-iZWXiwlx.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./analysis-Cfy5RTWm.mjs");
var Route$7 = createFileRoute("/analysis")({
	head: () => ({ meta: [{ title: "Analyzing… — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./meme-BNiKvnuD.mjs");
var Route$6 = createFileRoute("/meme")({
	head: () => ({ meta: [{ title: "The Meme — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./mission-BZEhx1Sb.mjs");
var Route$5 = createFileRoute("/mission")({
	head: () => ({ meta: [{ title: "Mission Brief — R/G Detector" }, {
		name: "description",
		content: "The Relationship Intelligence Bureau will analyze communication, respect and emotional intelligence."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./quiz-BPf-AARv.mjs");
var Route$4 = createFileRoute("/quiz")({
	head: () => ({ meta: [{ title: "Quiz — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./report-D8qVCENr.mjs");
var Route$3 = createFileRoute("/report")({
	head: () => ({ meta: [{ title: "Report — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./result-7wW4kZ82.mjs");
var Route$2 = createFileRoute("/result")({
	head: () => ({ meta: [{ title: "The Verdict — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./share-CMs_fttu.mjs");
var Route$1 = createFileRoute("/share")({
	head: () => ({ meta: [{ title: "Share your verdict — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./user-info-DU_J3M2l.mjs");
var Route = createFileRoute("/user-info")({
	head: () => ({ meta: [{ title: "Tell us about them — R/G Detector" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AnalysisRoute: Route$7.update({
		id: "/analysis",
		path: "/analysis",
		getParentRoute: () => Route$9
	}),
	MemeRoute: Route$6.update({
		id: "/meme",
		path: "/meme",
		getParentRoute: () => Route$9
	}),
	MissionRoute: Route$5.update({
		id: "/mission",
		path: "/mission",
		getParentRoute: () => Route$9
	}),
	QuizRoute: Route$4.update({
		id: "/quiz",
		path: "/quiz",
		getParentRoute: () => Route$9
	}),
	ReportRoute: Route$3.update({
		id: "/report",
		path: "/report",
		getParentRoute: () => Route$9
	}),
	ResultRoute: Route$2.update({
		id: "/result",
		path: "/result",
		getParentRoute: () => Route$9
	}),
	ShareRoute: Route$1.update({
		id: "/share",
		path: "/share",
		getParentRoute: () => Route$9
	}),
	UserInfoRoute: Route.update({
		id: "/user-info",
		path: "/user-info",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
