def invert_list(numbers):
    if len(numbers) == 1:
        return numbers
    return [numbers[-1]] + invert_list(numbers[:-1])


print(invert_list([1, 2, 3, 4, 5]))