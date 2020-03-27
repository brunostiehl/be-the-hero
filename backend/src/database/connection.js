const knex = require('knex');
const configuration = require('../../knexfile');

// para utilizar as configurações do ambiente de development, setadas no arquivo knexfile.js
const connection = knex(configuration.development);

module.exports = connection;