// Menu do celular (CAL-9): o botão "Menu" mostra e esconde a lista de links.
// No computador a lista fica sempre visível (classe lg:flex), e o botão some (lg:hidden).
const botaoMenu = document.querySelector("#botao-menu");
const listaMenu = document.querySelector("#lista-menu");

botaoMenu.addEventListener("click", () => {
  listaMenu.classList.toggle("hidden");
  const aberto = !listaMenu.classList.contains("hidden");
  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.textContent = aberto ? "Fechar" : "Menu";
});
