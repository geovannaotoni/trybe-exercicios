# função para entrar com o nome de uma pessoa usuária e imprimi-lo na vertical


user_input = input("Digite seu nome: ")


def username(name):
    for letter in name:
        print(letter)


username(user_input)


# função para receber vários números naturais e calcular a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”

number_list = input("Digite os números naturais separados por espaço: ").split(' ')


def soma(lista):
    count = 0
    for num in lista:
        if (num.isdigit()):
            count += int(num)
        else:
            print(f"Erro ao somar valores, {num} é um valor inválido")
    print(f"A soma dos valores válidos é: {count}")


soma(number_list)
