def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)  # O(n)
    return [candy + extra_candies >= max_candies for candy in candies]  # O(n)
# complexidade de tempo = O(n) + O(n) = O(2n) = O(n)
# complexidade de espaço também é O(n)


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))