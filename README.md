# SOLIDARITÉ NET

## Sobre o Projeto
SCUFFED

## Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/scuffed/scuffed.git
````

2. Instale as dependências

```bash
   cd frontend
   npm install
   cd ..
   cd backend
   npm install
````

## Configuração do Ambiente

 Certifique-se de que você está utilizando a seguinte versão de Node:

- **Node.js**: 16

### Variáveis de Ambiente

Para configurar variáveis de ambiente, crie um arquivo `.env` na raiz da pasta backend com as seguintes chaves:

```plaintext
SUPABASE_URL=''
SUPABASE_ANON_KEY=''
SUPABASE_DB_URL=''
BACKEND_PREFERRED_PORT=''
```

Também crie, logo após, outra `.env` na raiz da pasta frontend com o seguinte conteúdo:

```plaintext
REACT_APP_BACKEND_PORT=''
```

### Executando o projeto

Por fim, para executar o projeto, é possível rodar ou o front ou o back independentemente através de um simples npm start com um terminal aberto diretamente em cada um deles, ou permanecendo na raiz do projeto para executar ambos de uma vez com o **Concurrently**.

```bash

npm start

````

## Configurando a DB pra testes e desenvolvimento local

Instale o CLI do Supabase com o Homebrew:

```bash

brew install supabase/tap/supabase

```

Em backend/src (necessário ter Docker instalado no ambiente/máquina):
*Ter a versão mais recente do POSTGRESQL instalada*

```bash

supabase init

sudo service docker start

supabase start

````

E realizar as autenticações e configurações finais necessárias. Certifique-se de ter preenchido o arquivo .env corretamente. Pra melhor manipulação, é aconselhado ler a documentação do Supabase CLI.





