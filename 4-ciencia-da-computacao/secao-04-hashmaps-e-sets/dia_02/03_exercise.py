from conjunto import Conjunto

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

conj_estudantes = Conjunto()
conj_lista1 = Conjunto()
conj_lista2 = Conjunto()

for estudante in estudantes:
    conj_estudantes.add(estudante)

for lista1 in lista1_entregues:
    conj_lista1.add(lista1)

for lista2 in lista2_entregues:
    conj_lista2.add(lista2)


print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
print("Quem não entregou nenhuma:", conj_estudantes.difference(conj_lista1.union(conj_lista2)))