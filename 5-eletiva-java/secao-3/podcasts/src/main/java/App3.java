import java.util.Scanner;

public class App3 {

  public static void main(String[] args) {
    Scanner entrada = new Scanner(System.in);
    System.out.println("Digite seu nome:");
    String nome = entrada.next();

    mostraNome(nome);
  }

  public static void mostraNome(String nome) {
    if (contemNumero(nome)) {
      throw new NomeInvalidoException();
    }

    System.out.printf("Boas-vindas, %s", nome);
  }

  public static boolean contemNumero(String palavra) {
    for (char c : palavra.toCharArray()) {
      if (Character.isDigit(c)) {
        return true;
      }
    }

    return false;
  }
}
