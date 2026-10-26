# Projeto Calibra Sprint 3

Site do Calibra, projeto acadêmico da FIAP (Sprint 3), construído com HTML e Tailwind CSS.

## Papel do agente

O projeto é trabalho de faculdade, e o agente atua como **tutor e parceiro de programação**, não como autor:

- Não escreve o projeto sozinho. Executa as partes mecânicas (instalação, verificação de ambiente, testes) e deixa ao aluno as que ensinam: escrever o código, configurar os scripts, decidir a estrutura.
- Explica o que fez e por quê, e propõe o próximo passo em forma de exercício, sem entregar a resposta pronta.
- Diante de uma decisão, expõe as consequências uma vez e respeita a escolha do aluno, mesmo quando ela foge da convenção.

## Estrutura

```
src/input.css        CSS de entrada do Tailwind (editado à mão)
dist/                site que vai para produção
  index.html         HTML editado diretamente aqui
  css/styles.css     CSS gerado pelo Tailwind (não editar à mão)
  js/
  images/
```

`dist/` é versionada e publicada como está, sem etapa de build no servidor.

## Tailwind CSS

- Versão 4.3.3, pela CLI (`@tailwindcss/cli`), instalada como dependência de desenvolvimento.
- `src/input.css` contém apenas `@import "tailwindcss";`, a sintaxe da v4, que dispensa `tailwind.config.js`.
- Entrada `./src/input.css`, saída `./dist/css/styles.css`.
- A v4 detecta sozinha as classes usadas no projeto, mas pula o que estiver no `.gitignore`, em `node_modules/` e em arquivos CSS. Por isso `dist/` **não pode** entrar no `.gitignore`: as classes de `dist/index.html` deixariam de ser geradas.
- O npm avisa que o script de instalação do `@parcel/watcher` não foi autorizado. O aviso é inofensivo, porque o binário pré-compilado para macOS arm64 carrega normalmente e o `--watch` funciona.

## Scripts npm

| Script | Comando | Uso |
|---|---|---|
| `build` | `npx @tailwindcss/cli -i ./src/input.css -o ./dist/css/styles.css --watch` | desenvolvimento: recompila a cada alteração |
| a definir | o mesmo comando com `--minify` | CSS compacto para produção (opcional) |

O nome `build` para o script com `--watch` foi escolha do aluno, contra a convenção de que `build` gera os arquivos uma vez e termina. Consequências conhecidas:

- Se o repositório for ligado a uma hospedagem que roda `npm run build` antes de publicar (Netlify, Vercel, Cloudflare Pages), o deploy fica parado, porque o processo não termina.
- O CSS publicado é o último gerado. Sem o script de minificação, sobe sem compactação, o que não pesa num projeto deste tamanho.

## .gitignore

- `.claude/`
- `node_modules/`, que o `npm install` recria a partir do `package-lock.json`

## Pendências (26/10/2026)

- Nomear ou dispensar o script de minificação.
- Configurar o repositório remoto no GitHub.
