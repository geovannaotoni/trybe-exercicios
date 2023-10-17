def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


# def iterative_factorial(n):
#     fact = 1

#     for i in range(1, n + 1):
#         fact = fact * i

#     return fact

# iterative_factorial(5)