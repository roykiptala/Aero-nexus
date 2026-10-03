export function calculateTrainingScore(
  scores: number[],
  weights: number[]
): number {
  return scores.reduce(
    (total, score, index) => total + score * (weights[index] ?? 0),
    0
  );
}