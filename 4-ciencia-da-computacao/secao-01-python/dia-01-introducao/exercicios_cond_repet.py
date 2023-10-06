# fatorial de um número
number = 10
resultado = 1
for num in range(1, number + 1):
    resultado *= num

resultado
# outra forma
number = 5
counter = 1
result = 1

while counter <= number:
    result *= counter
    counter += 1
result

# ratings = [6, 8, 5, 9, 10] para [60, 80, 50, 90, 100]
ratings = [6, 8, 5, 9, 10]
new_ratings = [
    rating * 10
    for rating in ratings
]
# outra forma
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# imprima “Múltiplo de 3” se o elemento for divisível por 3
ratings = [6, 8, 5, 9, 10]
for rating in ratings:
    if rating % 3 == 0:
        print(f'{rating} é múltiplo de 3')