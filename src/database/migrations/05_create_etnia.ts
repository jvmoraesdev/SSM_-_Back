import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('etnia', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('etnia');
}