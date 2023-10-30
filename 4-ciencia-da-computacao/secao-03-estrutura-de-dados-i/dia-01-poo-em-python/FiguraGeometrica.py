from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado: int) -> None:
        self.lado = lado

    def area(self):
        return self.lado * self.lado
    
    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura
    
    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio: int) -> None:
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio
    
    def perimetro(self):
        return 2 * PI * self.raio