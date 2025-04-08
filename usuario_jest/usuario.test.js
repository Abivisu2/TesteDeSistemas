
const User = require("./classes/Usuario");

describe('Teste de usuário', () => {

    test('Cenario 1: Dado que eu passe as informações válidas e obrigatórias, Quando eu chamo o método para cadastrar o usuário, Então devo receber sucesso como true', () => {
        usuario = new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", "88040-600");
        expect(usuario).toBeDefined();
    });

    test('Cenario 2: Dado que eu passe as informações válidas e obrigatórias mas com confirmação de senha diferente da senha, - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "00000000", "88040-600")).toThrow("As senhas não coincidem.");
    });

    test('Cenario 3: Dado que eu passe todas as informações obrigatórias para o cadastro, menos o nome. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "Todos os campos são obrigatórios.', () => {
        expect(() => new User("25879456823", null, "abiskabvisu@gmai.com", "98765432", "98765432", "88040-600"))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 4: Dado que eu passe todas as informações obrigatórias para o cadastro, menos o e-mail. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. E a mensagem de erro como "Todos os campos são obrigatórios.', () => {
        expect(() => new User("25879456823", "Abílio Francisco", null, "98765432", "98765432", "88040-600"))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 5: Dado que eu passe todas as informações obrigatórias para o cadastro, menos a senha. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. E a mensagem de erro como "Todos os campos são obrigatórios."', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", null, "98765432", "88040-600"))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 5.1: Dado que eu passe todas as informações obrigatórias para o cadastro, menos a confirmação de senha. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro.- E a mensagem de erro como "Todos os campos são obrigatórios."', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", null, "88040-600"))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 6: Dado que eu passe todas as informações obrigatórias para o cadastro, menos o CPF. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "Todos os campos são obrigatórios."', () => {
        expect(() => new User(null, "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", "88040-600"))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 7: Dado que eu passe todas as informações obrigatórias para o cadastro, menos o CEP. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "Todos os campos são obrigatórios.', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", null))
            .toThrow("Todos os campos são obrigatórios.");
    });

    test('Cenario 8: Dado que eu passe todas as informações obrigatórias para o cadastro, mas com um e-mail inválido - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "E-mail inválido.', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisugmaicom", "98765432", "98765432", "88040-600"))
            .toThrow("E-mail inválido.");
    });

    test('Cenario 9: Dado que eu passe todas as informações obrigatórias para o cadastro, mas com uma senha de 7 caracteres. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "A senha deve ter pelo menos 8 caracteres."', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "1234567", "1234567", "88040-600"))
            .toThrow("A senha deve ter pelo menos 8 caracteres.");
    });

    test('Cenario 10: Dado que eu passe todas as informações obrigatórias para o cadastro, mas com um CPF inválido. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "Documento deve ser um CPF ou CNPJ válido."', () => {
        expect(() => new User("11111111111", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", "88040-600"))
            .toThrow("Documento deve ser um CPF ou CNPJ válido.");
    });

    test('Cenario 11: Dado que eu passe todas as informações obrigatórias para o cadastro, mas com um CNPJ inválido. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "Documento deve ser um CPF ou CNPJ válido."', () => {
        expect(() => new User("11111111111111", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", "88040-600"))
            .toThrow("Documento deve ser um CPF ou CNPJ válido.");
    });

    test('Cenario 12: Dado que eu passe todas as informações obrigatórias para o cadastro, mas com um CEP inválido. - Quando eu chamo o método para cadastrar o usuário; - Então devo receber um erro. - E a mensagem de erro como "CEP inválido."', () => {
        expect(() => new User("25879456823", "Abílio Francisco", "abiskabvisu@gmai.com", "98765432", "98765432", "88040 600"))
            .toThrow("CEP inválido.");
    });

});
