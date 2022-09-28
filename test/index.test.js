const getFile = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('testes com a funcao pega arquivos', () => {
    it('deve ser uma funcao', () => {
        expect(typeof getFile).toBe('function');
    });
    it('deve retornar um array com resultados', async () => {
        const result = await getFile('test/arquivos/texto1.md');
        expect(result).toEqual(arrayResult)
    });
    it('verficar se a mensagem "Não há links no texto" aparece', async () => {
        const result = await getFile('test/arquivos/texto1_sem_links.md');
        expect(result).toBe("Não há links no texto")
    });
})
