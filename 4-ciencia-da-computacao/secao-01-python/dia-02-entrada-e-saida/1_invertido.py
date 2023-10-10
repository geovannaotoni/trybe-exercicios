# 1)programa que receba um nome e imprima o mesmo na vertical em escada invertida
def invertido(nome):
    tamanho = len(nome)
    for coluna in range(tamanho):
        for linha in range(tamanho):
            if linha + coluna < tamanho:
                print(nome[linha], end='')
        print()


invertido('PEDRO')


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()

# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)