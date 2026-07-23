import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & { children: ReactNode; tilt?: boolean };

export function GlassCard({ children, className, tilt = false, ...rest }: Props) {
  return (
    <motion.div
      whileHover={tilt ? { rotateX: -2, rotateY: 3, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={cn(
        "glass relative overflow-hidden rounded-[32px] p-8",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
