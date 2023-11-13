import knex from 'knex';

export async function seed(knex: knex.Knex) {
    await knex('tipo_usuario').insert([
        { descricao: 'Padrão' },
        { descricao: 'Agente de Saúde' },
        { descricao: 'Laboratório' },
        { descricao: 'Médico' },
        { descricao: 'Administrador' },
    ])
}