import pytest
from src.python.training_score import calculate_training_score


def test_training_score():
    scores = [80, 70, 90]
    weights = [0.2, 0.3, 0.5]

    assert calculate_training_score(scores, weights) == 82


def test_training_score_with_equal_weights():
    scores = [60, 80, 100]
    weights = [1 / 3, 1 / 3, 1 / 3]

    assert calculate_training_score(scores, weights) == pytest.approx(80)


def test_mismatched_lengths():
    with pytest.raises(ValueError):
        calculate_training_score([80, 70], [0.5])


def test_invalid_weights():
    with pytest.raises(ValueError):
        calculate_training_score([80, 70], [0.5, 0.6])