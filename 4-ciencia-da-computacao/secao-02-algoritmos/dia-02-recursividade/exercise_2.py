def count_even_recurs(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_recurs(n - 1)
    else:
        return count_even_recurs(n - 1)


print(count_even_recurs(5))