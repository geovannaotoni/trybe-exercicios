import sys
from node_and_linked_list import LinkedList


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return len(self.__data) == 0

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()
    
    def peek(self):
        return self.__data.get_element_at(0)


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return len(self.__data) == 0

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__data.get_element_at(0)
        for i in range(len(self.__data)):
            if self.__data.get_element_at(i).value < min_value.value:
                min_value = self.__data.get_element_at(i)
        return min_value.value


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.is_empty())
    print(content_stack.min_value())  # saída: 1
    # content_stack.push(-5)
    # # saída: -5
    # print(content_stack.min_value())