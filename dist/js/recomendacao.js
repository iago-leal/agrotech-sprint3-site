/*
 * Recomendação · lê o laudo que a tela Enviar laudo manda pela URL.
 *
 * Sem laudo na URL a página fica como está no HTML: um exemplo, com o aviso
 * "Valores de exemplo" à mostra. Com laudo, os números do exemplo dão lugar
 * aos do laudo e o aviso sai da tela.
 *
 * Endereço que esta tela espera receber:
 *   recomendacao.html?talhao=Talhao+1&cultura=Soja&v1=38&v2=60&ctc=8.4&prnt=85&area=18.4
 *
 * A conta é a mesma do laudo: NC (t/ha) = (V2 - V1) x CTC / PRNT
 */

/* Quebra o trecho da URL depois do "?" e devolve um objeto {campo: valor}. */
function lerEndereco(busca) {
  const dados = {};

  if (busca.length < 2) {
    return dados;
  }

  const partes = busca.substring(1).split("&");

  for (let i = 0; i < partes.length; i++) {
    const pedaco = partes[i].split("=");

    if (pedaco.length === 2) {
      const campo = decodeURIComponent(pedaco[0].split("+").join(" "));
      const valor = decodeURIComponent(pedaco[1].split("+").join(" "));
      dados[campo] = valor;
    }
  }

  return dados;
}

/* Converte o texto que veio da URL em número. Aceita vírgula ou ponto. */
function virarNumero(texto) {
  if (texto === undefined || texto === "") {
    return NaN;
  }
  return Number(texto.split(",").join("."));
}

/* Escreve o número no jeito do Brasil, com vírgula no lugar do ponto. */
function formatar(numero, casas) {
  return numero.toFixed(casas).split(".").join(",");
}

/* Troca o texto de um elemento, quando ele existe na página. */
function escrever(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento !== null) {
    elemento.textContent = texto;
  }
}

/* Diz em qual das três faixas da régua a dose caiu. */
function descreverFaixa(dose) {
  if (dose < 1.5) {
    return "A faixa de baixo, até 1,5 tonelada por hectare, é onde esta dose caiu.";
  }
  if (dose < 3) {
    return "A faixa do meio, de 1,5 a 3,0 toneladas por hectare, é onde esta dose caiu.";
  }
  return "A faixa de cima, acima de 3,0 toneladas por hectare, é onde esta dose caiu.";
}

/* Põe o laudo recebido na tela. */
function mostrarLaudo(laudo) {
  const v1 = virarNumero(laudo.v1);
  const v2 = virarNumero(laudo.v2);
  const ctc = virarNumero(laudo.ctc);
  const prnt = virarNumero(laudo.prnt);
  const area = virarNumero(laudo.area);

  /* Faltando um número, ou com PRNT zerado, a conta não fecha: fica o exemplo. */
  const numeros = [v1, v2, ctc, prnt, area];
  for (let i = 0; i < numeros.length; i++) {
    if (isNaN(numeros[i])) {
      return;
    }
  }
  if (prnt <= 0) {
    return;
  }

  const dose = ((v2 - v1) * ctc) / prnt;
  const total = dose * area;

  /* Título: "Talhão 1 · Soja", com a cultura só quando ela vem junto. */
  let titulo = laudo.talhao;
  if (titulo === undefined || titulo === "") {
    titulo = "Talhão sem nome";
  }
  if (laudo.cultura !== undefined && laudo.cultura !== "") {
    titulo = titulo + " · " + laudo.cultura;
  }
  escrever("titulo-talhao", titulo);

  escrever("valor-dose", formatar(dose, 2));
  escrever("faixa-dose", descreverFaixa(dose));
  escrever("total-talhao", formatar(total, 1) + " t");
  escrever("area-talhao", formatar(area, 1) + " ha");
  escrever(
    "conta-dose",
    "(" + formatar(v2, 0) + " − " + formatar(v1, 0) + ") × " + formatar(ctc, 1) + " ÷ " + formatar(prnt, 0)
  );

  escrever("laudo-v1", formatar(v1, 0) + "%");
  escrever("laudo-v2", formatar(v2, 0) + "%");
  escrever("laudo-ctc", formatar(ctc, 1) + " cmolc/dm³");
  escrever("laudo-prnt", formatar(prnt, 0) + "%");
  escrever("laudo-area", formatar(area, 1) + " ha");

  escrever("origem-laudo", "Os cinco valores que entram na conta, como vieram da tela Enviar laudo.");

  /* A régua vai de 0 a 5 t/ha. Acima disso a marca para na ponta. */
  let posicao = (dose / 5) * 100;
  if (posicao < 0) {
    posicao = 0;
  }
  if (posicao > 100) {
    posicao = 100;
  }
  const marca = document.getElementById("marca-regua");
  if (marca !== null) {
    marca.style.left = posicao + "%";
  }

  /* Com laudo de verdade na tela, o aviso de exemplo não cabe mais. */
  const aviso = document.getElementById("aviso-exemplo");
  if (aviso !== null) {
    aviso.remove();
  }
}

const laudoRecebido = lerEndereco(window.location.search);

if (laudoRecebido.v1 !== undefined) {
  mostrarLaudo(laudoRecebido);
}
