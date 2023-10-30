# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]


def shuffle(cards):
    final = []
    middle = len(cards) // 2
    for i in range(middle):  # Complexidade de Tempo O(n)
        final.extend(cards[i::middle])
    return final


print(shuffle(cartas))