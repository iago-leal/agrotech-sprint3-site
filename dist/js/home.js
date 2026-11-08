// Painel de calagem por talhão da Home (Fazenda Boa Esperança).
// Recalcula a dose de cada talhão quando o usuário clica num talhão
// ou muda a meta de V% e o lote de calcário.
// Conta da calagem: NC (t/ha) = (V2 - V1) x CTC / PRNT

const talhoes = [
  { nome: "Talhão 1", cultura: "Soja", area: 18.4, v1: 38, ctc: 8.4 },
  { nome: "Talhão 2", cultura: "Milho", area: 15.9, v1: 45, ctc: 7.2 },
  { nome: "Talhão 3", cultura: "Soja", area: 22.0, v1: 31, ctc: 9.6 },
  { nome: "Talhão 4", cultura: "Café", area: 9.6, v1: 54, ctc: 6.8 },
  { nome: "Talhão 5", cultura: "Feijão", area: 12.3, v1: 62, ctc: 7.9 }
];

let talhaoAtivo = 0;

const campoMeta = document.getElementById("meta-v2");
const campoLote = document.getElementById("lote-prnt");

// Escreve o número no padrão brasileiro, com vírgula no lugar do ponto.
function formatar(numero, casas) {
  return numero.toFixed(casas).split(".").join(",");
}

// Calcula a necessidade de calagem (t/ha), sem permitir valor negativo.
function calcularDose(v1, v2, ctc, prnt) {
  let dose = ((v2 - v1) * ctc) / prnt;
  if (dose < 0) {
    dose = 0;
  }
  return dose;
}

// Devolve o código da faixa ("c0", "c1", "c2" ou "c3") para a legenda e as cores.
function descobrirFaixa(dose) {
  if (dose === 0) {
    return "c0";
  }
  if (dose <= 1.5) {
    return "c1";
  }
  if (dose <= 3.0) {
    return "c2";
  }
  return "c3";
}

// Define as classes do Tailwind de cada cartão de talhão conforme a faixa de dose.
function montarClassesTalhao(faixa, selecionado) {
  let base =
    "min-h-32 p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ";

  if (faixa === "c0") {
    base = base + "bg-palha text-terra ";
  } else if (faixa === "c1") {
    base = base + "bg-trigo text-terra ";
  } else if (faixa === "c2") {
    base = base + "bg-terracota text-palha ";
  } else {
    base = base + "bg-terra text-palha ";
  }

  if (selecionado) {
    if (faixa === "c3") {
      base = base + "border-4 border-dashed border-palha";
    } else {
      base = base + "border-4 border-dashed border-terra";
    }
  } else {
    base = base + "border-2 border-terra";
  }

  return base;
}

// Atualiza as cores e doses dos 5 talhões, a ficha lateral e o total da fazenda.
function atualizarPainel() {
  const v2 = Number(campoMeta.value);
  const prnt = Number(campoLote.value);
  let totalFazenda = 0;

  for (let i = 0; i < talhoes.length; i++) {
    const t = talhoes[i];
    const dose = calcularDose(t.v1, v2, t.ctc, prnt);
    const faixa = descobrirFaixa(dose);
    const selecionado = i === talhaoAtivo;

    totalFazenda = totalFazenda + dose * t.area;

    const botao = document.getElementById("talhao-" + i);
    const textoDose = document.getElementById("dose-talhao-" + i);

    botao.className = montarClassesTalhao(faixa, selecionado);
    botao.setAttribute("aria-pressed", selecionado);
    textoDose.textContent = formatar(dose, 2);
  }

  // Preenche o quadro lateral com os dados do talhão selecionado.
  const atual = talhoes[talhaoAtivo];
  const doseAtual = calcularDose(atual.v1, v2, atual.ctc, prnt);
  const faixaAtual = descobrirFaixa(doseAtual);
  const contaTexto =
    "(" +
    formatar(v2, 0) +
    " − " +
    formatar(atual.v1, 0) +
    ") × " +
    formatar(atual.ctc, 1) +
    " ÷ " +
    formatar(prnt, 0);

  document.getElementById("q-nome").textContent = atual.nome + " · " + atual.cultura;
  document.getElementById("q-dados").textContent =
    formatar(atual.area, 1) +
    " ha · V% " +
    formatar(atual.v1, 0) +
    " · CTC " +
    formatar(atual.ctc, 1);
  document.getElementById("q-dose").textContent = formatar(doseAtual, 2);

  if (doseAtual > 0) {
    document.getElementById("q-total").textContent =
      formatar(doseAtual * atual.area, 1) + " t no talhão";
  } else {
    document.getElementById("q-total").textContent = "Sem necessidade de calcário";
  }

  document.getElementById("q-conta").textContent = contaTexto;

  // Atualiza também o exemplo da fórmula na seção "A proposta".
  document.getElementById("exemplo-talhao").textContent =
    atual.nome + " · " + atual.cultura;
  document.getElementById("exemplo-conta").textContent = contaTexto;
  document.getElementById("exemplo-dose").textContent =
    formatar(doseAtual, 2) + " t/ha";

  // Destaca na legenda a faixa em que o talhão selecionado caiu.
  const faixas = ["c0", "c1", "c2", "c3"];
  for (let j = 0; j < faixas.length; j++) {
    const itemLegenda = document.getElementById("legenda-" + faixas[j]);
    if (faixas[j] === faixaAtual) {
      itemLegenda.className = "px-2 py-1 flex items-center gap-2.5 bg-areia font-bold";
    } else {
      itemLegenda.className = "px-2 py-1 flex items-center gap-2.5";
    }
  }

  document.getElementById("meta-valor").textContent = formatar(v2, 0) + "%";
  document.getElementById("total-fazenda").textContent = formatar(totalFazenda, 1) + " t";
}

// Liga o clique de cada um dos 5 talhões.
for (let i = 0; i < talhoes.length; i++) {
  const botao = document.getElementById("talhao-" + i);
  botao.addEventListener("click", () => {
    talhaoAtivo = i;
    atualizarPainel();
  });
}

campoMeta.addEventListener("input", atualizarPainel);
campoLote.addEventListener("change", atualizarPainel);

atualizarPainel();
