// Helpers shared by the visible recipe card and the Recipe structured data.

/** "PT1H20M" -> 80 */
export function isoMinutes(iso: string) {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?/.exec(iso);
  return m ? Number(m[1] ?? 0) * 60 + Number(m[2] ?? 0) : 0;
}

/** A short label for a step: its first clause, capped at ~60 characters. */
export function stepName(text: string) {
  const first = text.split(/[،,.؛;:]/)[0].trim();
  return first.length > 60 ? `${first.slice(0, 57).trim()}…` : first;
}

export const stepId = (i: number) => `recipe-step-${i + 1}`;
