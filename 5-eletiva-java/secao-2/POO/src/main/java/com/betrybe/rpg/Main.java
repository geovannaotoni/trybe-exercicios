package com.betrybe.rpg;

public class Main {

  public static void main(String[] args) {
//    Warrior warrior = new Warrior();
//    warrior.setName("Aragorn");
//    warrior.setRace("Humano");
//    warrior.setWeapon("Espada");
//    System.out.println(warrior.getName() + " é da raça " + warrior.getRace() + " e utiliza " + warrior.getWeapon());


//    PlayableCharacter player = new Warrior();
//    addInformation(player);
//
//    Warrior warrior = new Warrior();
//    warrior.move();
//    warrior.attack();
//
//    Mage mage = new Mage();
//    mage.move();
//    mage.attack();

    Warrior warrior2 = new Warrior();
    Cleric cleric = new Cleric();

    moveAndAttack(warrior2);
    moveAndAttack(cleric);

    cleric.heal();                       // Cura básica
    cleric.heal("Poção de Vida");        // Cura com a Poção de Vida
    cleric.heal("Feitiço de Luz", 7);    // Cura com Feitiço de Luz e poder 7
  }
  public static void addInformation(PlayableCharacter player) {
    player.setName("Aragorn");
    player.setRace("Humano");

    // esta linha vai gerar erro se for descomentada
    // player.setWeapon("Espada");
  }

  public static void moveAndAttack(PlayableCharacter player) {
    player.move();
    player.attack();
  }
}
