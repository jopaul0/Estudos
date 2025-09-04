# Atividade de Dupla em JAVA

* Este é um programa em Java que centraliza 8 exercícios diferentes. O usuário pode escolher qual exercício executar digitando um número de 1 a 8 em uma caixa de diálogo. O programa utiliza a biblioteca javax.swing.JOptionPane para criar interfaces gráficas simples para a entrada e saída de dados.

## Código Fonte Completo

```bash
package atividade.de.dupla;
import javax.swing.JOptionPane;

public class AtividadeDeDupla {

    public static void main(String[] args) {
        String exercicio = JOptionPane.showInputDialog("Digite um número referente ao exercício (De 1 a 8):");
        int Exercicio;

        try {
            Exercicio = Integer.parseInt(exercicio);
            switch (Exercicio) {
                case 1:
                    ex1();
                    break;
                case 2:
                    ex2();
                    break;
                case 3:
                    ex3();
                    break;
                case 4:
                    ex4();
                    break;
                case 5:
                    ex5();
                    break;
                case 6:
                    ex6();
                    break;
                case 7:
                    ex7();
                    break;
                case 8:
                    ex8();
                    break;
                default:
                    System.out.println("Está fora dos limites");
                    break;
            }
        } catch (NumberFormatException e) {
            System.out.println("Entrada inválida! Digite um número de 1 a 8.");
        }
    }

    public static void ex1() {
        for (int c = 1; c <= 5; c++) {
            System.out.println(c);
        }
    }

    public static void ex2() {
        int c = 1;
        while (c <= 5) {
            System.out.println(c);
            c++;
        }
    }

    public static void ex3() {
        int c = 1;

        do {
            System.out.println(c);
            c++;
        } while (c <= 5);
    }

    public static void ex4() {
        for (int c = 1; c <= 15; c++) {
            if (c % 2 == 0) {
                System.out.println(c);
            }
        }
    }

    public static void ex5() {
        int sum = 0;
        for (int c = 0; c <= 10; c++) {
            sum += c;
        }
        System.out.println(sum);
    }

    public static void ex6() {
        int sum = 0;
        for (int c = 0; c <= 100; c++) {
            if (c % 2 == 0) {
                continue;
            }
            sum += c;
        }
        float media = sum / 100; // Atenção: a lógica da média aqui pode não ser a esperada.
        System.out.println(media);
    }

    public static void ex7() {
        String nome = JOptionPane.showInputDialog("Digite um nome:");
        StringBuilder sb = new StringBuilder();
        String result = nome.equals("") ? "Digita direito, seu animal!" : nome.equals("Doente de Amor") ? "Procurei remédio na vida noturna" : nome;
        sb.append(result);
        JOptionPane.showMessageDialog(null, sb.toString());
    }

    public static void ex8() {
        String valor = JOptionPane.showInputDialog("Digite um número:");
        StringBuilder sb = new StringBuilder();
        int valorInt = Integer.parseInt(valor);
        String result = valorInt % 2 == 0 ? "Par" : "Impar";
        sb.append(result);
        JOptionPane.showMessageDialog(null, sb.toString());
    }
}
```

## Explicação dos Métodos (Exercícios)
O método main é o ponto de entrada do programa. Ele solicita ao usuário que escolha um exercício e, em seguida, chama o método correspondente usando uma estrutura switch-case.

### ex1(): Contador com for
* Usa um laço de repetição for para imprimir no console os números de 1 a 5.

### ex2(): Contador com while
* Usa um laço de repetição while para fazer a mesma coisa que o ex1, imprimindo os números de 1 a 5 no console.

### ex3(): Contador com do-while
* Usa um laço de repetição do-while para, novamente, imprimir os números de 1 a 5 no console. A diferença é que o do-while garante que o bloco de código execute pelo menos uma vez antes de verificar a condição.

### ex4(): Números Pares
* Usa um laço for para percorrer os números de 1 a 15 e uma estrutura if para verificar se o número é par (c % 2 == 0). Se for, o número é impresso.

### ex5(): Soma dos Números
* Calcula e imprime a soma de todos os números de 0 a 10. O resultado é 55.

### ex6(): Média dos Ímpares (com detalhe)
* Soma todos os números ímpares de 0 a 100.

<strong>Atenção:</strong> A linha float media = sum / 100; calcula a média dividindo a soma dos ímpares pelo total de números (100), o que não resulta na média correta dos números ímpares. O correto seria dividir pela quantidade de números ímpares (50). Além disso, a divisão é feita entre inteiros antes de ser atribuída a um float, o que pode causar perda de precisão.

### ex7(): Manipulação de Texto
* Pede ao usuário para digitar um nome e exibe uma mensagem. Ele usa um operador ternário para verificar a entrada:

* Se o nome for vazio, exibe uma mensagem de erro.

* Se o nome for "Doente de Amor", exibe "Procurei remédio na vida noturna".

* Caso contrário, exibe o nome digitado.

### ex8(): Par ou Ímpar
* Solicita um número ao usuário, converte para inteiro e usa o operador ternário com o operador de módulo (%) para verificar se o número é par ou ímpar, exibindo o resultado em uma caixa de diálogo.