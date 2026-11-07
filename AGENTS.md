# Projeto Calibra Sprint 3

Site do Calibra, projeto acadêmico da FIAP (Sprint 3), construído com HTML e Tailwind CSS.

## Papel do agente

O projeto é trabalho de faculdade. Desde 07/11/2026, por causa do prazo curto da entrega (08/11, às 23h59), o papel do agente mudou na parte do Iago:

- **Na parte do Iago, o agente escreve o código e o Iago valida.** O agente avança uma etapa por vez, mostra o que fez e por quê, e só passa à seguinte depois da aprovação dele.
- Diante de uma decisão, expõe as consequências uma vez e respeita a escolha do Iago, mesmo quando ela foge da convenção.
- Na parte dos outros integrantes, vale o papel anterior: o agente atua como **tutor e parceiro de programação**, não como autor. Executa as partes mecânicas (instalação, verificação de ambiente, testes), deixa ao aluno escrever o código, configurar os scripts e decidir a estrutura, e propõe o próximo passo em forma de exercício.

## Estrutura

```
src/input.css        CSS de entrada do Tailwind (editado à mão)
dist/                site que vai para produção
  index.html         HTML editado diretamente aqui
  css/styles.css     CSS gerado pelo Tailwind (não editar à mão)
  js/
  images/
tmp/                 acompanhamento das etapas (ignorada; só na máquina do Iago)
```

`dist/` é versionada e publicada como está, sem etapa de build no servidor.

## Acompanhamento das etapas (só na máquina do Iago)

No ramo `feat/base-iago`, na máquina do Iago, a pasta `tmp/` guarda o andamento das tarefas dele no Jira, etapa por etapa. A pasta está no `.gitignore`: não vai para o GitHub, e quem clonar o repositório não a terá.

- `tmp/etapas.md`: o cabeçalho YAML lista cada tarefa com suas etapas, o dono e a situação (pendente, em andamento, feita ou bloqueada); o corpo repete o mesmo conteúdo para leitura.
- `tmp/etapas.py`: o único meio de alterar o arquivo. Nunca editar `tmp/etapas.md` à mão: a última linha do arquivo leva uma soma de verificação, e o script recusa o arquivo alterado por fora.
- O agente consulta o arquivo antes de começar uma etapa e o atualiza pelo script ao começá-la e ao terminá-la.
- O acompanhamento é pessoal e não substitui o Jira, onde o grupo continua marcando o que está concluído. O script nunca escreve no Jira.

As etapas são identificadas pelo número da tarefa e da etapa (`10.1` ou `CAL-10.1`):

| Comando | Efeito |
|---|---|
| `python3 tmp/etapas.py` | resumo: feitas, próxima etapa do agente e do Iago, bloqueios |
| `python3 tmp/etapas.py iniciar 10.1` | marca a etapa como em andamento |
| `python3 tmp/etapas.py concluir 10.1 ["nota"]` | marca como feita |
| `python3 tmp/etapas.py bloquear 7.2 "motivo"` | marca como bloqueada |
| `python3 tmp/etapas.py reabrir 10.1` | volta a pendente |
| `python3 tmp/etapas.py nota 10.1 "texto"` | troca a nota (`""` apaga) |
| `python3 tmp/etapas.py renomear 10.1 "nome"` | troca o nome da etapa |
| `python3 tmp/etapas.py adicionar CAL-9 "nome" [--dono iago]` | acrescenta uma etapa ao fim da tarefa |
| `python3 tmp/etapas.py esperar CAL-14 "texto"` | registra a espera por colegas (`""` libera) |

O Node é o 24 (LTS), fixado em `.nvmrc`; `nvm use` na raiz seleciona a versão.

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
- `tmp/`, o acompanhamento pessoal das etapas do Iago

## Pendências (26/10/2026)

- Nomear ou dispensar o script de minificação.
