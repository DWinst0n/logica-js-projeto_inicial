alert("Boas vindas ao jogo do número secreto");
let dificuldade = Number(prompt(`Escolha o nível de dificuldade (1 a 4)`));

while (isNaN(dificuldade) || dificuldade <= 0 || dificuldade > 4) {
    dificuldade = Number(prompt(`Escolha o nível corretamente (1 a 4)`));
}
console.log(`O usuário escolheu o nível ${dificuldade} de dificuldade.`)
let numeroMaximo = dificuldade;
let numeroSecreto = parseInt(Math.random() * 10**numeroMaximo + 1);
console.log('Acha bonito ficar hackeando os sites dos outros??? Engraçadinho(a).... Tá bom..... a resposta é:', numeroSecreto);

let tentativas = 1;
let chute;

alert("Preparado?");

while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${10**numeroMaximo}`));
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
            console.log(`Usuário escolheu`, chute);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
            console.log(`Usuário escolheu`, chute);
        }
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Parabéns!! Acertou de primeira. A resposta realmente é ${numeroSecreto}!`);
}

console.log(`Usuário escolheu ${chute} e a resposta é ${numeroSecreto}. Resultado:`, chute == numeroSecreto);
