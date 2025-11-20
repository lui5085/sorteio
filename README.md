# Sorteio

Um pequeno projeto em TypeScript que realiza um sorteio com base em participantes listados em um arquivo CSV. O sorteio remove uma pessoa aleatoriamente por vez até sobrar apenas uma pessoa — o ganhador.

**Funcionalidade principal:**
- Lê participantes de `src/data/dados.csv`.
- Executa o sorteio removendo aleatoriamente uma pessoa a cada rodada até sobrar apenas uma.
- Exibe o ganhador com o e-mail parcialmente mascarado.

## Como funciona

O algoritmo de sorteio funciona assim:

1. Carrega todas as pessoas do CSV.
2. Enquanto houver mais de uma pessoa, remove-se aleatoriamente uma pessoa da lista.
3. Quando sobra uma única pessoa, essa é declarada a vencedora.

Os arquivos principais que implementam essa lógica estão em `src/function/sortear-azarado.ts` e `src/function/carregar-pessoas.ts`.

## Pré-requisitos

- Node.js e npm instalados.
- Clonar este repositório localmente.

Observação: o projeto está escrito em TypeScript; o script de execução (`npm run start`) já configurado no `package.json` cuida de compilar/rodar conforme necessário.

## Instalação

No diretório do projeto, instale as dependências:

```bash
npm install
```

## Executando

Para executar o sorteio:

```bash
npm run start
```

O programa lê os dados de `./src/data/dados.csv` por padrão. Se quiser usar outro arquivo, edite o caminho em `src/index.ts` na linha que chama `carregarPessoas(...)`.

## Formato do CSV

O arquivo CSV esperado usa ponto-e-vírgula (`;`) como separador, com cada linha contendo `nome;email`.

Exemplo (`src/data/dados.csv`):

```
João Silva;joao.silva@email.com
Maria Oliveira;maria.oliveira@email.com
Carlos Souza;carlos.souza@email.com
```

## Exemplo de saída

O programa imprime no terminal o ganhador com o e-mail mascarado, por exemplo:

```
O AZARADO MAIS SORTUDO é...
João Silva <joa***@email.com>
```

## Estrutura do projeto

- `src/index.ts` — ponto de entrada; carrega dados, realiza o sorteio e mostra o resultado.
- `src/function/carregar-pessoas.ts` — lê e converte o CSV em objetos `Pessoa`.
- `src/function/sortear-azarado.ts` — lógica do sorteio (remove aleatoriamente até sobrar um).
- `src/model/Pessoa.ts` — modelo `Pessoa` e formatação/mascaramento de e-mail.
- `src/ui/terminal.ts` — wrapper para `terminal-kit` usado para saída no terminal.
- `src/data/dados.csv` — exemplo de dados dos participantes.

## Observações para desenvolvimento

- O mascaramento de e-mail é feito em `Pessoa.emailMascarado` usando uma expressão regular.
- Se desejar mudar a estratégia de sorteio (por exemplo, sortear diretamente um índice final), edite `src/function/sortear-azarado.ts`.

## Contribuições

Contribuições são bem-vindas. Abra issues ou pull requests com melhorias ou correções.

## Licença

Sinta-se à vontade para escolher a licença adequada e adicionar um arquivo `LICENSE` ao projeto.
# sorteio