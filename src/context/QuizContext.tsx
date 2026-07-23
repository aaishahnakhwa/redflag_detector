import { createContext, useContext, useReducer, type ReactNode, useMemo } from "react";
import type { Answers } from "../data/scoring";

export type RelationshipType = "Dating" | "Situationship" | "Crush" | "Don't know";

export type Gender = "Male" | "Female" | "Non-binary" | "Prefer not to say";

export type UserInfo = {
  yourName: string;
  partnerName: string;
  yourGender: Gender | "";
  partnerGender: Gender | "";
  relationship: RelationshipType | "";
};

type State = {
  info: UserInfo;
  answers: Answers;
};

const initial: State = {
  info: {
    yourName: "",
    partnerName: "",
    yourGender: "",
    partnerGender: "",
    relationship: "",
  },
  answers: {},
};

type Action =
  | { type: "SET_INFO"; info: Partial<UserInfo> }
  | { type: "ANSWER"; id: number; key: "A" | "B" | "C" | "D" }
  | { type: "RESET_ANSWERS" }
  | { type: "RESET_ALL" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_INFO":
      return { ...state, info: { ...state.info, ...action.info } };
    case "ANSWER":
      return { ...state, answers: { ...state.answers, [action.id]: action.key } };
    case "RESET_ANSWERS":
      return { ...state, answers: {} };
    case "RESET_ALL":
      return initial;
    default:
      return state;
  }
}

type Ctx = {
  state: State;
  setInfo: (info: Partial<UserInfo>) => void;
  answer: (id: number, key: "A" | "B" | "C" | "D") => void;
  resetAnswers: () => void;
  resetAll: () => void;
  partnerLabel: string;
};

const QuizContext = createContext<Ctx | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const value = useMemo<Ctx>(
    () => ({
      state,
      setInfo: (info) => dispatch({ type: "SET_INFO", info }),
      answer: (id, key) => dispatch({ type: "ANSWER", id, key }),
      resetAnswers: () => dispatch({ type: "RESET_ANSWERS" }),
      resetAll: () => dispatch({ type: "RESET_ALL" }),
      partnerLabel: state.info.partnerName || "your partner",
    }),
    [state],
  );
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
