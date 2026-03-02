import dados from "./models/data.json" with { type: "json" } 
import Personagem from "./models/Personagem.js"
import { compararPersonagens } from "./utils/Comparador.js";

const listaDeHerois = dados.vingadores.map(h => {
    return new Personagem(
        h.nome, 
        h.codinome, 
        h.armaPrincipal, 
        h.armaSecundaria, 
        h.velocidade, 
        h.forca, 
        h.resistencia
    );
});

console.log("=== INICIANDO TORNEIO DOS VINGADORES ===\n");

for (let i = 0; i < listaDeHerois.length; i++) {
    for (let j = i + 1; j < listaDeHerois.length; j++) {
        const heroiA = listaDeHerois[i];
        const heroiB = listaDeHerois[j];
        
        const resultado = compararPersonagens(heroiA, heroiB);
        console.log(resultado);
        console.log("---------------------------------------\n");
    }
}