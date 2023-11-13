import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('exame', (table) => {
        table.increments('id').primary();
        table.boolean('status').notNullable();
        table.integer('id_requisicao')
            .notNullable()
            .references('id')
            .inTable('requisicao');
        table.string('resultado_PDF');
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('exame');
}