const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// console.slog(battleMembers);

// Função que retorne o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// gerar número inteiro aleatório entre dois valores incluindo tanto o mínimo quanto o máximo
// Math.floor(Math.random() * (max - min + 1)) + min;
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const dragonAttack = (object) => 15 + Math.floor(Math.random()*(object.strength - 15 + 1));

// console.log(dragonAttack(dragon));

// função que retorne o dano causado pelo warrior. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAtack = (object) => object.strength + Math.floor(Math.random() * ((object.strength*object.weaponDmg) - object.strength + 1));
// console.log(warriorAtack(warrior));

// função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
const mageAttack = (object) => {
  const mageMana = object.mana;
  if (mageMana > 15) {
    return {
      dano: (object.intelligence + Math.floor(Math.random() * ((object.intelligence * 2) - object.intelligence + 1))),
      mana: 15,
    }
  }
  return {
    dano: 'Não possui mana suficiente',
    mana: 0,
  }
};

// console.log(mageAttack(mage));

const gameActions = {
  warriorTurn: (warriorAtack) => {
    const damageOfWarrior = warriorAtack(warrior);
    dragon.healthPoints -= damageOfWarrior;
    warrior.damage = damageOfWarrior;
  },
  mageTurn: (mageAttack) => {
    const mageStats = mageAttack(mage);
    dragon.healthPoints -= mageStats.dano;
    mage.damage = mageStats.dano;
    mage.mana -= mageStats.mana;
  },
  dragonTurn: (dragonAttack) => {
    const damageOfDragon = dragonAttack(dragon);
    mage.healthPoints -= damageOfDragon;
    warrior.healthPoints -= damageOfDragon;
    dragon.damage = damageOfDragon;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorTurn(warriorAtack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
