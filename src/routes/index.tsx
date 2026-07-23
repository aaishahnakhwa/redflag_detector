import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { GlassButton } from "../components/GlassButton";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <PageShell>
      <TopBar />
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 8, -6, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-24 w-24 items-center justify-center rounded-[28px] glass-strong"
            >
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#58F29D]/30 via-[#5AC8FA]/20 to-[#8E7CFF]/40 blur-xl" />
              <Search className="relative h-10 w-10 text-white" strokeWidth={2.5} />
            </motion.div>
            <motion.span
              className="absolute -right-3 -top-3 h-4 w-4 rounded-full bg-[#FF5A6E] shadow-[0_0_20px_#FF5A6E]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#58F29D]/30 bg-[#58F29D]/10 px-4 py-1 text-xs font-medium text-[#58F29D] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58F29D] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#58F29D]"></span>
          </span>
          <span>Firebase Realtime Cloud Database Enabled</span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[13vw] font-bold leading-[0.9] tracking-[-0.04em] md:text-[96px]"
        >
          <span className="bg-gradient-to-r from-[#FF5A6E] to-[#FFB0B8] bg-clip-text text-transparent">Red Flag,</span>
          <br />
          <span className="bg-gradient-to-r from-[#58F29D] to-[#5AC8FA] bg-clip-text text-transparent">Green Flag</span>
          <br />
          <span className="text-white">Detector.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-md text-balance text-lg text-white/60 md:text-xl"
        >
          Decode the vibes. Know the truth.
          <br />
          <span className="text-white/80">Date smart, not hard.</span>
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link to="/mission">
            <GlassButton size="lg">
              Start Investigation <ArrowRight className="h-4 w-4" />
            </GlassButton>
          </Link>
          <Link to="/mission">
            <GlassButton size="lg" variant="ghost">
              How it works
            </GlassButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/30"
        >
          <span>7 Questions</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>2 Min</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Instant Verdict</span>
        </motion.div>
      </section>
    </PageShell>
  );
}
