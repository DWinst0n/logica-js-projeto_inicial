alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log('A resposta é:',numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 10");
console.log(`Usuario escolheu`, chute)

if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
} else{
    alert( chute + ` não é o numero secreto`)
}
console.log( `Usuario escolheu ${chute} e a resposta é ${numeroSecreto}. Resultado:`,chute==numeroSecreto)