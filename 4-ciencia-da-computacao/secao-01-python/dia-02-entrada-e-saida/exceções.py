# print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero

# print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined

# print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str


while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um
        # valor que não pode ser traduzido para número inteiro
        print("Oops! Esse não era um número inteiro. Tente novamente...")