def screening(text):
    screen = {}

    for word in text:
        first_char = word[0].lower()

        if first_char in screen:
            screen[first_char].append(word)
        else:
            screen[first_char] = [word]

    return screen


text = ['Ana', 'ama', 'Joao']
print(screening(text))

for key, value in screening(text).items():
    print(f'{key}: {value}')