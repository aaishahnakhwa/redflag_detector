import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GlassButton } from "../components/GlassButton";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";
import { questions } from "../data/questions";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title: "Quiz — R/G Detector" }] }),
  component: QuizPage,
});

function QuizPage() {
  const navigate = useNavigate();
  const { state, answer, partnerLabel } = useQuiz();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!state.info.partnerName) navigate({ to: "/user-info" });
  }, [state.info.partnerName, navigate]);

  const q = questions[idx];
  const selected = state.answers[q.id];
  const progress = ((idx + (selected ? 1 : 0)) / questions.length) * 100;

  const next = () => {
    if (idx < questions.length - 1) setIdx(idx + 1);
    else navigate({ to: "/analysis" });
  };
  const back = () => (idx > 0 ? setIdx(idx - 1) : navigate({ to: "/user-info" }));

  return (
    <PageShell>
      <TopBar />
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
        <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
          <span>
            Question <span className="text-white">{String(idx + 1).padStart(2, "0")}</span> / {String(questions.length).padStart(2, "0")}
          </span>
          <span className="text-[#58F29D]">{q.category}</span>
        </div>
        <ProgressBar value={progress} />

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {q.prompt(partnerLabel)}
            </h2>

            <div className="mt-8 grid gap-3">
              {q.options.map((opt, i) => {
                const active = selected === opt.key;
                return (
                  <motion.button
                    key={opt.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => answer(q.id, opt.key)}
                    className={cn(
                      "group relative flex items-center gap-4 rounded-3xl border p-5 text-left transition-all",
                      active
                        ? "border-[#58F29D]/70 bg-[#58F29D]/10 shadow-[0_0_40px_-10px_#58F29D]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-mono transition-all",
                        active
                          ? "border-[#58F29D] bg-[#58F29D] text-black"
                          : "border-white/20 text-white/60 group-hover:border-white/40",
                      )}
                    >
                      {active ? (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </motion.span>
                      ) : (
                        opt.key
                      )}
                    </span>
                    <span className="text-base text-white/90 md:text-lg">{opt.text}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between pt-10">
          <GlassButton variant="ghost" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </GlassButton>
          <GlassButton onClick={next} disabled={!selected}>
            {idx === questions.length - 1 ? "Analyze" : "Next"} <ArrowRight className="h-4 w-4" />
          </GlassButton>
        </div>
      </section>
    </PageShell>
  );
}
