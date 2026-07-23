import { t as questions } from "./questions-CbAaxENC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scoring-Co3SFqLS.js
function scoreAnswers(answers) {
	const byCat = /* @__PURE__ */ new Map();
	let total = 0;
	let max = 0;
	let green = 0;
	let yellow = 0;
	let red = 0;
	for (const q of questions) {
		const ans = answers[q.id];
		const pts = q.options.find((o) => o.key === ans)?.points ?? 0;
		total += pts;
		max += 5;
		const cur = byCat.get(q.category) ?? {
			score: 0,
			max: 0
		};
		byCat.set(q.category, {
			score: cur.score + pts,
			max: cur.max + 5
		});
		if (ans === "A" || ans === "B") green++;
		else if (ans === "C") yellow++;
		else if (ans === "D") red++;
	}
	const answered = green + yellow + red || 1;
	const percent = Math.round(total / max * 100);
	const categories = Array.from(byCat.entries()).map(([category, v]) => ({
		category,
		score: v.score,
		max: v.max,
		percent: Math.round(v.score / v.max * 100)
	}));
	return {
		total,
		max,
		percent,
		green: Math.round(green / answered * 100),
		yellow: Math.round(yellow / answered * 100),
		red: Math.round(red / answered * 100),
		verdict: percent >= 70 ? "GREEN FLAG" : percent >= 40 ? "YELLOW FLAG" : "RED FLAG",
		categories
	};
}
function topStrengths(result, n = 2) {
	return [...result.categories].sort((a, b) => b.percent - a.percent).slice(0, n).map((c) => c.category);
}
//#endregion
export { topStrengths as n, scoreAnswers as t };
