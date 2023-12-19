import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Principal {

  public static void main(String[] args) {
    List<String> estudantes = Arrays.asList("João","Maria","Pedro","Rosa");
    estudantes.set(0,"Joana");
    System.out.println(estudantes);


    Stream<String> fluxoDeStrings = Stream.of("Maria","João","José");
    System.out.println(fluxoDeStrings);
  }

  class Student {
    private String matricula;
    private String nome;

    public boolean equals(Object obj) {
      if (this == obj)
        return true;
      if (obj == null)
        return false;
      if (getClass() != obj.getClass())
        return false;
      Student other = (Student) obj;
      if (matricula == null) {
        if (other.matricula != null)
          return false;
      } else if (!matricula.equals(other.matricula))
        return false;
      return true;
    }
  }
}
