export function getVideoUrlForVerdict(verdict: string): string {
  if (verdict === "GREEN FLAG") return "/assets/green.mp4";
  if (verdict === "YELLOW FLAG") return "/assets/yellow.mp4";
  return "/assets/red.mp4";
}

export function getVideoIframeForVerdict(verdict: string): string {
  return getVideoUrlForVerdict(verdict);
}

