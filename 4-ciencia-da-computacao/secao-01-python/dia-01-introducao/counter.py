import random
from collections import Counter

lista_de_numeros = []
for x in range(10000):
    lista_de_numeros.append(random.randint(0, 1000))

# print(lista_de_numeros)
counter = Counter(lista_de_numeros)

# print(counter)
print(counter[0])

mais_comuns = counter.most_common()
# print(mais_comuns)

numero, vezes_que_repete = mais_comuns[0]
print(
    f"O número mais comum é {numero} e ele se repete {vezes_que_repete} vezes"
)