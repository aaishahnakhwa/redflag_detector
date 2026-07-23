import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "danger";

type Props = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#58F29D] via-[#5AC8FA] to-[#8E7CFF] text-black shadow-[0_10px_40px_-10px_rgba(88,242,157,0.6)]",
  ghost: "glass text-foreground hover:bg-white/10",
  danger:
    "bg-gradient-to-r from-[#FF5A6E] to-[#8E7CFF] text-white shadow-[0_10px_40px_-10px_rgba(255,90,110,0.6)]",
};

export function GlassButton({ children, className, variant = "primary", size = "md", ...rest }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
