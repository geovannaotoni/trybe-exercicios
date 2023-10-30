from dataclasses import dataclass


class Customer:
    def __init__(self, name, email, address):
        self.name = name
        self.__email = email
        self.address = address

    def __str__(self):
        return f'Customer: {self.name}, {self.__email}, {self.address}'
    
    @property
    def email(self):
        return self.__email.lower()
    
    @email.setter
    def email(self, value):
        if '@gmail.com' not in value:
            raise ValueError('Invalid email')
        self.__email = value


cliente = Customer('João', 'joao@email.com', 'RJ')
print(cliente)
print(vars(cliente))
cliente.email = 'joão@gmail.com'
print(cliente)


@dataclass
class Product:
    name: str
    price: float


produto = Product('Arroz', 5.99)
print(produto)


class ShoppingCart:
    def __init__(self) -> None:
        self.itens = []

    def add_items(self, item: "tuple[Product, int]"):
        self.itens.append(item)

    def total_price(self):
        return sum(product.price * quantity for product, quantity in self.itens)


carrinho = ShoppingCart()
carrinho.add_items((produto, 2))
print(carrinho.itens)
print(carrinho.total_price())