# Stack permitida na entrega

O site da Sprint 3 usa **só o que os capítulos das fases 1 a 3 ensinaram**, como pede o enunciado da atividade («recursos apresentados nos capítulos até a Fase 3»). Antes de usar uma tag, propriedade, classe, diretiva ou recurso de JavaScript, confira se ele está aqui. Se não estiver, prefira um que esteja ou combine com o grupo antes de usar.

A regra vale para o que vai na entrega: `dist/`, `src/` e `package.json`. Ferramentas de apoio que ficam fora do repositório, como a pasta `tmp/` do Iago, não entram no zip.

Fontes: a lista de capítulos do portal FIAP ON (fases 1 a 3 de 2026), os títulos dos vídeos e os e-books de cada capítulo. Atualizado em 07/11/2026; acrescente a fase 4 quando ela começar.

## O que pode ser usado

| Camada | Recursos | Onde foi ensinado |
|---|---|---|
| HTML | Tags iniciais, semântica, tabelas e formulários: campos de texto, número, data, cor e arquivo, textarea, select, datalist, botões e agrupamento de campos; validação dos campos pelo próprio HTML5 | F1 cap. 2 e 4; F2 cap. 2 |
| CSS | Estilos, box model, Flexbox (tamanho, ordem e gap), Grid e design responsivo | F1 cap. 3 e 4; F2 cap. 3 |
| Tailwind CSS 4 | Ver a seção abaixo | F3 cap. 2 |
| JavaScript | Ver a seção abaixo | F2 cap. 8 e 9; F3 cap. 3 e 6 |
| GitHub | Repositório do projeto no GitHub | F2 cap. 13 (só e-book) |

### Tailwind CSS 4 (F3 cap. 2)

- Instalação com Node.js e npm, CLI do Tailwind e script de execução com `--watch`; extensão Tailwind CSS IntelliSense no editor.
- `@import "tailwindcss";` no CSS de entrada e a diretiva `@theme`, com variáveis nos grupos `--color-*` (cores) e `--font-*` (fontes). É assim que a paleta e as fontes do Calibra estão definidas em `src/input.css`.
- Valores arbitrários entre colchetes, com moderação: o e-book alerta que o excesso compromete a padronização. Prefira as cores e fontes com nome.
- Tipografia: família, tamanho, peso, alinhamento, decoração, caixa e quebra de texto; fontes importadas do Google Fonts.
- Largura, altura e tamanho; margem e espaçamento interno; borda; contêiner e box model.
- Fundos (backgrounds), Flexbox e Grid.
- Design responsivo com os prefixos de tela, como `md:` e `lg:`.
- Estados de hover e transições.
- Diretiva `@apply`.
- Modo escuro, com `@custom-variant`.

### JavaScript (F2 cap. 8 e 9; F3 cap. 3 e 6)

- Integração com o HTML5, entrada e manipulação de dados; strings: localizar, extrair e substituir trechos.
- Variáveis e constantes, template string e caixas de diálogo.
- Operadores aritméticos, relacionais, lógicos, de incremento e decremento e de atribuição.
- Objetos `String`, `Math` (inclusive `Math.random`) e `Date`.
- `if`/`else`, `switch`, laços `for` e `while`.
- Funções: declaração, expressão, arrow function e callback.
- Arrays (manipulação e iteração) e objetos.
- DOM: selecionar e manipular um elemento ou um grupo de elementos da tela; eventos e listeners.
- Módulos e montagem do front-end.

## O que fica de fora

Nenhum capítulo das fases 1 a 3 ensinou os recursos abaixo; por isso eles não entram na entrega:

- Bootstrap. O enunciado o menciona, mas o curso ensinou Tailwind (registrado no acervo da atividade).
- Frameworks e bibliotecas de JavaScript (React, Vue, jQuery e afins) e TypeScript.
- Requisições à rede (`fetch`), armazenamento no navegador e APIs externas.
- Configurações do Tailwind que o e-book não mostra: arquivo `tailwind.config.js`, plugins, `@layer` e `@source`.
- Pré-processadores e empacotadores (Sass, Vite, Webpack).

Na dúvida sobre um recurso que não aparece em nenhuma das listas, pergunte ao grupo antes de usar.

## Capítulos de referência

| Fase | Cap. | Título | Disciplina |
|---:|---:|---|---|
| 1 | 2 | Desenvolvimento Web e HTML: Conceitos e Tags Iniciais | Front-end Design |
| 1 | 3 | Estilos com CSS | Front-end Design |
| 1 | 4 | Box Model e Semântica | Front-end Design |
| 2 | 2 | Tabelas e Formulários | Front-end Design |
| 2 | 3 | Flex/Grid e Design Responsivo | Front-end Design |
| 2 | 8 | Utilizando o front integrando o JavaScript com HTML 5 | Web Development |
| 2 | 9 | Avançando no front-end técnico | Web Development |
| 2 | 13 | O fantástico mundo do GitHub | (sem disciplina) |
| 3 | 1 | Executando um projeto | (sem disciplina) |
| 3 | 2 | Tailwind CSS | Front-end Design |
| 3 | 3 | Javascript | Front-end Design |
| 3 | 6 | Já sabe programar JavaScript? Então vamos utilizar | Web Development |

Os demais capítulos das fases 1 a 3 tratam de engenharia de software, requisitos, UML, matemática, Python, hardware e comunicação, e não acrescentam recursos ao site.
