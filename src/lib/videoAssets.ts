export function getVideoUrlForVerdict(verdict: string): string {
  const normalized = verdict?.toLowerCase() || "";

  if (normalized.includes("green")) {
    return "/assets/green.gif";
  }
  if (normalized.includes("yellow") || normalized.includes("mixed")) {
    return "/assets/yellow.gif";
  }
  return "/assets/red.gif";
}

