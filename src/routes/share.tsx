import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Copy, Download, Home, RotateCcw, Share2, UserPlus } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { GlassButton } from "../components/GlassButton";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";
import { useQuiz } from "../context/QuizContext";
import { scoreAnswers, topStrengths } from "../data/scoring";

export const Route = createFileRoute("/share")({
  head: () => ({ meta: [{ title: "Share your verdict — R/G Detector" }] }),
  component: SharePage,
});

function SharePage() {
  const navigate = useNavigate();
  const { state, resetAll, resetAnswers, partnerLabel } = useQuiz();
  const result = useMemo(() => {
    if (Object.keys(state.answers).length === 0) {
      return {
        total: 8, max: 35, percent: 23, green: 14, yellow: 14, red: 71,
        verdict: "RED FLAG" as const,
        categories: [
          { category: "Respect" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
          { category: "Communication" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
          { category: "Consistency" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
          { category: "Trust" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
          { category: "Emotional safety" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
          { category: "Conflict" as import("../data/scoring").Category, score: 2, max: 5, percent: 40 },
          { category: "Future alignment" as import("../data/scoring").Category, score: 1, max: 5, percent: 20 },
        ],
      };
    }
    return scoreAnswers(state.answers);
  }, [state.answers]);
  const strengths = useMemo(() => topStrengths(result), [result]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // preview only
  }, []);

  const color =
    result.verdict === "GREEN FLAG"
      ? "#58F29D"
      : result.verdict === "YELLOW FLAG"
      ? "#FFD25A"
      : "#FF5A6E";

  const darkAccent =
    result.verdict === "GREEN FLAG"
      ? "#064E3B"
      : result.verdict === "YELLOW FLAG"
      ? "#78350F"
      : "#7F1D1D";

  const copy = async () => {
    await navigator.clipboard.writeText(
      `${partnerLabel} scored ${result.percent}% — ${result.verdict} on the Red Flag / Green Flag Detector.`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const share = async () => {
    const text = `${partnerLabel}: ${result.verdict} — ${result.percent}% match`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "R/G Detector", text, url: typeof location !== "undefined" ? location.origin : undefined });
      } catch {
        /* cancelled */
      }
    } else {
      copy();
    }
  };

  const download = () => {
    const svgData = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs>
    <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1024"/>
      <stop offset="100%" stop-color="#151030"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="40" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="1080" height="1350" fill="url(#cardBg)"/>
  <circle cx="850" cy="250" r="300" fill="${color}" opacity="0.08" filter="url(#glow)"/>
  <circle cx="200" cy="1150" r="280" fill="${color}" opacity="0.06" filter="url(#glow)"/>
  <rect x="40" y="40" width="1000" height="1270" rx="60" fill="none" stroke="${color}" stroke-width="16" opacity="0.9"/>
  <rect x="72" y="72" width="936" height="1206" rx="44" fill="none" stroke="${color}" stroke-width="4" opacity="0.3"/>
  <rect x="90" y="110" rx="999" width="220" height="54" fill="black"/>
  <text x="115" y="148" fill="white" font-family="Outfit, sans-serif" font-size="28" font-weight="800" letter-spacing="2">R/G DETECTOR</text>
  <circle cx="940" cy="137" r="18" fill="${color}" opacity="0.2"/>
  <circle cx="940" cy="137" r="8" fill="${color}"/>
  <text x="540" y="420" text-anchor="middle" fill="white" font-family="Outfit, sans-serif" font-size="42" font-weight="600" opacity="0.6">${escapeXml(partnerLabel)} scored</text>
  <text x="540" y="720" text-anchor="middle" fill="${color}" font-family="Outfit, sans-serif" font-size="260" font-weight="900" font-style="italic" letter-spacing="-8">${result.percent}%</text>
  <rect x="700" y="520" rx="16" width="260" height="64" fill="white" stroke="${darkAccent}" stroke-width="6" transform="rotate(-12 830 552)"/>
  <text x="830" y="564" text-anchor="middle" fill="${darkAccent}" font-family="Outfit, sans-serif" font-size="34" font-weight="900" letter-spacing="2" transform="rotate(-12 830 552)">VERIFIED</text>
  <rect x="170" y="820" rx="32" width="740" height="140" fill="${darkAccent}" transform="rotate(-2 540 890)"/>
  <text x="540" y="908" text-anchor="middle" fill="${color}" font-family="Outfit, sans-serif" font-size="72" font-weight="900" uppercase="yes" letter-spacing="4" transform="rotate(-2 540 890)">${result.verdict}</text>
  <text x="540" y="1040" text-anchor="middle" fill="white" font-family="Figtree, sans-serif" font-size="24" font-weight="700" opacity="0.5" letter-spacing="6">CORE STRENGTHS</text>
  ${strengths.map((s, i) => {
    const x = 540 + (i - (strengths.length - 1) / 2) * 320;
    const y = 1120 + (i % 2) * 90;
    return `<rect x="${x - 140}" y="${y - 36}" rx="24" width="280" height="72" fill="white" stroke="${darkAccent}" stroke-width="6"/><circle cx="${x - 110}" cy="${y}" r="8" fill="${color}"/><text x="${x}" y="${y + 10}" text-anchor="middle" fill="${darkAccent}" font-family="Outfit, sans-serif" font-size="30" font-weight="800" letter-spacing="1">${escapeXml(s).toUpperCase()}</text>`;
  }).join("")}
  <text x="540" y="1290" text-anchor="middle" fill="white" font-family="Figtree, sans-serif" font-size="24" opacity="0.35" letter-spacing="3">rgdetector.app · scan your partner</text>
</svg>`;
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rg-detector-${partnerLabel.toLowerCase().replace(/\s+/g, "-")}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PageShell>
      <TopBar />
      <section className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-4 py-8 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40"
          >
            Share your verdict
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl"
          >
            A card worth posting.
          </motion.h1>
          <p className="mt-4 max-w-md text-white/60">
            Download it, drop it in the group chat, or start a fresh investigation on someone else.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton onClick={download}>
              <Download className="h-4 w-4" /> Download
            </GlassButton>
            <GlassButton variant="ghost" onClick={copy}>
              <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy link"}
            </GlassButton>
            <GlassButton variant="ghost" onClick={share}>
              <Share2 className="h-4 w-4" /> Share
            </GlassButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => {
                resetAnswers();
                navigate({ to: "/quiz" });
              }}
              className="glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10"
            >
              <RotateCcw className="mb-2 h-4 w-4 text-[#5AC8FA]" />
              Retake quiz
            </button>
            <button
              onClick={() => {
                resetAll();
                navigate({ to: "/user-info" });
              }}
              className="glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10"
            >
              <UserPlus className="mb-2 h-4 w-4 text-[#8E7CFF]" />
              Test another person
            </button>
            <Link to="/" onClick={() => resetAll()} className="glass rounded-2xl p-4 text-left text-sm transition hover:bg-white/10">
              <Home className="mb-2 h-4 w-4 text-[#58F29D]" />
              Return home
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <div
            ref={cardRef}
            className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[48px] bg-[#0b1024] p-6 shadow-2xl md:p-8"
            style={{
              boxShadow: `0 0 0 10px ${color}30, 0 40px 100px -20px rgba(0,0,0,0.7)`,
            }}
          >
            {/* ambient glow */}
            <div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[100px]"
              style={{ background: color, opacity: 0.1 }}
            />
            <div
              className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-[100px]"
              style={{ background: color, opacity: 0.08 }}
            />

            {/* inner border */}
            <div
              className="absolute inset-4 rounded-[36px] border-2 opacity-30 md:inset-5"
              style={{ borderColor: color }}
            />

            {/* header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
                R/G Detector
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: `${color}30` }}>
                <motion.div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: color }}
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* score */}
            <div className="relative z-10 mt-10 flex flex-col items-center text-center md:mt-14">
              <div className="text-sm font-semibold uppercase tracking-widest text-white/60">{partnerLabel} scored</div>
              <div
                className="font-display mt-2 text-[26vw] font-black italic leading-none tracking-tighter md:text-[140px]"
                style={{ color }}
              >
                {result.percent}%
              </div>

              {/* verified sticker */}
              <motion.div
                className="absolute right-2 top-16 rounded-xl border-2 bg-white px-4 py-1.5 text-sm font-black uppercase tracking-widest shadow-lg md:right-6 md:top-20"
                style={{ borderColor: darkAccent, color: darkAccent }}
                animate={{ rotate: [-10, -14, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Verified
              </motion.div>
            </div>

            {/* verdict banner */}
            <motion.div
              className="relative z-10 mx-auto mt-8 w-max max-w-full rounded-3xl px-8 py-4 shadow-2xl md:mt-10"
              style={{ background: darkAccent }}
              animate={{ rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="font-display text-3xl font-black uppercase italic tracking-wider md:text-4xl"
                style={{ color }}
              >
                {result.verdict}
              </div>
            </motion.div>

            {/* strengths */}
            <div className="relative z-10 mt-8 md:mt-10">
              <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/50">Core strengths</div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {strengths.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-2 rounded-2xl border-2 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: darkAccent, color: darkAccent }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: color }} />
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* footer */}
            <div className="absolute inset-x-0 bottom-5 z-10 flex flex-col items-center gap-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">rgdetector.app · scan your partner</p>
              <div className="flex gap-1.5">
                <span className="h-1.5 w-8 rounded-full bg-white/30" />
                <span className="h-1.5 w-8 rounded-full bg-white/30" />
                <span className="h-1.5 w-8 rounded-full" style={{ background: color }} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}

function escapeXml(v: string) {
  return v.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);
}
