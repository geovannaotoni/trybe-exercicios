entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


# Complexidade de Tempo O(n)
def students_in_instant(entrances, exits, instant):
    count = 0
    for i in range(len(entrances)):
        if entrances[i] <= instant <= exits[i]:
            count += 1
    return count


print(students_in_instant(entradas, saidas, instante_buscado))