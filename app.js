alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");


if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
} else{
    alert( chute + ` não é o numero secreto`)
}