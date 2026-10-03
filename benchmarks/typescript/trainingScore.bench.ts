import { calculateTrainingScore } from "../../src/typescript/trainingScore.js";

const scores = [80, 70, 90];
const weights = [0.2, 0.3, 0.5];

const iterations = 10000;

const start = performance.now();

for (let i = 0; i < iterations; i++) {
  calculateTrainingScore(scores, weights);
}

const end = performance.now();

console.log(
  `TypeScript execution time: ${((end - start) / 1000).toFixed(6)} seconds`
);