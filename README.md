# Tech-challenger 2: Sistema de Blogging

Este projeto visa a criação de uma aplicação back-end para um sistema de blogging, com foco na interação entre professores e alunos através de postagens. A aplicação será desenvolvida utilizando Node.js e deverá seguir os requisitos listados abaixo:

## Requisitos Técnicos

- **Linguagem de Programação**: Node.js
- **Frameworks**: Utilização de frameworks como Express ou Fastify para a criação do servidor e rotas.
- **Banco de Dados**: Suporte a banco de dados SQL ou NOSQL. A escolha do banco de dados fica a critério do desenvolvedor, com a necessidade de criar um modelo de dados adequado para as postagens.
- **Contêinerização**: Utilização de Docker para contêinerizar a aplicação, facilitando o deploy e a execução em diferentes ambientes.


## Endpoints REST

A aplicação deverá fornecer os seguintes endpoints REST para a interação com o sistema de blogging:

### Visualização e Busca de Posts

- `GET /posts`: Retorna uma lista de todos os posts disponíveis.
- `GET /posts/:id`: Retorna os detalhes de um post específico, identificado pelo seu ID.
- `GET /posts/search`: Permite a busca de posts por palavras-chave no título ou conteúdo.

### Gestão de Posts (Autenticação Necessária)

- `POST /posts`: Cria uma nova postagem. Requer dados como título, conteúdo e autor no corpo da requisição.
- `PUT /posts/:id`: Edita uma postagem existente, identificada pelo seu ID. Requer os novos dados no corpo da requisição.
- `DELETE /posts/:id`: Exclui uma postagem específica, utilizando o ID do post como parâmetro.
- `GET /posts/admin`: Lista todas as postagens, proporcionando uma visão administrativa do conteúdo.

## Autenticação

Os endpoints marcados com **AUTH** requerem autenticação. Isso significa que apenas usuários autorizados (professores) poderão criar, editar ou excluir postagens, além de acessar a visão administrativa das postagens.


