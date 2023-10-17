import random


def random_averages(n):  # O(n)
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)  
        # randrange: gerar um núm aleatório dentro de um intervalo especificado
        average = average/n
        list_of_averages.append(average)

    return list_of_averages  # complexidade de espaço: O(1)