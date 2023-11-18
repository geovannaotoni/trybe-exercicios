package com.betrybe.helloworld;

public class ComandoWhile {

  public static void main(String[] args) {
    // Cria um array com os inscritos
    String[] inscritos = {"MARCOS", "ALINE", "LUCAS", "PATRICIA", "JOAO", "FELIPE", "LUCIA",
        "ANTONIO", "FERNANDA", "MARCELA", "VITOR", "BEATRIZ", "JORGE", "JULIA"};

// Determina o número máximo de vagas
    final int numeroVagas = 10;
// A palavra `final` determina que o valor dessa variável não é alterável, ele passa a ser uma constante!

// Criamos um vetor vazio com espaço igual ao número de vagas. Não se preocupe se não entender a sintaxe 100% — em breve entenderá!
    String[] vagas = new String[numeroVagas];

// Determinamos quantas vagas já foram preenchidas
    int vagaAtual = 0;

// Percorremos todos inscritos e adicionamos nas vagas até que o número total de vagas seja preenchido
    String inscrito = "Indefinido";
    String log;

    while (vagaAtual < numeroVagas) {
      inscrito = inscritos[vagaAtual];
      log = "Adicionando a inscrição: " + inscrito + " Na vaga: " + (vagaAtual + 1) + "\n";
      vagas[vagaAtual] = inscrito;
      vagaAtual += 1;
      System.out.println(log);
    }

  }
}
