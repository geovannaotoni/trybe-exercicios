const adicionaPropriedade = (objeto, propriedade, valor) => {
  objeto[propriedade] = valor
};

const pessoaEstudante = {};

adicionaPropriedade(pessoaEstudante, 'nome', 'Geovanna Otoni');
adicionaPropriedade(pessoaEstudante, 'email', 'geovannaotoni@gmail.com');
adicionaPropriedade(pessoaEstudante, 'linkedin', 'linkedin.com/geovannaotoni')
console.log(pessoaEstudante);