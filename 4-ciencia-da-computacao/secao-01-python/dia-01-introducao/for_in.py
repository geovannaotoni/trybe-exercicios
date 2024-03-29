restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# lista comum
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)

# compreensao de listas
min_rating = 3.0
filtered_restaurants = [
    restaurant # [restaurant["name"]]
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)


names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']


quadrados = [x*x for x in range(11)]
print(quadrados)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]