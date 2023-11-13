import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('usuario', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('pass').notNullable();
        table.integer('id_etinia')
            .notNullable()
            .references('id')
            .inTable('etnia');
        table.string('outra_etnia');
        table.integer('id_tipo_usuario')
            .notNullable()
            .references('id')
            .inTable('tipo_usuario');
        table.string('foto');
        table.integer('cartao_sus').notNullable();
        table.integer('cpf').notNullable();
        table.integer('id_escolaridade')
            .notNullable()
            .references('id')
            .inTable('escolaridade');
        table.integer('id_endereco')
            .notNullable()
            .references('id')
            .inTable('endereco');
        table.integer('id_ubs')
            .notNullable()
            .references('id')
            .inTable('ubs')
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('usuario');
}