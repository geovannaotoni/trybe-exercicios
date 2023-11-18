package com.betrybe.helloworld;

public class ContaBancaria {

  void mostraMensagem() {
    System.out.println("Conta bancária acessada.");
  }

  void depositar(double valor) {
    System.out.println("Valor depositado: ");
    System.out.println(valor);
  }

  double converteMoeda(float total, float cambio) {
    return total * cambio;
  }
}