// ANIMAÇÃO LETRAS
var div = document.getElementById('log');
var texto = 'Esdras\nNeres Carneiro';

function escrever(str, el) {
    var char = str.split('');  // Divide a string em caracteres
    el.innerHTML = '';         // Limpa o conteúdo anterior
    var typer = setInterval(function() {
      if (!char.length) {
        clearInterval(typer);
        piscarCursor(el);      // Chama a função para piscar o cursor
        setTimeout(function() {
          escrever(texto, el);  // Reinicia o loop
        }, 5000);               // Espera 2 segundos antes de reiniciar
        return;
      }
      var next = char.shift();  // Pega o próximo caractere

      if (next === '\n') {
        el.innerHTML += '<br>'; // Quebra de linha
      } else {
        el.innerHTML += next;   // Adiciona o próximo caractere
      }
    }, 100);
  }

  function piscarCursor(el) {
    el.innerHTML += '<span id="cursor">|</span>';
    setInterval(function() {
      var cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
      }
    }, 700);  // Alterna a visibilidade a cada 500ms
  }

escrever(texto, div);

// ANIMAÇÃO FUNDOS

// Seleciona o elemento de fundo (info_apresentacao)
const background = document.querySelector('.info_apresentação');

// Adiciona um event listener ao movimento do mouse
document.addEventListener('mousemove', function(e) {
    // Obtem a largura e altura da janela
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Obtem a posição do mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calcula a posição do background com base no movimento do mouse
    const offsetX = (mouseX / width - 0.5) * 10;  // Ajuste horizontal
    const offsetY = (mouseY / height - 0.5) * 5; // Ajuste vertical

    // Aplica a nova posição do fundo
    background.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
});