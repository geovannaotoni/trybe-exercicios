package com.betrybe.helloworld;

public class ClassesWrapper {

  public static void main(String[] args) {
    Integer valor = 7;  // autoboxing (autoempacotamento)
    int outroValor = valor; // unboxing (desempacotamento)

    int valor2 = 42;
    System.out.println(
        Integer.toBinaryString(valor2)
    );
  }
}
