let custoProduto = 10;
let valorVenda = 20;

if (custoProduto >= 0 && valorVenda >= 0) {
  let impostoCusto = 0.2*custoProduto;
  let custoTotal = custoProduto + impostoCusto
  let lucro = (valorVenda - custoTotal)*1000;
  console.log(lucro);
} else {
  console.log('Erro, números inválidos')
}

