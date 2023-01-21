let peca = ('Rainha').toLowerCase();


switch (peca) {
  case 'peao':
    console.log('Peão: nas diagonais para frente, 1 casa. No primeiro movimento podem ser 2 casas');
    break;
  case 'bispo':
    console.log('Bispo: nas diagonais quantas casas quiser');
    break;
  case 'cavalo':
    console.log('Cavalo: em L, podendo saltar sobre outra peça')
    break;
  case 'torre':
    console.log('Torre: na horizontal ou vertical quantas casas quiser')
    break;
  case 'rainha':
    console.log('Rainha: na horizontal, vertical ou diagonal quantas casas quiser')
    break;
  case 'rei':
    console.log('Rei: na horizontal, vertical ou diagonal 1 casa')
    break;
  default:
    console.log('peça inválida')
    break;
}
