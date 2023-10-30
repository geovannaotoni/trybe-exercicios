from stack import Stack


def reverse_word(stack):
    char = ')'
    reversed_word = []
    while char != '(':
        char = stack.pop()
        if char != '(':
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(string):
    stack = Stack()
    for char in string:
        if char != ')':
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_string = []
    while not stack.is_empty():
        reversed_string.append(stack.pop())

    return ''.join(reversed(reversed_string))


print(reverse_letters('teste(lagel)'))
print(reverse_letters('(abcd)'))
print(reverse_letters('(u(love)i)'))
print(reverse_letters('(ed(et(oc))el)'))
print(reverse_letters('a(bcdefghijkl(mno)p)q'))