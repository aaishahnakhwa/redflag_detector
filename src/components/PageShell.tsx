import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 md:px-10 md:py-16 ${className}`}
    >
      {children}
    </motion.main>
  );
}
