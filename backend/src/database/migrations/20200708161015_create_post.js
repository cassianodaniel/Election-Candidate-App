
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
        table.increments();
        table.string('autor').notNullable();
        table.string('imagem').notNullable();
        table.string('descricao').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
