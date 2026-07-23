import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useMemo } from "react";
import { FlagFlash } from "../components/FlagFlash";
import { GlassButton } from "../components/GlassButton";
import { GlassCard } from "../components/GlassCard";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";
import { greenMeme, redMeme, yellowMeme } from "../data/memes";
import { scoreAnswers } from "../data/scoring";
import greenVideo from "../assets/green.mp4.asset.json";
import redVideo from "../assets/red.mp4.asset.json";
import yellowVideo from "../assets/yellow.mp4.asset.json";

export const Route = createFileRoute("/meme")({
  head: () => ({ meta: [{ title: "The Meme — R/G Detector" }] }),
  component: MemePage,
});

function MemePage() {
  const navigate = useNavigate();
  const { state } = useQuiz();
  const result = useMemo(() => scoreAnswers(state.answers), [state.answers]);
  const verdict = result.verdict;
  const green = verdict === "GREEN FLAG";
  const yellow = verdict === "YELLOW FLAG";
  const red = verdict === "RED FLAG";
  const color = green ? "#58F29D" : yellow ? "#FFD25A" : "#FF5A6E";

  useEffect(() => {
    if (Object.keys(state.answers).length === 0) navigate({ to: "/" });
  }, [state.answers, navigate]);

  useEffect(() => {
    if (!green) return;
    const t = setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.4 },
        colors: ["#58F29D", "#5AC8FA", "#8E7CFF", "#ffffff"],
      });
    }, 300);
    return () => clearTimeout(t);
  }, [green]);

  const meme = green ? greenMeme : yellow ? yellowMeme : redMeme;
  const videoSrc = green ? greenVideo.url : yellow ? yellowVideo.url : redVideo.url;

  return (
    <PageShell>
      <FlagFlash color={color} />
      <TopBar />
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: green
              ? "radial-gradient(ellipse at top, rgba(88,242,157,0.15), transparent 60%)"
              : yellow
              ? "radial-gradient(ellipse at top, rgba(255,210,90,0.18), transparent 60%)"
              : "radial-gradient(ellipse at top, rgba(255,90,110,0.2), transparent 60%)",
          }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <GlassCard className={green ? "" : yellow ? "border-[#FFD25A]/30" : "border-[#FF5A6E]/30"}>
            <div className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em]">
              {green ? (
                <span className="flex items-center gap-2 text-[#58F29D]">
                  <Sparkles className="h-3 w-3" /> Green Alert
                </span>
              ) : yellow ? (
                <span className="flex items-center gap-2 rounded-full bg-[#FFD25A]/20 px-3 py-1 text-[#FFD25A]">
                  <AlertTriangle className="h-3 w-3" /> Yellow Alert
                </span>
              ) : (
                <span className="flex animate-siren items-center gap-2 rounded-full bg-[#FF5A6E]/20 px-3 py-1 text-[#FF5A6E]">
                  <AlertTriangle className="h-3 w-3" /> RED ALERT
                </span>
              )}
            </div>
            <h1
              className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              style={{ color }}
            >
              {meme.headline}
            </h1>

            <motion.video
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src={videoSrc}
              autoPlay
              loop
              playsInline
              controls
              preload="auto"
              aria-label={meme.headline}
              className="mx-auto mt-8 max-h-80 w-full max-w-lg rounded-3xl border border-white/10 object-cover"
            />

            <div className="mt-8 space-y-2">
              {meme.captions.map((c, i) => (
                <motion.p
                  key={c}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="text-lg text-white/80"
                >
                  {c}
                </motion.p>
              ))}
            </div>

            {!green && "difficulty" in meme && (
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: `${color}66`,
                  background: `${color}1a`,
                  color,
                }}
              >
                Relationship Difficulty: <span className="font-semibold">{meme.difficulty}</span>
              </div>
            )}
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Link to="/share">
            <GlassButton size="lg" variant={red ? "danger" : "primary"}>
              Generate share card <ArrowRight className="h-4 w-4" />
            </GlassButton>
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}
