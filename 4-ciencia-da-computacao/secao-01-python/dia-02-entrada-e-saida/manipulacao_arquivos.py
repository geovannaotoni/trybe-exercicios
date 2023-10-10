file = open("arquivo.txt", mode="w") # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.
# file.write("Olá, mundo!")


with open("arquivo.txt", "w") as file:
    file.write("nome idade\n")

    file.write("Maria 45\n")
    file.write("Miguel 33\n")

    # Não precisa da quebra de linha, pois esse é um comportamento padrão do print
    print("Túlio 22", file=file)

    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)
# file.close() # fecha o arquivo


# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
    # através do atributo booleano 'closed' (file.closed = False)
    print(file.closed)
# como estamos FORA do contexto, o arquivo está FECHADO (file.closed = True)
print(file.closed)


# escrita
with open("arquivo.txt", "w") as file:
    file.write("Trybe S2")

# leitura
with open("arquivo.txt", "r") as file:
    content = file.read()
    print(content)


# escrita
with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)
    file.close()

# leitura
with open("arquivo.txt", "r") as file:
    for line in file:
        print(line)  # não esqueça que a quebra de linha também é um caractere da linha
    file.close()