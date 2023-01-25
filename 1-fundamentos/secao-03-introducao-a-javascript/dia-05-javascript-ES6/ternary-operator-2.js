//Duas saidas (um valor caso condição verdadeira e um valor caso falsa) (um if e um else): operador ternário
const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );

  console.log(checkTernary(18))

//Se tivermos apenas uma condição do if, sem o else: utiliza o &&
const verificaIdade = (idade) => (idade >= 18 && 'Você pode ter a carteira de motorista')

console.log(verificaIdade(22));