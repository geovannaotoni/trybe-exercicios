def intersection(listA, listB):
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    result = []
    for item in listB:
        if item in seen_in_a:
            result.append(item)
    return result


listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]

print(intersection(listaA, listaB))
