import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('estado', (table) => {
        table.integer('id').primary();
        table.string('nome').notNullable();
        table.string('uf', 2).notNullable();
        table.string('pais').notNullable();
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('estado');
}