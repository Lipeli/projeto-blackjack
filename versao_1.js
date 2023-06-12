/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Boas vindas ao jogo BlackJack!`)

if(confirm(`Gostaria de iniciar uma rodada?`) === true){

const cartaJogador = comprarCarta();
const cartaJogador2 = comprarCarta();
const cartaComputador = comprarCarta();
const cartaComputador2 = comprarCarta();
const somaJogador = Number(cartaJogador.valor + cartaJogador2.valor)
const somaComputador = Number(cartaComputador.valor + cartaComputador2.valor)
console.log(`Usuário - Cartas: ${cartaJogador.texto} ${cartaJogador2.texto} \n pontuação: ${somaJogador}`)
console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} \n pontuação: ${somaComputador}`)

if (somaJogador > somaComputador){
   alert(`O usuário Ganhou!`)
} else if (somaJogador === somaComputador){
   alert(`Empate!`)
} else {
   alert(`O computador ganhou!`)
}

} else {
   console.log(`Obrigado e volte sempre!`)
}