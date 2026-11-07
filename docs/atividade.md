# Escopo da atividade: AgroTech, Sprint 3

Requisitos da «ATIVIDADE – AGROTECH - Sprint3» (FIAP ON, fase 3 de 2026), resumidos do enunciado do portal, para conferir se o site está dentro do que foi proposto. O resumo vem do acervo do Iago (registro `2026-F03-001`, coletado em 26/10/2026); o enunciado completo está no portal. A conferência final da entrega (CAL-12) percorre esta lista item por item.

**Prazo:** domingo, 08/11/2026, às 23h59, pelo portal. Entrega com até 3 dias de atraso vale no máximo 70% da nota, e o arquivo não pode ser trocado depois do fechamento.

## O que se pede

Um **protótipo das telas do projeto** em front-end, com HTML, CSS e JavaScript, usando os recursos dos capítulos estudados até a fase 3 (ver [`stack.md`](stack.md)), e um **pitch-vídeo que mostra a navegação** pelo site.

## Requisitos do site

| # | Requisito | Como conferir |
|---:|---|---|
| S1 | No máximo 5 páginas ou seções; acima disso, o enunciado prevê perda de pontos | Contar as páginas em `dist/` e os links do menu |
| S2 | Navegabilidade definida | Percorrer todas as páginas pelo menu, sem link quebrado, no computador e no celular |
| S3 | Identidade visual definida | Mesmas cores, fontes, menu e rodapé em todas as páginas |
| S4 | Uma página «Fale Conosco» com formulário que valida os dados com recursos do HTML5 (o envio não precisa funcionar) | Tentar enviar o formulário vazio e com dados inválidos: o navegador deve barrar |
| S5 | A Home incorpora o pitch-vídeo | O vídeo (ou o link dele) aparece na Home |
| S6 | Backend e funcionalidade não são exigidos, salvo a validação do Fale Conosco | Nada a conferir; serve para não gastar tempo com o que não conta |
| S7 | Só recursos ensinados até a fase 3 | Comparar o código com [`stack.md`](stack.md) |

## Requisitos do pitch-vídeo

| # | Requisito | Como conferir |
|---:|---|---|
| V1 | Até 3 minutos | Duração no YouTube |
| V2 | O tempo todo mostra a navegação do site; o enunciado proíbe falar de ideias e de dados | Assistir antes de publicar |
| V3 | Publicado numa plataforma de vídeo, como o YouTube | Abrir o link fora da conta de quem publicou |
| V4 | O link aparece na Home | Mesmo item S5 |

## Como se entrega

| # | Requisito | Como conferir |
|---:|---|---|
| E1 | O projeto inteiro, compactado num único arquivo, enviado pelo portal (não por WhatsApp ou Teams) | Status «enviado para avaliação» no portal |
| E2 | Na raiz do projeto, um PDF com o link do vídeo e o nome completo de todos os integrantes | Abrir o PDF de dentro do zip e clicar no link |
| E3 | O arquivo do vídeo não vai no zip | Listar o conteúdo do zip |
| E4 | Equipe de 3 a 5 estudantes, cadastrada no grupo da atividade | Tela da atividade no portal |

Cuidado prático, que não está no enunciado: o zip não precisa levar `node_modules/`, que o `npm install` recria e que pesa muito.

## O que o enunciado deixa em aberto

- **Bootstrap ou Tailwind.** O enunciado cita Bootstrap, mas nenhum capítulo das fases 1 a 3 o ensina, e o capítulo 2 da fase 3 é todo Tailwind. O grupo adotou o Tailwind.
- **Página ou seção.** O limite fala em «páginas ou seções». O site tem 4 páginas; as seções internas da Home não são páginas.
- **Critérios de avaliação**, que o enunciado não publica.
