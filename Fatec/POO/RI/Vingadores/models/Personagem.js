export default class Personagem{
    constructor(nome, codinome, armaPrincipal="Punhos", armaSecundaria="", velocidade=50, forca=50, resistencia=50){
        this.nome = nome,
        this.codinome = codinome,
        this.armaPrincipal = armaPrincipal,
        this.armaSecundaria = armaSecundaria,
        this.velocidade = velocidade,
        this.forca = forca,
        this.resistencia = resistencia
    }

    descricao(){
        return "Nome do personagem: " + this.nome + "\n" +
            "Codinome do personagem: " + this.codinome + "\n" +
            "Arma principal: "+ this.armaPrincipal + "\n" +
            "Arma secundária: " + this.armaSecundaria + "\n" +
            "Nível de força: "+ this.forca + "\n" +
            "Nível de velocidade: "+ this.velocidade + "\n" +
            "Nível de resistência: "+ this.resistencia + "\n"
    }
}