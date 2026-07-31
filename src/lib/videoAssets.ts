import greenGif from "../assets/green.gif";
import yellowGif from "../assets/yellow.gif";
import redGif from "../assets/red.gif";

export function getVideoUrlForVerdict(verdict?: string | null): string {
  const v = String(verdict || "").toUpperCase();
  if (v.includes("GREEN")) return greenGif;
  if (v.includes("YELLOW")) return yellowGif;
  return redGif;
}

export function getVideoIframeForVerdict(verdict?: string | null): string {
  return getVideoUrlForVerdict(verdict);
}
