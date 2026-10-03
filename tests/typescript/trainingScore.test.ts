import { describe, expect, test } from "vitest";
import { calculateTrainingScore } from "../../src/typescript/trainingScore";

describe("calculateTrainingScore", () => {
  test("calculates a weighted training score", () => {
    expect(
      calculateTrainingScore([80, 70, 90], [0.2, 0.3, 0.5])
    ).toBe(82);
  });

  test("calculates with equal weights", () => {
    expect(
      calculateTrainingScore([60, 80, 100], [1 / 3, 1 / 3, 1 / 3])
    ).toBeCloseTo(80);
  });

  test("rejects mismatched lengths", () => {
    expect(() =>
      calculateTrainingScore([80, 70], [0.5])
    ).toThrow();
  });

  test("rejects invalid weights", () => {
    expect(() =>
      calculateTrainingScore([80, 70], [0.5, 0.6])
    ).toThrow();
  });
});
