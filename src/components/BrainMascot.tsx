import { motion } from "framer-motion";

export function BrainMascot() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto h-44 w-44"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#8E7CFF,transparent_60%)] blur-2xl opacity-70" />
      <svg viewBox="0 0 200 200" className="relative h-full w-full drop-shadow-[0_10px_30px_rgba(142,124,255,0.5)]">
        <defs>
          <linearGradient id="brain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB6C6" />
            <stop offset="100%" stopColor="#8E7CFF" />
          </linearGradient>
        </defs>
        <path
          d="M60 70 C40 70 30 95 45 110 C30 125 55 150 80 145 C90 160 120 160 130 145 C160 152 175 125 158 108 C172 92 160 68 140 72 C130 55 100 55 90 72 C80 62 66 62 60 70 Z"
          fill="url(#brain)"
          stroke="#fff"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path d="M100 70 V150 M80 80 C90 100 90 120 80 140 M120 80 C110 100 110 120 120 140" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
        <rect x="55" y="95" width="90" height="4" rx="2" fill="#0a0a0a" />
        <rect x="55" y="97" width="38" height="22" rx="8" fill="#0a0a0a" />
        <rect x="107" y="97" width="38" height="22" rx="8" fill="#0a0a0a" />
        <rect x="62" y="101" width="8" height="4" rx="2" fill="#58F29D" opacity="0.8" />
        <rect x="114" y="101" width="8" height="4" rx="2" fill="#58F29D" opacity="0.8" />
        <g transform="translate(135 130) rotate(15)">
          <rect x="0" y="0" width="40" height="52" rx="4" fill="#fff" />
          <rect x="12" y="-4" width="16" height="8" rx="2" fill="#8E7CFF" />
          <rect x="6" y="14" width="28" height="2" fill="#8E7CFF" opacity="0.6" />
          <rect x="6" y="22" width="20" height="2" fill="#8E7CFF" opacity="0.6" />
          <rect x="6" y="30" width="24" height="2" fill="#8E7CFF" opacity="0.6" />
        </g>
      </svg>
    </motion.div>
  );
}
