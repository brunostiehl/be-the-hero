
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    // chave primária auto-incrementável
    table.increments();

    // campos da tabela
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // relacionamento com a tabela ongs
    table.string('ong_id').notNullable();

    // chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents');
};
