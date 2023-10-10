# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que: lê, aplique um filtro mantendo as pessoas que estão reprovadas, escreva seus nomes em outro arquivo.

reprovados = []
try:
    with open("notas.txt", mode="r") as stu_file:
        for line in stu_file:
            name, grade = line.split()
            if int(grade) < 6:
                reprovados.append(name + "\n")
except FileNotFoundError:
    print("Arquivo inexistente")
else:
    stu_file.close()
    print("Arquivo manipulado e fechado com sucesso")


with open("reprovados.txt", mode="w") as rep_file:
    rep_file.writelines(reprovados)
    rep_file.close()
