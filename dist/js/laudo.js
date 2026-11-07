// Enviar laudo: leva os números do formulário para a tela Recomendação pela URL.
// O navegador só dispara o "submit" quando todos os campos passam na validação do HTML5
// (required, min, max e step), então este código roda apenas com dados válidos.
// A conta da calagem fica no recomendacao.js; aqui só se monta o endereço.
const formularioLaudo = document.querySelector("#formulario-laudo");

formularioLaudo.addEventListener("submit", (evento) => {
  evento.preventDefault(); // quem decide para onde ir é o código abaixo

  const talhao = document.querySelector("#talhao").value.trim();
  const cultura = document.querySelector("#cultura").value;
  const v1 = document.querySelector("#v1").value;
  const v2 = document.querySelector("#v2").value;
  const ctc = document.querySelector("#ctc").value;
  const prnt = document.querySelector("#prnt").value;
  const area = document.querySelector("#area").value;

  const endereco =
    `./recomendacao.html?talhao=${encodeURIComponent(talhao)}` +
    `&cultura=${encodeURIComponent(cultura)}` +
    `&v1=${v1}&v2=${v2}&ctc=${ctc}&prnt=${prnt}&area=${area}`;

  window.location.href = endereco;
});
