# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def verify_max_time_ok(collected_values):
    maximum = 0
    current = 0
    for value in valores_coletados:  # Complexidade de Tempo O(n)
        if value == 1:
            current += 1
        else:
            current = 0
        if maximum < current:
            maximum = current
    return maximum


print(verify_max_time_ok(valores_coletados))