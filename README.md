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
BACKEND_PORT=your_preferred_local_port_for_backend
API_KEY=your_api_key_here
DB_CONNECTION_STRING=your_database_url_here
```

Também crie, logo após, outra `.env` na raiz da pasta frontend com o seguinte conteúdo:

```plaintext
REACT_APP_BACKEND_PORT=your_preferred_local_port_for_backend
```

### Executando o projeto

Por fim, para executar o projeto, é possível rodar ou o front ou o back independentemente através de um simples npm start com um terminal aberto diretamente em cada um deles, ou permanecendo na raiz do projeto para executar ambos de uma vez com o **Concurrently**.

```bash

npm start

````

