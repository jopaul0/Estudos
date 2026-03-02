export function compararPersonagens(p1, p2) {
    console.log(`--- BATALHA: ${p1.codinome} vs ${p2.codinome} ---`);

    const atributos = ['forca', 'velocidade', 'resistencia'];
    let pontosP1 = 0;
    let pontosP2 = 0;

    atributos.forEach(attr => {
        const dif = p1[attr] - p2[attr];
        const difModulo = Math.abs(dif)
        
        if (dif > 0) {
            console.log(`[${attr.toUpperCase()}]: ${p1.codinome} vence por +${dif} pontos.`);
            pontosP1+=difModulo;
        } else if (dif < 0) {
            console.log(`[${attr.toUpperCase()}]: ${p2.codinome} vence por +${difModulo} pontos.`);
            pontosP2+=difModulo;
        } else {
            console.log(`[${attr.toUpperCase()}]: Empate técnico.`);
        }
    });

    console.log("--- CONCLUSÃO ---");
    if (pontosP1 > pontosP2) {
        return `Veredito: ${p1.codinome} é estrategicamente superior a ${p2.codinome}.`;
    } else if (pontosP2 > pontosP1) {
        return `Veredito: ${p2.codinome} possui vantagem competitiva sobre ${p1.codinome}.`;
    } else {
        return "Veredito: Ambos os personagens possuem níveis de poder equivalentes.";
    }
}
