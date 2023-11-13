import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('escolaridade', (table) => {
        table.increments('id').primary();
        table.string('descricao').notNullable();
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('escolaridade');
}