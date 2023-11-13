import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('ubs', (table) => {
        table.increments('id').primary();
        table.bigInteger('cnes').notNullable();
        table.integer('id_endereco')
            .notNullable()
            .references('id')
            .inTable('endereco');
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('ubs');
}