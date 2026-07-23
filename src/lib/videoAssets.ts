import greenVideoJson from "../assets/green.mp4.asset.json";
import redVideoJson from "../assets/red.mp4.asset.json";
import yellowVideoJson from "../assets/yellow.mp4.asset.json";

import greenMp4 from "../assets/green.mp4";
import redMp4 from "../assets/red.mp4";
import yellowMp4 from "../assets/yellow.mp4";

// Vite asset imports return the URL path for local dev/prod build.
// If running in a hosted environment where asset.json has a valid URL, fallback gracefully.
export const greenVideoUrl = greenMp4 || greenVideoJson.url || "/assets/green.mp4";
export const redVideoUrl = redMp4 || redVideoJson.url || "/assets/red.mp4";
export const yellowVideoUrl = yellowMp4 || yellowVideoJson.url || "/assets/yellow.mp4";

export function getVideoUrlForVerdict(verdict: string): string {
  if (verdict === "GREEN FLAG") return greenVideoUrl;
  if (verdict === "YELLOW FLAG") return yellowVideoUrl;
  return redVideoUrl;
}
