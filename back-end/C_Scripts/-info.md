# Info Necessária para criar e usar esses arquivos

Perceba que \ andtes da variável é apenas por cusa do md, não precisa do \ antes, apenas troque o <> pelo que necessita.

Para Compilar (Dentro da pasta C_Scripts):

> gcc \<NomeDoArquivo> ./cJSON/cJSON.c -o \<nomeDaSaida>

Para rodar é só colocar o nome do arquivo no terminal:

> ./\<nomeDaSaida>

## 💡 Fluxo completo

* Você escreve o main.c.

* Você compila com gcc \<NomeDoArquivo> ./cjson/cJSON.c -o \<nomeDaSaida>

* Isso cria o executável gera-json.

* No Node.js, usamos o child_process para executar \<nomeDaSaida>.

* O programa em C imprime JSON no terminal, e o Node lê essa saída pelo micro serviço.
