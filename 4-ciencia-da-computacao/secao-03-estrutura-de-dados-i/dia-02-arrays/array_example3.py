class Example:
    def __init__(self, data) -> None:
        self.data = data

    def update(self, index, value):
        self.data[index] = value


exemplo = Example([1, 2, 3, 4, 5])
exemplo.update(2, 10)
print(exemplo.data)  # [1, 2, 10, 4, 5]