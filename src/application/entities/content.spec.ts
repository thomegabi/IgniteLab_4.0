import { Content } from "./content"

describe('Notification content', () =>{ // Criação de uma categoria de notificações
    it('should be able to create a notification content', () => { // É possivel fazer testes usando o test ou it, ja que geralmente é a primeira palavra de um teste
        const content = new Content('Você recebeu uma solicitação de amizade!');
    
        expect(content).toBeTruthy(); // Esse comando serve para testar se vai receber uma resposta verdadeira, mais informações pesquise 
    }); // Encerra o primeiro teste
    
    it('should not be able to create a notification with less than 5 characters', () => {
        expect(() => new Content('www')).toThrow(); // teste de erro e criação da variavel dentro do expect
    }); // Encerra o segundo teste
    
    test('should not be able to create a notification with more than 240 characters', () => {
        expect(() => new Content('w'.repeat(241))).toThrow(); // teste de erro usando função repeat do js, que repete um caractere
    });
})



