# Herança

A Herança é um pilar da Orientação a Objetos que permite a uma classe (subclasse/filha) adquirir as características (atributos e métodos) de outra classe (superclasse/mãe). Utiliza a palavra-chave extends. Ela promove a reutilização de código e estabelece uma relação de "é um tipo de" (Ex: um Cachorro é um tipo de Animal). A herança suporta apenas uma superclasse, mas permite a herança de interfaces.

## Exercícios

### Questão 1

<i>
Programar as classes Pessoa e Funcionário, conforme o diagrama de classes a seguir.

OBS: - O método aumentar_Salario deve retornar o salário com o acrescimento de acordo com o percentual. Exemplo de percentual 10% -> 0.10

- Criar uma classe Principal também. 
</i>

#### Classe Pessoa

```bash

package app;

class Pessoa {

    protected String rg;
    protected String nome;

    public Pessoa (String rg, String nome){
        this.rg = rg;
        this.nome = nome;
    }

    public void setRg(String rg){this.rg = rg;}
    public String getRg(){return this.rg;}

    public void setNome(String nome){this.nome = nome;}
    public String getNome(){return this.nome;}
}


```

#### Classe Funcionário

```bash

package app;

class Funcionario extends Pessoa{
    private double salario;

    public Funcionario (String rg, String nome, double salario){
        super(rg, nome);
        this.salario = salario;
    }

    public double getSalario(){return this.salario}
    public void setSalario(double salario){this.salario = salario}

    public double aumentar_salario(double percentual){
        this.salario = (this.salario * percentual) + this.salario;
        return this.salario;
    }

}

```

#### Classe Principal

```bash

package app;

public class Principal {
    public static void main(String[] args) {
        System.out.println("--- Teste de Herança: Pessoa e Funcionário ---");
        
        Funcionario f1 = new Funcionario("10.123.456-7", "Maria de Fátima", 3000.00);
        
        System.out.println("\n--- Dados Iniciais do Funcionário ---");
        System.out.println("Nome: " + f1.getNome());
        System.out.println("RG: " + f1.getRg());
        System.out.println("Salário Atual: R$ " + String.format("%.2f", f1.getSalario()));
        
        double percentualAumento = 0.15;
        double novoSalario = f1.aumentar_salario(percentualAumento);
        
        System.out.println("\n--- Após Aumento de " + (percentualAumento * 100) + "% ---");
        System.out.println("Salário Antigo: R$ 3000.00");
        System.out.println("Novo Salário (Retorno do método): R$ " + String.format("%.2f", novoSalario));
        
        System.out.println("Salário Armazenado no Objeto: R$ " + String.format("%.2f", f1.getSalario()));
    }
}

```

---

### Questão 2

<i>
a) Criar as classes conforme diagrama de classes a seguir. Lembre –se de criar os métodos getters e setters e também o constructor para cada classe. A classe Animal contém atributos protect e as classes Peixe e Cachorro atributos private. As classes Peixe e Cachorro herdam da classe Animal. Implemente Herança!

b) Crie uma classe Zoo que será a classe principal. Nessa classe crie dois objetos peixe e dois objetos cachorro e imprima os seus atributos . 
</i>


#### Classe Animal

```bash

package app;

class Animal{
    protected String nome;
    protected double peso;

    public Animal(){}
    public Animal(String nome, double peso){
        this.nome = nome;
        this.peso = peso;
    }

    public void setNome(String nome){this.nome = nome;}
    public String getNome(){return this.nome;}

    public void setPeso(double peso){this.peso = peso;}
    public double getPeso(){return this.peso;}


    @Override
    public String toString() {
        return "Nome: " + this.nome + ", Peso: " + this.peso + "kg";
    }
}

```

#### Classe Peixe

```bash

package app;

class Peixe extends Animal{
    private String SpaHabitat;

    public Peixe(){}
    public Peixe(String nome, double peso, String SpaHabitat){
        super(nome, peso);
        this.SpaHabitat = SpaHabitat;
    }

    public void setSpaHabitat(String SpaHabitat){this.SpaHabitat = SpaHabitat;}
    public String getSpaHabitat(){return SpaHabitat;}

    @Override
    public String toString() {
        return "Peixe -> [" + super.toString() + ", Habitat: " + this.SpaHabitat + "]";
    }
}

```

#### Classe Cachorro

```bash

package app;

class Cachorro extends Animal{
    private String raca;

    public Cachorro(){}
    public Cachorro(String nome, double peso, String raca){
        super(nome, peso);
        this.raca = raca;
    }

    public void setRaca(String raca){this.raca = raca;}
    public String getRaca(){return this.raca;}

    @Override
    public String toString() {
        return "Cachorro -> [" + super.toString() + ", Raça: " + this.raca + "]";
    }
}

```

#### Classe Zoo

```bash

package app;

class Zoo{

    public static void main(String[] args){
        Peixe glub = new Peixe("Glub", 2, "Oceano");
        Cachorro bob = new Cachorro("Bob", 5, "Lulu");

        System.out.println("--- Animais do Zoo ---");
        
        System.out.println(glub);
        System.out.println(bob);

        System.out.println("----------------------");
        
        System.out.println("Detalhe de Bob: Nome (" + bob.getNome() + "), Peso (" + bob.getPeso() + "kg), Raça (" + bob.getRaca() + ")");
    }

}

```

---

### Questão 3

<i>
a) Crias as classes conforme diagrama de classes a seguir. Lembre –se de criar os métodos getters e setters e també o constructor para cada classe. A classe Funcionário contém atributos protect e as classe Gerente private. A classe Gerente herda da classe Funcionário. Implemente Herança! O método autentica deve retornar true se a senha for igual ao parametro informado e false caso controlário.

b) Crie uma classe Empresa que será a classe principal. Nessa classe crie dois objetos gerente , imprima os seus atributos e faça a chamada do método autentica .
</i>

#### Classe Funcionario

```bash

package app;

class Funcionario{
    protected String nome;
    protected String cpf;
    protected double salario;

    public Funcionario(){}
    public Funcionario(String nome, String cpf, double salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    public void setNome(String nome){this.nome = nome;}
    public String getNome(){return this.nome;}

    public void setCpf(String cpf){this.cpf = cpf;}
    public String getCpf(){return this.cpf;}

    public void setSalario(double salario){this.salario = salario;}
    public double getSalario(){return this.salario;}

    @Override
    public String toString() {
        return "Nome: " + this.nome + ", CPF: " + this.cpf + ", Salario: R$" + this.salario;
    }
}

```

#### Classe Gerente

```bash

package app;

class Gerente extends Funcionario{
    private int senha;

    public Gerente(String nome, String cpf, double salario, int senha){
        super(nome, cpf, salario);
        this.senha = senha;
    }
    
    public void setSenha(int senha){this.senha = senha;}
    public int getSenha(){return this.senha;}

    public boolean autentica(int senha){
        return senha == this.senha; 
    }

    @Override
    public String toString() {
        return "Gerente -> [" + super.toString() + ", senha: " + this.senha + "]";
    }

}

```

#### Classe Empresa

```bash

package app;

class Empresa{
    
    public static void main(String[] args){
        
        Gerente g1 = new Gerente("Ana Silva", "123.456.789-00", 5500.00, 1234);
        Gerente g2 = new Gerente("Bruno Costa", "987.654.321-11", 7200.50, 9999);
        
        System.out.println("--- Dados dos Gerentes ---");

        System.out.println("Gerente 1:");
        System.out.println(g1);
        System.out.println();
        
        System.out.println("Gerente 2:");
        System.out.println(g2);
        System.out.println();
        
        int senhaTentativa1 = 1234;
        boolean authResult1 = g1.autentica(senhaTentativa1);
        System.out.println("Autenticando Ana com a senha " + senhaTentativa1 + ": " + (authResult1 ? "Sucesso" : "Falha"));

        int senhaTentativa2 = 1111;
        boolean authResult2 = g2.autentica(senhaTentativa2);
        System.out.println("Autenticando Bruno com a senha " + senhaTentativa2 + ": " + (authResult2 ? "Sucesso" : "Falha"));
        
        int senhaTentativa3 = 9999;
        boolean authResult3 = g2.autentica(senhaTentativa3);
        System.out.println("Autenticando Bruno com a senha " + senhaTentativa3 + ": " + (authResult3 ? "Sucesso" : "Falha"));
    }

}

```