# Lista de Linguagem de Programação

## 📘 Conceitos de Orientação a Objetos

### Classes

Classe é um molde que define o comportamento (métodos) e as características (atributos) de um objeto.

<strong>Exemplo:</strong>
```bash

public class Carro {
    String modelo;
    String cor;
}

```

### Objetos

Um objeto é uma instância de uma classe. Ele representa um elemento do mundo real.

<strong>Exemplo:</strong>
```bash

Carro meuCarro = new Carro();
meuCarro.modelo = "Fusca";
meuCarro.cor = "Azul";

```

### Atributos

São as variáveis ou propriedades que definem o estado de um objeto.

<strong>Exemplo:</strong>
```bash

System.out.println(meuCarro.modelo);

```

### Métodos

São funções dentro de uma classe que representam comportamentos que os objetos daquela classe podem executar.

<strong>Exemplo:</strong>
```bash

public class Carro {
    void buzinar() {
        System.out.println("Biiiii!");
    }
}

```

### Abstração

É o princípio de ocultar os detalhes de implementação e mostrar apenas as funcionalidades relevantes.

<strong>Exemplo:</strong>
```bash

public abstract class ContaBancaria {
    protected double saldo;

    public void sacar(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
        }
    }

    public abstract void imprimirExtrato();
}

```

### Encapsulamento

Encapsulamento restringe o acesso direto aos atributos de um objeto, promovendo segurança e integridade dos dados.

<strong>Exemplo:</strong>
```bash

public class Conta {
    private double saldo;

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double valor) {
        saldo += valor;
    }
}

```

### Herança

Permite que uma classe herde atributos e métodos de outra classe (superclasse).

<strong>Exemplo:</strong>
```bash

public class Veiculo {
    void mover() {
        System.out.println("Veículo em movimento");
    }
}

public class Carro extends Veiculo {
    // Herda método mover()
}

```

### Polimorfismo

É a capacidade de uma mesma interface ter diferentes implementações.

<strong>Exemplo:</strong>
```bash

public class Animal {
    void fazerSom() {
        System.out.println("Som genérico");
    }
}

public class Cachorro extends Animal {
    @Override
    void fazerSom() {
        System.out.println("Au au");
    }
}

public class Gato extends Animal {
    @Override
    void fazerSom() {
        System.out.println("Miau");
    }
}

// Uso:
Animal a1 = new Cachorro();
Animal a2 = new Gato();

a1.fazerSom();  // Saída: Au au
a2.fazerSom();  // Saída: Miau

```

---

## 💻 Criando Aluno

```bash

// Classe Aluno

public class Aluno{
    private int ra;
    private String nome;
    private char sexo;
    private String rg;
    private String cpf;

    //Construct
    public Aluno (int ra, String nome, char sexo, String rg, String cpf){
        this.ra = ra;
        this.nome = nome;
        this.sexo = sexo;
        this.rg = rg;
        this.cpf = cpf;

    }
    // Setters
    public void setRa(int ra){
        this.ra = ra;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setSexo(char sexo){
        this.sexo = sexo;
    }
    public void setRg(String rg){
        this.rg = rg;
    }
    public void setCpf(String cpf){
        this.cpf = cpf;
    }

    // Getters
    public int getRa(){
        return this.ra;
    }
    public String getNome(){
        return this.nome;
    }
    public char getSexo(){
        return this.sexo;
    }
    public String getRg(){
        return this.rg;
    }
    public String getCpf(){
        return this.cpf;
    }

}

```

```bash

// Classe de Teste

public class Teste{

    public static void Main (String[] args){
        Aluno aluno = new Aluno(1, "João", "M","1","1");
        System.out.printf("Aluno: %s \nRa: %d \n",aluno.getNome(), aluno.getRa());
    }
}


```

---

## 📅 Adicionando Data

```bash

// Classe Data

public class Data {
    private int dia;
    private int mes;
    private int ano;

    // Construtor
    public Data(int dia, int mes, int ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    // Método para formatar a data como dd/mm/aaaa
    public String formatarData() {
        return String.format("%02d/%02d/%04d", dia, mes, ano);
    }
}

```

```bash

// Classe Aluno

public class Aluno{
    private int ra;
    private String nome;
    private char sexo;
    private String rg;
    private String cpf;
    private Data data;

    //Construct
    public Aluno (int ra, String nome, char sexo, String rg, String cpf, Data data){
        this.ra = ra;
        this.nome = nome;
        this.sexo = sexo;
        this.rg = rg;
        this.cpf = cpf;
        this.data = data;

    }
    // Setters
    public void setRa(int ra){
        this.ra = ra;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setSexo(char sexo){
        this.sexo = sexo;
    }
    public void setRg(String rg){
        this.rg = rg;
    }
    public void setCpf(String cpf){
        this.cpf = cpf;
    }
    public void setData(Data data){
        this.data = data;
    }

    // Getters
    public int getRa(){
        return this.ra;
    }
    public String getNome(){
        return this.nome;
    }
    public char getSexo(){
        return this.sexo;
    }
    public String getRg(){
        return this.rg;
    }
    public String getCpf(){
        return this.cpf;
    }
    public Data getData(){
        return this.data;
    }

}

```

```bash

// Classe de Teste

public class Teste{

    public static void Main (String[] args){
        Data data = new Data(13,4,2007);
        Aluno aluno = new Aluno(1, "João", "M","1","1", data);
        System.out.printf("Aluno: %s \nRa: %d \n",aluno.getNome(), aluno.getRa());
        System.out.println("Data formatada: " + data.formatarData());
    }
}


```