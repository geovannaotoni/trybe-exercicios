# ex 1 - blefe
# A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor


clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}


def nota_partida(pessoa1, pessoa2):
    return max(pessoa1.difference(pessoa2))


def nota_redutor(pessoa1, pessoa2):
    return min(pessoa1.difference(pessoa2))


def pontuacao(pessoa1, pessoa2):
    set_pessoa1 = set(pessoa1)
    set_pessoa2 = set(pessoa2)

    return nota_partida(set_pessoa1, set_pessoa2) - nota_redutor(set_pessoa1, set_pessoa2)


def partida_blefe(jogadas):
    jogadores = list(jogadas.keys())

    pontuacao_jogador1 = pontuacao(jogadas[jogadores[0]], jogadas[jogadores[1]])
    pontuacao_jogador2 = pontuacao(jogadas[jogadores[1]], jogadas[jogadores[0]])

    if pontuacao_jogador1 > pontuacao_jogador2:
        return (f'Quem ganhou: {jogadores[0]}')
    elif pontuacao_jogador1 < pontuacao_jogador2:
        return (f'Quem ganhou: {jogadores[1]}')
    else:
        return 'Empate'


print(partida_blefe(entrada))
