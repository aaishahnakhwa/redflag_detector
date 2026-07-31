export function getVideoUrlForVerdict(verdict: string): string {
  if (verdict === "GREEN FLAG") return "/assets/green.gif";
  if (verdict === "YELLOW FLAG") return "/assets/yellow.gif";
  return "/assets/red.gif";
}

export function getVideoIframeForVerdict(verdict: string): string {
  return getVideoUrlForVerdict(verdict);
}

