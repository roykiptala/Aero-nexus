import sys
from pathlib import Path
import timeit

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from src.python.training_score import calculate_training_score

scores = [80, 70, 90]
weights = [0.2, 0.3, 0.5]

execution_time = timeit.timeit(
    lambda: calculate_training_score(scores, weights),
    number=10000
)

print(f"Python execution time: {execution_time:.6f} seconds")
