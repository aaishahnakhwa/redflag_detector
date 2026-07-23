import { motion } from "framer-motion";

const blobs = [
  { size: 520, color: "#8E7CFF", top: "-10%", left: "-10%", delay: 0 },
  { size: 460, color: "#5AC8FA", top: "20%", left: "70%", delay: 2 },
  { size: 400, color: "#58F29D", top: "60%", left: "-5%", delay: 4 },
  { size: 380, color: "#FF5A6E", top: "70%", left: "60%", delay: 1 },
];

export function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,124,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(88,242,157,0.08),transparent_50%)]" />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40 blur-[120px]"
          style={{ width: b.size, height: b.size, top: b.top, left: b.left, background: b.color }}
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        />
      ))}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          return (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/60"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ opacity: [0.1, 0.9, 0.1], y: [0, -20, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
            />
          );
        })}
      </div>
    </div>
  );
}
