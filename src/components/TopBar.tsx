import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <Link to="/" className="group flex items-center gap-2">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl glass">
          <Sparkles className="h-4 w-4 text-[#58F29D]" />
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight">R/G Detector</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Relationship Intel</div>
        </div>
      </Link>
      <div className="hidden items-center gap-2 text-xs text-white/50 md:flex">
        <span className="h-2 w-2 rounded-full bg-[#58F29D] shadow-[0_0_10px_#58F29D]" />
        Live analysis
      </div>
    </header>
  );
}
