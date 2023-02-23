const { compareTrue } = require('../src/compareTrue');

describe('Implemente os casos de teste para a função compareTrue', () => {
    test('Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true', () => {
        expect(compareTrue(false, true)).toBe(false);
    });
    test('Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false', () => {
        expect(compareTrue(false, false)).toBe(false);
    });
    test('Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true', () => {
        expect(compareTrue(true, true)).toBe(true);
    });
});