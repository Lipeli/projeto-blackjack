
// Função para calcular a pontuação de uma mão
function calcularPontuacao(mao) {
    let pontuacao = 0;

  for (let carta of mao) {
      pontuacao = pontuacao + carta.valor;
  }

  return pontuacao;
}

// Função para iniciar o jogo de Blackjack
alert(`Boas Vindas ao jogo BlackJack!`)
function jogarBlackjack() {
  while(confirm(`Deseja iniciar uma rodada?`)) {
      let jogador = [];
      let computador = [];

      // Jogador compra duas cartas
      jogador.push(comprarCarta());
      jogador.push(comprarCarta());
      let pontuacaoJogador = calcularPontuacao(jogador);
      while(pontuacaoJogador === 22) {
          jogador = [];
          jogador.push(comprarCarta());
          jogador.push(comprarCarta());
          pontuacaoJogador = calcularPontuacao(jogador);
      }

      // Computador compra duas cartas
      computador.push(comprarCarta());
      computador.push(comprarCarta());
      let pontuacaoComputador = calcularPontuacao(computador);
      while(pontuacaoComputador === 22) {
          computador = [];
          computador.push(comprarCarta());
          computador.push(comprarCarta());
          pontuacaoComputador = calcularPontuacao(computador);
      }

      // Revela cartas do jogador
      let textoDasCartasDoJogador = jogador.map(carta => carta.texto).join(` `);
      let textoDaCartaDoComputador = computador[0].texto;
      let resposta = confirm(`Suas cartas são: ${textoDasCartasDoJogador}, sua pontuação é: ${pontuacaoJogador} \n A carta revelada do computador é: ${textoDaCartaDoComputador}. \n Deseja comprar mais uma carta?`)

      // Continua jogo?
      while(resposta && pontuacaoJogador <= 21) {
          jogador.push(comprarCarta());
          pontuacaoJogador = calcularPontuacao(jogador);
          textoDasCartasDoJogador = jogador.map(carta => carta.texto).join(` `);

          if(pontuacaoJogador > 21) {
              alert(`Você estourou! Sua pontuação foi de ${pontuacaoJogador}. Você perdeu.`);
              break;
          }

          resposta = confirm(`Suas cartas são: ${textoDasCartasDoJogador}, sua pontuação é: ${pontuacaoJogador} \n A carta revelada do computador é: ${textoDaCartaDoComputador}. \n Deseja comprar mais uma carta?`)
      }

      if(pontuacaoJogador <= 21) {
          alert(`Agora é a vez do computador.`);
          while(pontuacaoComputador < pontuacaoJogador) {
              computador.push(comprarCarta());
              textoDaCartaDoComputador = computador.map(carta => carta.texto).join(` `);
              pontuacaoComputador = calcularPontuacao(computador);
          }
          textoDaCartaDoComputador = computador.map(carta => carta.texto).join(` `);
          alert(`As cartas do computador são ${textoDaCartaDoComputador}. A pontuação do computador é: ${pontuacaoComputador}.`);

          if(pontuacaoComputador > 21) {
              alert(`O computador estourou! Você ganhou.`);
          } else if(pontuacaoComputador === pontuacaoJogador) {
              alert(`A sua pontuação e a do computador são iguais! Isso é um empate.`);
          } else {
              alert(`A pontuação do computador é maior que a sua! Você perdeu.`);
          }
      }
  }
alert(`Fim de jogo!`)
resposta = false
}


jogarBlackjack();