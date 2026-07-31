import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Swords, ScrollText, HeartHandshake } from "lucide-react";
import { useEffect, useMemo } from "react";
import { GlassButton } from "../components/GlassButton";
import { GlassCard } from "../components/GlassCard";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";
import { scoreAnswers, type Category } from "../data/scoring";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/report")({
  head: () => ({ meta: [{ title: "Report — R/G Detector" }] }),
  component: ReportPage,
});

const meta: Record<Category, { icon: React.ComponentType<{ className?: string }>; blurb: (p: string) => string }> = {
  Communication: { icon: MessageCircle, blurb: (p) => `How openly ${p} shares and receives hard conversations.` },
  Respect: { icon: Shield, blurb: (p) => `How ${p} treats your boundaries, time, and space.` },
  "Conflict Resolution": { icon: Swords, blurb: (p) => `The tone and tactics ${p} brings to a disagreement.` },
  Accountability: { icon: ScrollText, blurb: (p) => `Whether ${p} owns mistakes without deflection.` },
  "Emotional Safety": { icon: HeartHandshake, blurb: (p) => `How safe you feel being fully yourself around ${p}.` },
};

function ReportPage() {
  const navigate = useNavigate();
  const { state, partnerLabel } = useQuiz();
  const result = useMemo(() => scoreAnswers(state.answers), [state.answers]);

  useEffect(() => {
    if (Object.keys(state.answers).length === 0) navigate({ to: "/" });
  }, [state.answers, navigate]);

  const distribution = [
    { name: "green", value: result.green, fill: "#58F29D" },
    { name: "yellow", value: result.yellow, fill: "#FFD25A" },
    { name: "red", value: result.red, fill: "#FF5A6E" },
  ];

  return (
    <PageShell>
      <TopBar />
      <section className="mx-auto w-full max-w-5xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.4em] text-white/40">
          Psychology Report
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl"
        >
          The full breakdown on {partnerLabel}
        </motion.h1>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <GlassCard className="p-6 md:p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-lg font-semibold">Category scores</h2>
              <span className="text-xs uppercase tracking-widest text-white/40">/ 100</span>
            </div>
            <div className="space-y-5">
              {result.categories.map((c, i) => {
                const M = meta[c.category];
                return (
                  <motion.div
                    key={c.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                          <M.icon className="h-4 w-4 text-white/80" />
                        </div>
                        <div>
                          <div className="font-semibold">{c.category}</div>
                          <div className="text-xs text-white/50">{M.blurb(partnerLabel)}</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold tabular-nums">{c.percent}</div>
                    </div>
                    <ProgressBar
                      value={c.percent}
                      tone={c.percent >= 70 ? "green" : c.percent >= 40 ? "yellow" : "red"}
                    />
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="mb-2 text-lg font-semibold">Vibe distribution</h2>
              <div className="relative h-48">
                <ResponsiveContainer>
                  <RadialBarChart innerRadius="30%" outerRadius="100%" data={distribution} startAngle={90} endAngle={-270}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar background={{ fill: "rgba(255,255,255,0.06)" }} dataKey="value" cornerRadius={20} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">{result.percent}%</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">{result.verdict}</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <Legend color="#58F29D" label="Green" value={result.green} />
                <Legend color="#FFD25A" label="Yellow" value={result.yellow} />
                <Legend color="#FF5A6E" label="Red" value={result.red} />
              </div>
            </GlassCard>

            <Link to="/share" className="block">
              <GlassButton className="w-full" size="lg" variant={result.verdict === "RED FLAG" ? "danger" : "primary"}>
                Generate share card <ArrowRight className="h-4 w-4" />
              </GlassButton>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Legend({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/[0.03] p-3">
      <div className="flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 12px ${color}` }} />
        <span className="text-white/60">{label}</span>
      </div>
      <div className="mt-1 text-lg font-semibold tabular-nums">{value}%</div>
    </div>
  );
}
