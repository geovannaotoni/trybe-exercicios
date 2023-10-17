def contains_duplicate(numbers):
    numbers.sort()  # O(n log n)
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):  # O(n)
            return True
        previous_number = number

    return False