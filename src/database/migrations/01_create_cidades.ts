import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('cidade', (table) => {
        table.integer('id').primary();
        table.string('nome').notNullable();
        table.integer('uf_id')
            .notNullable()
            .references('id')
            .inTable('estado');
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('cidade');
}