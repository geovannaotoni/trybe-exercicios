import json
import csv


def recuperar_books(file):
    return json.load(file)


def contar_livros_por_cat(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calcular_porc_por_cat(categories, total):
    return [
        [category, count / total]
        for category, count in categories.items()
    ]


def escrever_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = recuperar_books(file)

    categories = contar_livros_por_cat(books)
    total = len(books)
    porcentagem = calcular_porc_por_cat(categories, total)

    with open("books2.csv", "w") as file:
        escrever_csv(file, ["Categoria", "Porcentagem"], porcentagem)