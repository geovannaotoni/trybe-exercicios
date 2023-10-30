# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


# Complexidade de Tempo O(n²)
def good_pairs(numbers):
    count = 0
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if j > i and numbers[i] == numbers[j]:
                count += 1
    return count
        

print(good_pairs(produtos))