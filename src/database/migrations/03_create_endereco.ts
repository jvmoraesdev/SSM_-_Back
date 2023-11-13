import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('endereco', (table) => {
        table.increments('id').primary();
        table.integer('id_cidade')
            .notNullable()
            .references('id')
            .inTable('cidade');
        table.string('bairro').notNullable();
        table.string('logradouro').notNullable();
        table.integer('numero').notNullable();
        table.integer('cep').notNullable();
        table.string('referecia');
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('endereco');
}