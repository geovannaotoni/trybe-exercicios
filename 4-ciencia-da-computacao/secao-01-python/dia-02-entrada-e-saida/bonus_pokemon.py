import json
import random


def pokemons_list(file):
    content = json.load(file)["results"]
    return [pokemon['name'] for pokemon in content]


def start_game(list_of_pokemons):
    secret_pokemon = random.choice(list_of_pokemons)
    chances = len(secret_pokemon)
    attempt_number = 0
    clue = ''
    for index in range(chances):
        attempt = input('Your guess: ')
        if check_answer(attempt, secret_pokemon):
            return print('You won!')
        elif index < chances:
            clue += secret_pokemon[index]
            print(clue)
            attempt_number += 1
        else:
            print('You lost!')


def check_answer(attempt, secret_pokemon):
    if attempt == secret_pokemon:
        return True
    else:
        return False


if __name__ == "__main__":
    with open("pokemon.json") as file:
        pokemons = pokemons_list(file)
    start_game(pokemons)


# outra solução:
# import json
# import random


# def shot(pokemon_name):
#     wrong_shot = True
#     num_of_shots = 0
#     while (wrong_shot):
#         num_of_shots += 1
#         shot = input("Quem é esse pokemon? ")
#         if (shot == pokemon_name):
#             print("Você acertou! Parabéns!")
#             break
#         elif num_of_shots == len(pokemon_name):
#             print("Você errou!")
#             break
#         else:
#             print("Dica: ", end="")
#             for i in range(0, num_of_shots):
#                 print(pokemon_name[i], end="")
#             print("")


# if __name__ == "__main__":
#     with open("pokemons.json") as file:
#         pokemons = json.load(file)["results"]
#         pokemon = random.choice(pokemons)
#         pokemon_name = pokemon["name"]

#     shot(pokemon_name)