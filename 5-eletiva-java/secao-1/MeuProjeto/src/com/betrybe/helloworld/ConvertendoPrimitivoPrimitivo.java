package com.betrybe.helloworld;

public class ConvertendoPrimitivoPrimitivo {

  public static void main(String[] args) {
    short numeroInteiroPequeno = 10;
    int numeroInteiro = numeroInteiroPequeno;
    long numeroInteiroBemGrande = numeroInteiro;
    float numeroDePontoFlutuante = numeroInteiro;
    double numeroDePontoFlutuanteDuasVezesMaisPreciso = numeroInteiro;

    double numDePontoFlutuante = 40_000_000.49d; // Valor bem grande.
    int numInteiro = (int) numDePontoFlutuante; // O valor à direita do ponto será perdido.
    short numInteiroPequeno = (short) numInteiro; // O tipo short armazena valores entre -32.768 e 32.767, muita coisa será perdida.
    System.out.println((numInteiroPequeno));
  }
}
