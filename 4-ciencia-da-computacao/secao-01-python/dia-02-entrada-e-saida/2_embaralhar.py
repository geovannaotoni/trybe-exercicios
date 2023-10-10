# Jogo da palavra embaralhada. A pessoa usuária tem que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3

def find_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_attempts():
    attempts = []
    for attempt in range(MAX_ATTEMPTS):
        attempt = input('Your answer: ')
        attempts.append(attempt)
    return attempts


def check_answer(attempts, secret_word):
    if secret_word in attempts:
        print("You won!")
    else:
        print("You lost!")


if __name__ == "__main__":
    secret_word, scrambled_word = find_secret_word(WORDS)
    print(f'Guess the word: {scrambled_word}')
    attempts = collect_attempts()
    check_answer(attempts, secret_word)