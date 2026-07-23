import { motion } from "framer-motion";

export function FlagFlash({ color }: { color: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(ellipse at center, transparent 45%, ${color} 100%)`,
      }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.2, 0.5] }}
      transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
    />
  );
}
