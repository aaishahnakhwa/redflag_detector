export const GREEN_IFRAME_URL = "https://drive.google.com/file/d/1cqym3-egHRsFQf2xTRIE-vae-7b0U7yB/preview";
export const RED_IFRAME_URL = "https://drive.google.com/file/d/1Nf5nUKXyeftKOlkvptuCbxswcR1i0aGk/preview";
export const YELLOW_IFRAME_URL = "https://drive.google.com/file/d/1DC0bKIUOtH0FDWdxi-iMsbuD9kMtUs4m/preview";

export function getVideoIframeForVerdict(verdict: string): string {
  if (verdict === "GREEN FLAG") return GREEN_IFRAME_URL;
  if (verdict === "YELLOW FLAG") return YELLOW_IFRAME_URL;
  return RED_IFRAME_URL;
}

// Retain legacy helper for backwards compatibility
export function getVideoUrlForVerdict(verdict: string): string {
  return getVideoIframeForVerdict(verdict);
}
