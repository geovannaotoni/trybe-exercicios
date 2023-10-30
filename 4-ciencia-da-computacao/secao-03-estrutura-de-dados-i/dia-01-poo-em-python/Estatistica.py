from typing import List
from collections import Counter


class Estatistica:
    def __init__(self, numbers: List[int]) -> None:
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)
    
    def mediana(self):
        numbers = sorted(self.__numbers)
        middle = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[middle - 1] + numbers[middle]) / 2
        else:
            return numbers[middle]
        
    def moda(self):
        most_commom = Counter(self.__numbers).most_common(1)[0]
        return most_commom[0]


lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
estatistica = Estatistica(lista)
print(estatistica.media())
print(estatistica.mediana())
print(estatistica.moda())
