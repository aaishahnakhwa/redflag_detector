import { questions, type Category, type Question } from "./questions";

export type Answers = Record<number, "A" | "B" | "C" | "D">;

export type CategoryScore = { category: Category; score: number; max: number; percent: number };

export type ScoreResult = {
  total: number;
  max: number;
  percent: number;
  green: number;
  yellow: number;
  red: number;
  verdict: "GREEN FLAG" | "YELLOW FLAG" | "RED FLAG";
  categories: CategoryScore[];
};

export function scoreAnswers(answers: Answers): ScoreResult {
  const byCat = new Map<Category, { score: number; max: number }>();
  let total = 0;
  let max = 0;
  let green = 0;
  let yellow = 0;
  let red = 0;

  for (const q of questions) {
    const ans = answers[q.id];
    const opt = q.options.find((o) => o.key === ans);
    const pts = opt?.points ?? 0;
    total += pts;
    max += 5;
    const cur = byCat.get(q.category) ?? { score: 0, max: 0 };
    byCat.set(q.category, { score: cur.score + pts, max: cur.max + 5 });
    if (ans === "A" || ans === "B") green++;
    else if (ans === "C") yellow++;
    else if (ans === "D") red++;
  }

  const answered = green + yellow + red || 1;
  const percent = Math.round((total / max) * 100);
  const categories: CategoryScore[] = Array.from(byCat.entries()).map(([category, v]) => ({
    category,
    score: v.score,
    max: v.max,
    percent: Math.round((v.score / v.max) * 100),
  }));

  return {
    total,
    max,
    percent,
    green: Math.round((green / answered) * 100),
    yellow: Math.round((yellow / answered) * 100),
    red: Math.round((red / answered) * 100),
    verdict: percent >= 70 ? "GREEN FLAG" : percent >= 40 ? "YELLOW FLAG" : "RED FLAG",
    categories,
  };
}

export function topStrengths(result: ScoreResult, n = 2): Category[] {
  return [...result.categories].sort((a, b) => b.percent - a.percent).slice(0, n).map((c) => c.category);
}

export type { Question, Category };
