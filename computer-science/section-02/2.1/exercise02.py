from typing import Union
from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers: list[int]) -> float:
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers: list[int]) -> Union[int, float]:
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers: list[int]) -> int:
        number, _ = Counter(numbers).most_common()[0]
        return number
