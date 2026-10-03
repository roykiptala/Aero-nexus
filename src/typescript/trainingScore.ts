export function calculateTrainingScore(
  scores: number[],
  weights: number[]
): number {
  if (scores.length !== weights.length) {
    throw new Error("Scores and weights must have the same length.");
  }

  if (scores.length === 0) {
    throw new Error("Scores cannot be empty.");
  }

  const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);

  if (Math.abs(weightTotal - 1) > 1e-9) {
    throw new Error("Weights must sum to 1.");
  }

  return scores.reduce(
    (total, score, index) => total + score * (weights[index] ?? 0),
    0
  );
}