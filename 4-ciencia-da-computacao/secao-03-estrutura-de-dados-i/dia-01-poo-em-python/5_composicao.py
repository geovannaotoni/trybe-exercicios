class Pet():
    def __init__(self, name, species, age, owner):
        self.name = name
        self.species = species
        self.age = age
        self.owner = owner

    def __str__(self):
        return f"""
        - Nome: {self.name}
        - Espécie: {self.species}
        - Idade: {self.age}
        - Dono: {self.owner}
        """


thor = Pet('Thor', 'Gato', 5, 'Felps')
print(thor)
