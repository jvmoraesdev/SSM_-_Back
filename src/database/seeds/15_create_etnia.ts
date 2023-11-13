import knex from 'knex';

export async function seed(knex: knex.Knex) {
    await knex('etnia').insert([
        { nome: 'Amarela' },
        { nome: 'Branca' },
        { nome: 'Indigena' },
        { nome: 'Parda' },
        { nome: 'Preta' },
        { nome: 'Outra' },
    ])
}