package com.betrybe.helloworld;

public class TiposPrimitivos {

  public static void main(String[] args) {
    byte b1 = 9;
    System.out.println(b1);

    short num = 300;
    short formatadaComUnderscore = 20_000; // variável
    System.out.println(num);
    System.out.println(formatadaComUnderscore); // 20000

    int numeroInteiro = 10;
    int aint = 10, bint = 20, soma; // inicialização de variáveis inline
    soma = aint + bint; // atribuição da soma da variável a + b para a variável soma
    System.out.println(numeroInteiro); // 10
    System.out.println(soma); // 30

    long numA = 102040;
    long numB = 102030405060L; // adicionado L no final para indicar que estamos inserindo um valor do tipo long (maior que o int)
    System.out.println(numA);
    System.out.println(numB);

    float numC = -101.23f;
    float numD = 2.356f;
    System.out.println(numC + numD); // -98.874

    double a = 2.356; // double inicializado naturalmente
    double b = 1.409F; // double aceitando número float
    double c = 12930L; // double aceitando número long
    System.out.println(b); // 1.409000039100647
    System.out.println(c); // 12930.0

    boolean isBoolean = true; // outros exemplos: isGreaterThan, isFlexible, isStarted
    boolean ehNumero = false; // outros exemplos: ehMaiorDeIdade, ehCedo, ehValido

    char letraA = 'a';
    char letraAMaiuscula = 'A';
    System.out.println(letraA); // a
    System.out.println(letraAMaiuscula); // A
    System.out.println(letraA == letraAMaiuscula); // false
  }
}
