import knex from 'knex';

export async function up(knex: knex.Knex) {
    return knex.schema.createTable('anamnese', (table) => {
        table.increments('id').primary();
        table.timestamp('data').notNullable();
        table.string('motivo').notNullable();
        table.boolean('realizou_papanicolau').notNullable();
        table.integer('ano_ultimo_papanicolau', 4);
        table.boolean('diu').notNullable();
        table.boolean('gravidez');
        table.boolean('anticoncepcional').notNullable();
        table.boolean('hormonio_remedio_menopausa').notNullable();
        table.boolean('radioterapia').notNullable();
        table.timestamp('ultima_menstruacao').notNullable();
        table.boolean('sangramento_ultima_relacao').notNullable();
        table.boolean('sangramento_menopausa');
    });
}

export async function down(knex: knex.Knex) {
    return knex.schema.dropTable('anamnese');
}