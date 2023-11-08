def count_word_letters(chars: str) -> dict:
    available_letters = {}

    for char in chars:
        if char not in available_letters:
            available_letters[char] = 1
        else:
            available_letters[char] += 1

    return available_letters


def verify_word(word: str, available_letters: dict) -> bool:
    count_letters = {}

    for char in word:
        if char not in available_letters:
            return False

        if char not in count_letters:
            count_letters[char] = 1
        else:
            count_letters[char] += 1

            if count_letters[char] > available_letters[char]:
                return False

    return True


def count_words(words: "list[str]", chars: str) -> int:
    result = 0
    available_letters = count_word_letters(chars)

    for word in words:
        if verify_word(word, available_letters):
            result += len(word)

    return result


words = ["cat", "bt", "hat", "tree"]
chars = "atach"
# saída: 6


words = ["hello", "world", "students"]
chars = "welldonehoneyr"
# saída: 10

print(count_words(words, chars))