# Exercício 1: retornar o menor elemento dada uma lista

def menor(lista):
    return min(lista)


print(menor([5, 9, 3, 19, 70, 8, 100, 2, 35, 27])) # Saída: 2


# Exercício 2: dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.
def triangle(n):
    for i in range(1, n + 1):
        print('*' * i)


triangle(5)


# Exercício 3: função recebe um número inteiro N e retorna o somatório de todos os números de 1 até N. 

def somatorio(n):
    soma = 0
    for num in range(1, n + 1):
        soma += num
    return soma


print(somatorio(5))  # Saída: 15

# def summation(limit):
#     return sum(range(1, limit + 1))
# print(summation(5))  # Saída: 15

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
  # Álcool:
    # preço do litro do álcool é R$ 1,90
    # - Até 20 litros, desconto de 3% por litro;
    # - Acima de 20 litros, desconto de 5% por litro.
  # Gasolina:
    # preço do litro da gasolina é R$ 2,50
    # - Até 20 litros, desconto de 4% por litro;
    # - Acima de 20 litros, desconto de 6% por litro.

# função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente


def calcular_preco(litros, tipo):
    if tipo == 'A':
        preco = 1.9
        desconto = 0.03
        if litros > 20:
            desconto = 0.05
    if tipo == 'G':
        preco = 2.5
        desconto = 0.04
        if litros > 20:
            desconto = 0.06
    return preco * litros * (1 - desconto)
    

print(calcular_preco(20, 'G'))