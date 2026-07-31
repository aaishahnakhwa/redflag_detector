import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CloudCheck, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FlagFlash } from "../components/FlagFlash";
import { GlassButton } from "../components/GlassButton";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";
import { scoreAnswers } from "../data/scoring";
import { saveSubmission } from "../lib/firebase";

export const Route = createFileRoute("/result")({
  head: () => ({ meta: [{ title: "The Verdict — R/G Detector" }] }),
  component: ResultPage,
});

function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, { duration: 2500, bounce: 0.2 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (latest) => setCurrentVal(latest));
    return () => unsubscribe();
  }, [value, spring, display]);

  return <span>{currentVal}</span>;
}

function ResultPage() {
  const navigate = useNavigate();
  const { state, partnerLabel } = useQuiz();
  const result = useMemo(() => scoreAnswers(state.answers), [state.answers]);
  const isGreen = result.verdict === "GREEN FLAG";
  const isYellow = result.verdict === "YELLOW FLAG";
  const isRed = result.verdict === "RED FLAG";

  const hasSavedRef = useRef(false);
  const [savedToDb, setSavedToDb] = useState(false);

  useEffect(() => {
    if (Object.keys(state.answers).length === 0) {
      navigate({ to: "/" });
      return;
    }

    if (!hasSavedRef.current) {
      hasSavedRef.current = true;
      saveSubmission({
        yourName: state.info.yourName || "Anonymous",
        partnerName: state.info.partnerName || partnerLabel,
        percent: result.percent,
        verdict: result.verdict,
        yourGender: state.info.yourGender,
        partnerGender: state.info.partnerGender,
        relationship: state.info.relationship,
      }).then((key) => {
        if (key) setSavedToDb(true);
      });
    }
  }, [state.answers, state.info, result, navigate, partnerLabel]);

  const color = isGreen ? "#58F29D" : isYellow ? "#FFD25A" : "#FF5A6E";

  return (
    <PageShell>
      <FlagFlash color={color} />
      <TopBar />
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-white/40"
        >
          Verdict for {partnerLabel}
        </motion.p>

        <motion.div
          initial={{ scale: 0.6, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-6 flex flex-col items-center"
        >
          <Flag color={color} />
          <h1
            className="mt-6 text-[14vw] font-bold leading-none tracking-[-0.05em] md:text-[120px]"
            style={{ color, textShadow: `0 0 60px ${color}80` }}
          >
            {result.verdict}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex items-baseline gap-2"
          >
            <span className="text-6xl font-bold text-white md:text-7xl">
              <AnimatedCounter value={result.percent} />%
            </span>
            <span className="text-white/50">match</span>
          </motion.div>

          {/* Database Saved Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-md"
          >
            {savedToDb ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#58F29D]" />
                <span className="text-white/80">Saved to Firebase Realtime DB</span>
              </>
            ) : (
              <>
                <CloudCheck className="h-3.5 w-3.5 text-white/40 animate-pulse" />
                <span>Syncing to Firebase...</span>
              </>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-md text-balance text-white/60"
        >
          {isGreen
            ? "Solid signals across the board. Keep watering this one."
            : isYellow
            ? "Mixed signals — some green, some red. Time to look closer."
            : "The vibes are… not vibing. Let's break down why."}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10"
        >
          <Link to="/report">
            <GlassButton size="lg" variant={isRed ? "danger" : "primary"}>
              View full report <ArrowRight className="h-4 w-4" />
            </GlassButton>
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}

function Flag({ color }: { color: string }) {
  return (
    <motion.div
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "bottom left" }}
      className="relative h-40 w-52"
    >
      <div className="absolute bottom-0 left-1 h-full w-1.5 rounded-full bg-white/40" />
      <motion.div
        className="absolute left-2 top-0 h-28 w-48 rounded-tr-3xl rounded-br-md rounded-tl-md"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}80)`, boxShadow: `0 20px 60px -20px ${color}` }}
        animate={{ skewY: [-3, 3, -3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
