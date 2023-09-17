// type Personagem = {
//   nome: string;
//   nivel: number;
//   classe: string;
// };

// function mostrarPersonagem(personagem: Personagem) {
//   console.log(`Nome: ${personagem.nome}, Nível: ${personagem.nivel}, Classe: ${personagem.classe}`);
// }

// const meuPersonagem: Personagem = {
//   nome: 'Aragorn',
//   nivel: 10,
//   classe: 'Guerreiro'
// };

// mostrarPersonagem(meuPersonagem); // "Nome: Aragorn, Nível: 10, Classe: Guerreiro"

interface Personagem {
  nome: string;
  nivel: number;
  classe: string;
  atacar(): void;
  defender(): void;
}

class Guerreiro implements Personagem {
  nome = 'Kratos';
  nivel = 99;
  classe = 'Guerreiro da Justiça';
  
  atacar() {
    console.log('Kratos usou a Lâmina do Caos! Inimigo derrotado!');
  }
  
  defender() {
    console.log('Kratos levantou o escudo e bloqueou o ataque!');
  }
}

const meuGuerreiro: Personagem = new Guerreiro();
meuGuerreiro.atacar(); // "Kratos usou a Lâmina do Caos! Inimigo derrotado!"
meuGuerreiro.defender(); // "Kratos levantou o escudo e bloqueou o ataque!"