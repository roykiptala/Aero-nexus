def calculate_training_score(scores, weights):
    if len(scores) != len(weights):
        raise ValueError("Scores and weights must have the same length.")

    if not scores:
        raise ValueError("Scores cannot be empty.")

    if abs(sum(weights) - 1.0) > 1e-9:
        raise ValueError("Weights must sum to 1.")

    return sum(score * weight for score, weight in zip(scores, weights))