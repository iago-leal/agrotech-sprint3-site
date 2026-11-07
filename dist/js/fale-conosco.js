// Fale Conosco (CAL-29): confirma o envio na tela, sem servidor.
// O navegador só dispara o "submit" quando todos os campos passam na validação do HTML5 (CAL-28),
// então este código roda apenas com dados válidos.
const formulario = document.querySelector("#formulario-contato");
const campoNome = document.querySelector("#nome");
const caixaEnviada = document.querySelector("#mensagem-enviada");
const textoEnviada = document.querySelector("#texto-enviada");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // o protótipo não tem servidor: nada sai do navegador

  const primeiroNome = campoNome.value.trim().split(" ")[0];
  textoEnviada.textContent = `Obrigado, ${primeiroNome}! Recebemos sua mensagem e vamos responder no e-mail informado. Como este site é um protótipo acadêmico, nenhum dado foi enviado de verdade.`;

  caixaEnviada.classList.remove("hidden");
  formulario.reset();
});
