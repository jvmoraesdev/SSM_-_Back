import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('requisicao', (table) => {
        table.increments('id').primary();
        table.timestamp('data').notNullable();
        table.string('protocolo_siscan')
        table.integer('id_usuario')
            .notNullable()
            .references('id')
            .inTable('usuario');
        table.integer('id_agente_responsavel')
            .notNullable()
            .references('id')
            .inTable('usuario');
        table.integer('id_ubs')
            .notNullable()
            .references('id')
            .inTable('ubs')
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('requisicao');
}