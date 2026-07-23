import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuizContext-BM70TETA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	info: {
		yourName: "",
		partnerName: "",
		yourGender: "",
		partnerGender: "",
		relationship: ""
	},
	answers: {}
};
function reducer(state, action) {
	switch (action.type) {
		case "SET_INFO": return {
			...state,
			info: {
				...state.info,
				...action.info
			}
		};
		case "ANSWER": return {
			...state,
			answers: {
				...state.answers,
				[action.id]: action.key
			}
		};
		case "RESET_ANSWERS": return {
			...state,
			answers: {}
		};
		case "RESET_ALL": return initial;
		default: return state;
	}
}
var QuizContext = (0, import_react.createContext)(null);
function QuizProvider({ children }) {
	const [state, dispatch] = (0, import_react.useReducer)(reducer, initial);
	const value = (0, import_react.useMemo)(() => ({
		state,
		setInfo: (info) => dispatch({
			type: "SET_INFO",
			info
		}),
		answer: (id, key) => dispatch({
			type: "ANSWER",
			id,
			key
		}),
		resetAnswers: () => dispatch({ type: "RESET_ANSWERS" }),
		resetAll: () => dispatch({ type: "RESET_ALL" }),
		partnerLabel: state.info.partnerName || "your partner"
	}), [state]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizContext.Provider, {
		value,
		children
	});
}
function useQuiz() {
	const ctx = (0, import_react.useContext)(QuizContext);
	if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
	return ctx;
}
//#endregion
export { useQuiz as n, QuizProvider as t };
