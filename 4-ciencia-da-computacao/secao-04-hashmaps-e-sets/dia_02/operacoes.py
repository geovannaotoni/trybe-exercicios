set_a = {}
print(type(set_a))
set_b = set()
print(type(set_b))

set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(set_a == set_b)
print({1, 2, 3} > {1})
print({1, 2, 3} > {4, 5})


def get_repeated(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num in seen_before:
            repeated.add(num)
        else:
            seen_before.add(num)

    return repeated


print(get_repeated([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3]))


def get_seven(rolls):
    seen_before = set()
    lucky_rolls = []

    for roll in rolls:
        if 7 - roll in seen_before:
            lucky_rolls.append((7 - roll, roll))
            seen_before.discard(7 - roll)
        else:
            seen_before.add(roll)
    return lucky_rolls


rolls = [5, 2, 1, 3, 2, 6, 1, 4, 2, 6, 3, 1]

print(get_seven(rolls))