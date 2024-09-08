// Certifica-se de que o DOM esteja carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
        // Seleciona os elementos
const comentarios = document.querySelectorAll('.comentario');
const botao = document.getElementById('btn_avaliações');
let comentariosVisiveis = false; // Estado inicial, comentários ocultos

// Função para mostrar ou esconder os comentários
botao.addEventListener('click', () => {
  comentariosVisiveis = !comentariosVisiveis; // Alterna o estado

  if (comentariosVisiveis) {
    // Mostra todos os comentários
    comentarios.forEach(comentario => {
      comentario.style.display = 'flex';
    });
    botao.textContent = 'Ocultar avaliações'; // Altera o texto do botão

    // Rola a página até o final (onde o botão estará após expandir os comentários)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    // Esconde todos os comentários
    comentarios.forEach(comentario => {
      comentario.style.display = 'none';
    });
    botao.textContent = 'Ver mais avaliações'; // Volta ao texto original do botão

    // Rola a página de volta ao local original do botão
    botao.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    }
  });








});
  