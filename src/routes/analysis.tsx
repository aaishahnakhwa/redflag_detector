import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrainMascot } from "../components/BrainMascot";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";

export const Route = createFileRoute("/analysis")({
  head: () => ({ meta: [{ title: "Analyzing… — R/G Detector" }] }),
  component: AnalysisPage,
});

const lines = [
  "Checking communication…",
  "Measuring accountability…",
  "Scanning emotional maturity…",
  "Detecting conflict patterns…",
  "Cross-referencing red flag database…",
];

function AnalysisPage() {
  const navigate = useNavigate();
  const { state } = useQuiz();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!state.info.partnerName) navigate({ to: "/user-info" });
  }, [state.info.partnerName, navigate]);

  useEffect(() => {
    const tick = setInterval(() => setI((v) => (v + 1) % lines.length), 1500);
    const done = setTimeout(() => navigate({ to: "/result" }), 6000);
    return () => {
      clearInterval(tick);
      clearTimeout(done);
    };
  }, [navigate]);

  return (
    <PageShell>
      <TopBar />
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <BrainMascot />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-balance text-4xl font-bold tracking-tight md:text-5xl"
        >
          Analyzing your answers…
        </motion.h1>

        <div className="mt-6 h-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/60"
            >
              {lines[i]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative mt-12 h-32 w-32">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="44" strokeWidth="6" stroke="rgba(255,255,255,0.08)" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              strokeWidth="6"
              stroke="url(#g)"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={2 * Math.PI * 44}
              initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#58F29D" />
                <stop offset="50%" stopColor="#5AC8FA" />
                <stop offset="100%" stopColor="#8E7CFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </PageShell>
  );
}
