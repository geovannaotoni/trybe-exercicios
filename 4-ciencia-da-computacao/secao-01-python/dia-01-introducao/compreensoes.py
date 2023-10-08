frase = "CS é bom demais, as dicas pythonicas fazem ficar melhor ainda"

vogais = "aeiou"

# lista_vogais = []
# for letra in frase:
#     if letra.lower() in vogais:
#         lista_vogais.append(letra)

# print(lista_vogais)

lista_vogais = [letra for letra in frase if letra.lower() in vogais]

print(lista_vogais)
# Saída: ['o', 'e', 'a', 'i', 'a', 'i', 'a', 'o', 'i', 'a', 'a', 'e', 'i', 'a',
# 'e', 'o', 'a', 'i', 'a']

# conjunto_vogais = set()
# for letra in frase:
#     if letra.lower() in vogais:
#         conjunto_vogais.add(letra)

# print(conjunto_vogais)

conjunto_vogais = set(letra for letra in frase if letra.lower() in vogais)
print(conjunto_vogais)  # Saída: {'a', 'e', 'o', 'i'}