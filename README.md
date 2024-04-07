# Challenge Dev API

Esta é uma aplicação Node(Express) simples, desenvolvida para fins didáticos e parte do desafio técnico da empresa atriani. A aplicação permite que o usuário visualize uma lista de empreendimentos, crie novos registros e também consiga editar ou excluir.

## Rodando localmente

Requisitos:

- [Node.js >= 18](https://nodejs.org/en)
- Variável de ambiente com a url do banco: DB_URL

Clone o projeto

```bash
  git clone https://github.com/challenge-dev-api
```

Entre no diretório do projeto

```bash
  cd challenge-dev-api
```

Instale as dependências

```bash
  npm i
```

Inicie a aplicação

```bash
  npm start
```

A API estará disponível com a seguinte URL base:

http://localhost:9000/

## Funcionalidades

| ROTA         | HTTP   | Descrição                       |
| ------------ | ------ | ------------------------------- |
| api/ent/todo | GET    | Lista todas os empreendimentos  |
| api/ent/new  | POST   | Cria novo empreendimento        |
| api/ent/:id  | PATCH  | Atualizar empreendimento por Id |
| api/ent/:id  | DELETE | Excluir empreendimento por Id   |

### Exemplo de Resposta (GET)

```json
[
  {
    "_id": "6611a291e8ec1e01242e132b",
    "name": "Sirius Vila Bastos 22",
    "status": "RELEASE",
    "purpose": "HOME",
    "ri_number": "123321",
    "__v": 0,
    "address": {
      "district": "Vila Bastos",
      "city": "Santo André",
      "street": "Rua Doutor Messuti",
      "state": "SP",
      "number": 339,
      "cep": "60000000"
    }
  },
  {
    "_id": "6611aefe1f8d65659af8542a",
    "name": "Sirius Vila Bastos 22",
    "status": "RELEASE",
    "purpose": "HOME",
    "ri_number": "123321",
    "__v": 0,
    "address": {
      "district": "Vila Bastos",
      "city": "Santo André",
      "street": "Rua Doutor Messuti",
      "state": "SP",
      "number": 339,
      "cep": "60000000"
    }
  }
]
```

### Exemplo de Requisição (POST)

```json
{
  "name": "Sirius Vila Bastos 25",
  "status": "RELEASE",
  "purpose": "HOME",
  "ri_number": "123321",
  "address": {
    "district": "Vila Bastos",
    "city": "Santo André",
    "street": "Rua Doutor Messuti",
    "state": "SP",
    "number": "339",
    "cep": "60000000"
  }
}
```

## Stack utilizada

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)

## Demonstração

A URL base da API está disponível no link abaixo:

https://challenge-dev-api.vercel.app/

## Melhorias

-Validar dados de entrada nas requisições
-Incluir testes unitários

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
