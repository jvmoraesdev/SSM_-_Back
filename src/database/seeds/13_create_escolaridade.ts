import knex from 'knex';

export async function seed(knex: knex.Knex) {
    await knex('escolaridade').insert([
        { descricao: 'Analfabeto' },
        { descricao: 'Ensino Fundamental Incompleto' },
        { descricao: 'Ensino Fundamental Incompleto' },
        { descricao: 'Ensino Fundamental Completo' },
        { descricao: 'Ensino Medio Incompleto' },
        { descricao: 'Ensino Medio Completo' },
        { descricao: 'Ensino Superior Incompleto' },
        { descricao: 'Ensino Superior Completo' }
    ])
}