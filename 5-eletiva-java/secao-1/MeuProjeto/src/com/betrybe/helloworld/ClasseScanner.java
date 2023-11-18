package com.betrybe.helloworld;

import java.util.Scanner;

class ClasseScanner {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.print("Qual o seu nome: ");
    String nome = scanner.next();
    System.out.println("Boas-vindas, " + nome + "!");
    scanner.close();

  }

}