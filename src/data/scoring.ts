export interface ScoreState {
  red: number;
  green: number;
  beige: number;
}

export type FlagType = 'red' | 'green' | 'beige';

export function calculateDominantFlag(score: ScoreState): FlagType {
  const { red, green, beige } = score;
  
  // Tie breaking order: Red (Critical Meltdown danger) > Green (Fusion anomaly) > Beige (Neutral cardboard)
  if (red >= green && red >= beige && red > 0) {
    return 'red';
  }
  if (green >= red && green >= beige && green > 0) {
    return 'green';
  }
  if (beige > 0) {
    return 'beige';
  }
  return 'green'; // Default fallback
}

export function getScorePercentages(score: ScoreState) {
  const total = score.red + score.green + score.beige;
  if (total === 0) return { red: 0, green: 0, beige: 0 };
  
  return {
    red: Math.round((score.red / total) * 100),
    green: Math.round((score.green / total) * 100),
    beige: Math.round((score.beige / total) * 100),
  };
}
