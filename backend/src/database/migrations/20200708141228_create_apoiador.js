
exports.up = function(knex) {
  return knex.schema.createTable('apoiadores', function(table) {
      table.string('id').primary();
      table.string('email').notNullable();
      table.string('apoiado').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('apoiadores');
};
