import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Cpu, ScanEye, Trophy } from "lucide-react";
import { GlassButton } from "../components/GlassButton";
import { GlassCard } from "../components/GlassCard";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission Brief — R/G Detector" },
      { name: "description", content: "The Relationship Intelligence Bureau will analyze communication, respect and emotional intelligence." },
    ],
  }),
  component: MissionPage,
});

const steps = [
  { icon: MessageCircle, title: "Answer", desc: "Honest, quick-fire scenarios about your partner." },
  { icon: Cpu, title: "Analyze", desc: "Our (fake but confident) AI crunches the vibes." },
  { icon: ScanEye, title: "Detect", desc: "We spot patterns across five key categories." },
  { icon: Trophy, title: "Reveal", desc: "Get a verdict, breakdown, and shareable card." },
];

function MissionPage() {
  return (
    <PageShell>
      <TopBar />
      <section className="flex flex-1 flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-[#58F29D]"
        >
          Mission Brief
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl text-balance text-center text-5xl font-bold tracking-tight md:text-6xl"
        >
          Relationship Intelligence Bureau
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-center text-lg text-white/60"
        >
          We'll analyze communication, respect, emotional intelligence and conflict patterns — then hand back a verdict you can actually feel.
        </motion.p>

        <GlassCard className="mt-14 w-full max-w-4xl p-6 md:p-10">
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl bg-white/[0.03] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8E7CFF]/40 to-[#5AC8FA]/30">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-mono text-white/40">0{i + 1}</span>
                </div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <div className="flex items-center gap-6 text-sm text-white/60">
              <div>
                <div className="text-2xl font-semibold text-white">7</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Questions</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-semibold text-white">2m</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Est. time</div>
              </div>
            </div>
            <Link to="/user-info">
              <GlassButton size="lg">
                Begin Mission <ArrowRight className="h-4 w-4" />
              </GlassButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
