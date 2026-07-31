import greenGif from "../assets/green.gif";
import yellowGif from "../assets/yellow.gif";
import redGif from "../assets/red.gif";

export function getVideoUrlForVerdict(verdict: string): string {
  if (verdict === "GREEN FLAG") return greenGif;
  if (verdict === "YELLOW FLAG") return yellowGif;
  return redGif;
}

export function getVideoIframeForVerdict(verdict: string): string {
  return getVideoUrlForVerdict(verdict);
}
