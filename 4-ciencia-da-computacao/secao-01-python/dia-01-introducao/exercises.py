# Exercício 1: retorna o maior dos numeros
def maior(num1, num2):

    return max(num1, num2)


print(maior(10, 20))
# outra solução
# def bigger(number, other):
#     if other > number:
#         return other
#     return number


# Exercício 2: média aritmética dos valores de uma lista
def media(lista):
    total = 0
    for item in lista:
        total += item
    return total / len(lista)


print(media([1, 2, 3, 4, 5]))

# Exercício 3: dado um valor n, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# def quadrado(n):
#     for line in range(n):
#         for column in range(n):
#             print("*", end="")
#         print()


def quadrado(n):
    for line in range(n):
        print("*" * n)


quadrado(5)

# Exercício 4: função que receba uma lista de strings e retorne aquela com maior quantidade de caracteres


def maior_string(lista):
    maior = lista[0]
    for string in lista:
        if len(string) > len(maior):
            maior = string

    return maior


print(maior_string(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).


def calcular_tinta(metros):
    quant_litros = metros / 3
    quat_latas = quant_litros // 18
    if quant_litros % 18:
        quat_latas += 1

    return quat_latas, quat_latas * 80


print(calcular_tinta(3))

# alternativa
# import math


# def paint_costs(area):
#     required_liters = area / 3
#     required_cans = math.ceil(required_liters / 18)
#     return required_cans, required_cans * 80

# Exercício 6:  função recebe os três lado de um triângulo e informa qual o tipo de triângulo formado ou "não é triangulo",

def triangle(a, b, c):
    isTriangle = (
        a + b > c and
        a + c > b and
        b + c > a
    )

    if not isTriangle:
        return "não é triângulo"
    elif a == b == c:
        return "equilátero"
    elif a == b or a == c or b == c:
        return "isósceles"
    else:
        return "escaleno"