# ex 1
# double = {i: i*2 for i in range(3, 21)}

double = {}
for i in range(3, 21):
    double[i] = i*2

print(double)


# ex 2
str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

# str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}

count = {}

for c in str:
    if c in count:
        count[c] += 1
    else:
        count[c] = 1

print(count)


# ex 3
for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3


print(double)