class Conjunto:
    def __init__(self) -> None:
        self.set = [False for _ in range(1001)]
        self.last_element = 0

    def add(self, item):
        if item > self.last_element:
            self.last_element = item
        self.set[item] = True

    def __str__(self) -> str:
        string = '{'

        for index, item in enumerate(self.set):
            if item and index == self.last_element:
                string += f'{index}'
            elif item:
                string += f'{index}, '

        string += '}'
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        union_conj = Conjunto()
        for i in range(1001):
            if self.set[i] or conjunto_b.set[i]:
                union_conj.add(i)
        return union_conj
    
    def intersection(self, conjunto_b):
        intersection_conj = Conjunto()
        for i in range(1001):
            if self.set[i] and conjunto_b.set[i]:
                intersection_conj.add(i)
        return intersection_conj
    
    def difference(self, conjunto_b):
        difference_conj = Conjunto()
        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                difference_conj.add(i)
        return difference_conj
    
    def issubset(self, conjunto_b):
        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                return False
        return True
    
    def issuperset(self, conjunto_b):
        for i in range(1001):
            if conjunto_b.set[i] and not self.set[i]:
                return False
        return True


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

    conj5 = Conjunto()
    for i in range(1, 11):
        conj5.add(i)

    conj6 = Conjunto()
    for i in range(10, 21):
        conj6.add(i)

    conj7 = conj5.union(conj6)
    print(conj7)

    conj8 = conj5.intersection(conj6)
    print(conj8)

# difference; issubset; issuperset
    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj3.issubset(conj4))