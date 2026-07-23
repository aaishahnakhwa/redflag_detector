import { motion } from "framer-motion";

export function ProgressBar({ value, tone = "primary" }: { value: number; tone?: "primary" | "green" | "red" | "yellow" }) {
  const bg =
    tone === "green"
      ? "from-[#58F29D] to-[#5AC8FA]"
      : tone === "red"
        ? "from-[#FF5A6E] to-[#8E7CFF]"
        : tone === "yellow"
          ? "from-[#FFD25A] to-[#FF5A6E]"
          : "from-[#8E7CFF] via-[#5AC8FA] to-[#58F29D]";
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${bg}`}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
