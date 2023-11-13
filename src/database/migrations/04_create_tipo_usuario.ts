import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('tipo_usuario', (table) => {
        table.increments('id').primary();
        table.string('descricao').notNullable();
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('tipo_usuario');
}