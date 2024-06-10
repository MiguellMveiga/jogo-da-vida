// Inicializa a pontuação
if (!localStorage.getItem('pontuacao')) {
  localStorage.setItem('pontuacao', 1000);
}

function respostaErrada() {
  // Diminui 100 pontos a cada resposta errada
  var pontuacaoAtual = Number(localStorage.getItem('pontuacao'));
  pontuacaoAtual -= 100;
  localStorage.setItem('pontuacao', pontuacaoAtual);

  // Atualiza a pontuação na página
  document.getElementById('pontuacao').textContent = pontuacaoAtual;
}

function mostrarPontuacao() {
  // Mostra a pontuação atual na página
  var pontuacaoAtual = localStorage.getItem('pontuacao');
  document.getElementById('pontuacao').textContent = pontuacaoAtual;
}

function resetarPontuacao() {
    // Reseta a pontuação para 1000 pontos
    localStorage.setItem('pontuacao', 1000);
}

// Chame mostrarPontuacao() quando a página carregar para exibir a pontuação
window.onload = function() {
  mostrarPontuacao();
  proximoDialogo(); // Chama a função do seu jogo
};
