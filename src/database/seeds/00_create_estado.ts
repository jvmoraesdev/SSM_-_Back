import knex from 'knex';

export async function seed(knex: knex.Knex) {
    await knex('estado').insert([
        { id: 1, nome: 'Acre', uf: 'AC', pais: 'Brasil' },
        { id: 2, nome: 'Alagoas', uf: 'AL', pais: 'Brasil' },
        { id: 3, nome: 'Amazonas', uf: 'AM', pais: 'Brasil' },
        { id: 4, nome: 'Amapá', uf: 'AP', pais: 'Brasil' },
        { id: 5, nome: 'Bahia', uf: 'BA', pais: 'Brasil' },
        { id: 6, nome: 'Ceará', uf: 'CE', pais: 'Brasil' },
        { id: 7, nome: 'Distrito Federal', uf: 'DF', pais: 'Brasil' },
        { id: 8, nome: 'Espírito Santo', uf: 'ES', pais: 'Brasil' },
        { id: 9, nome: 'Goiás', uf: 'GO', pais: 'Brasil' },
        { id: 10, nome: 'Maranhão', uf: 'MA', pais: 'Brasil' },
        { id: 11, nome: 'Minas Gerais', uf: 'MG', pais: 'Brasil' },
        { id: 12, nome: 'Mato Grosso do Sul', uf: 'MS', pais: 'Brasil' },
        { id: 13, nome: 'Mato Grosso', uf: 'MT', pais: 'Brasil' },
        { id: 14, nome: 'Pará', uf: 'PA', pais: 'Brasil' },
        { id: 15, nome: 'Paraíba', uf: 'PB', pais: 'Brasil' },
        { id: 16, nome: 'Pernambuco', uf: 'PE', pais: 'Brasil' },
        { id: 17, nome: 'Piauí', uf: 'PI', pais: 'Brasil' },
        { id: 18, nome: 'Paraná', uf: 'PR', pais: 'Brasil' },
        { id: 19, nome: 'Rio de Janeiro', uf: 'RJ', pais: 'Brasil' },
        { id: 20, nome: 'Rio Grande do Norte', uf: 'RN', pais: 'Brasil' },
        { id: 21, nome: 'Rondônia', uf: 'RO', pais: 'Brasil' },
        { id: 22, nome: 'Roraima', uf: 'RR', pais: 'Brasil' },
        { id: 23, nome: 'Rio Grande do Sul', uf: 'RS', pais: 'Brasil' },
        { id: 24, nome: 'Santa Catarina', uf: 'SC', pais: 'Brasil' },
        { id: 25, nome: 'Sergipe', uf: 'SE', pais: 'Brasil' },
        { id: 26, nome: 'São Paulo', uf: 'SP', pais: 'Brasil' },
        { id: 27, nome: 'Tocantins', uf: 'TO', pais: 'Brasil' },
    ])
}