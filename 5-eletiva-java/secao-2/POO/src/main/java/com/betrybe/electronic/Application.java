package com.betrybe.electronic;

public class Application {
  public static void main(String[] args) {
//    System.out.println("Iniciando sistema...");

    Television television = new Television("Phillips","LCD", 32);

    television.turnOn();
    television.turnOff();

    System.out.println(television.info());
//    proibido porque volume é um atributo privado
//    television.volume = 100;
//    television.volume = -1;

    System.out.print("A televisão está ligada? ");
    System.out.println(television.isOn());

    System.out.print("O volume atual é: ");
    System.out.println(television.getVolume());

    System.out.println("Modelo antigo:");
    System.out.println(television.getModel());

    television.setModel("LCD-Ultra");

    System.out.println("Modelo novo:");
    System.out.println(television.getModel());

    double sizeCm = Television.convertToCentimeters(32);
    System.out.println("O tamanho em centímetros é: " + sizeCm);

//    System.out.println("Finalizando sistema...");
  }
}
