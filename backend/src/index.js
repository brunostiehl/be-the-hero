const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// cors é um módulo de segurança, que determina quem pode acessar a aplicação
app.use(cors());

app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Parâmetros do express:
 * 
 * request: guarda todos os dados vindos da requisição do usuário
 * response: responsável por retornar uma resposta ao usuário
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação).
 * Exemplo: "/users?name=Bruno&idade=26"
 * Para acessar a informação vinda da url: const params = request.query;
 * 
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Exemplo: "/users/:id"
 * Para acessar a informação vinda da url: const params = request.params;
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * Para acessar a informação vinda no body da requisição: const body = request.body;
 */

/**
 * Banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 * 
 * Obs.: SQL é o formato para comunicação com BD
 */

/**
 * Comunicação com o banco de dados:
 * 
 * Driver: pacote oficial de banco de dados para node.
 * Exemplo: SELECT * FROM users
 * 
 * Query Builder: serve para escrever as queries utilizando javascript. (Ferramenta utilizada no projeto: Knex.js)
 * Exemplo: table('users').select('*').where('')
 */

/**
 * Migrations: serve para manter o controle das alterações feitas no banco de dados (histórico do BD)
 */

app.listen(3333);