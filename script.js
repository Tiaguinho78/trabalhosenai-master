// Seleciona o formulário
const form = document.getElementById('form-contato');

// Cria uma função para mostrar a mensagem de sucesso
function mostrarMensagemSucesso(texto) {
  // Verifica se já existe uma mensagem, para não duplicar
  let mensagem = document.querySelector('.mensagem-sucesso');
  if (!mensagem) {
    mensagem = document.createElement('div');
    mensagem.classList.add('mensagem-sucesso');
    document.querySelector('.contato').appendChild(mensagem);
  }
  mensagem.textContent = texto;
  mensagem.style.display = 'block';

  // Desaparece após 3 segundos
  setTimeout(() => {
    mensagem.style.display = 'none';
  }, 3000);
}

// Adiciona evento de submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede envio padrão (recarregar página)

  // Pega os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const duvida = document.getElementById('duvida').value.trim();

  // Validação simples
  if (!nome || !telefone || !email || !duvida) {
    mostrarMensagemSucesso('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você poderia enviar os dados via AJAX para um servidor, se quiser

  // Reseta o formulário
  form.reset();

  // Mostra mensagem de sucesso
  mostrarMensagemSucesso('Informações enviadas com sucesso!');
});
