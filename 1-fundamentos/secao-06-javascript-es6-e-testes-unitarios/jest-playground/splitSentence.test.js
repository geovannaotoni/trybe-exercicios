const { splitSentence } = require('../src/splitSentence');

describe('Implemente os casos de teste para a função splitSetence', () => {
    test('função `splitSentence` deve retornar o valor `[`go`, `Trybe`]` quando receber como parâmetro a string `go Trybe`', () => {
        expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
    })
    test('A função `splitSentence` deve retornar o valor `[`vamo`, `que`, `vamo`]` quando receber como parâmetro a string `vamo que vamo`', () => {
        expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
    });
    test('A função `splitSentence` deve retornar o valor [`foguete`] quando receber como parâmetro a string `foguete`', () => {
        expect(splitSentence('foguete')).toEqual(['foguete']);
    });
});