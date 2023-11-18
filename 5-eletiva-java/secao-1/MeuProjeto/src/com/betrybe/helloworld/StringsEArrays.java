package com.betrybe.helloworld;

public class StringsEArrays {

  public static void main(String[] args) {
    String frase = "Estou aprendendo Java!";
    String numeros = "09890";
    String caractere = "a";

    int[] arrayDeInteiros = new int[9];
    arrayDeInteiros[0] = 40;
    arrayDeInteiros[1] = 55;
    arrayDeInteiros[2] = 63;
    arrayDeInteiros[3] = 17;
    arrayDeInteiros[4] = 22;
    arrayDeInteiros[5] = 68;
    arrayDeInteiros[6] = 89;
    arrayDeInteiros[7] = 97;
    arrayDeInteiros[8] = 89;

    System.out.println(arrayDeInteiros[8]); // 89
    System.out.println(arrayDeInteiros[2]); // 63

//    arrayDeInteiros[9] = 89; // Estoura a pilha porque tentamos inserir um valor em um espaço inexistente do array

    int[] arrayDeInteiros2 = {1, 2, 3, 4, 5, 6, 767, 878, 8, 8, 9, 9, 9};
    int[][] matriz = new int[2][10]; // inicializamos uma matriz, bem parecido com uma tabela de excel com coluna e linha
    String[] arrayDeString = new String[10];

    matriz[0][0] = 10;
    matriz[1][0] = 20;

    arrayDeString[0] = "Na Trybe";
    arrayDeString[1] = " eu aprendo Java!";

    System.out.println(arrayDeInteiros2[3]); // 4
    System.out.println(matriz[0][0]); // 10
    System.out.println(matriz[1][5]); // 0
    System.out.println(arrayDeString[0] + arrayDeString[1]); // Na Trybe eu aprendo Java!
    System.out.println(arrayDeString[2]); // null
    System.out.println(arrayDeString.length); // 10
  }
}
