names = []

names.append('João')
names.extend(['Maria', 'José', 'Ana'])

print(len(names))
print(names[-1])
print(names[1:3:1])
print(names[1::1])  # print(names[1:])
print(names[::2])


# tuplas não podem ser alteradas
names_tuple = "Mateus", "Marcos", "Lucas"
for name in names_tuple:
    print(name)

for index, name in enumerate(names_tuple):
    print(f"O nome {name} está no índice {index}")


# dict são estruturas de dados que possuem chave e valor
dicio = {"Nome": 'João', "Idade": 20}
print(dicio['Nome'])
print(dicio.values())
print(dicio.keys())
print(dicio.items())  # retorna uma lista de tuplas (par chave e valor)


# set são estruturas desordenadas e não aceitam elementos repetidos
conj = {"Maça", "Banana", "Laranja"}
conj.add("Uva")
conj.add("Maça")
print(conj)  # {'Uva', 'Banana', 'Maça', 'Laranja'}
# não adiciona elementos iguais
conj.remove("Banana")
