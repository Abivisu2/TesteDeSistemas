const CadastroPets = require("../classes/CadastroPets")

describe("Teste para o cadastro de Pets", () => {
    test("Validar nome", () =>{
         //GIVE - DADO
        const cadastroPets = new CadastroPets();
        const nome = "Jaime"
        //Quando - WHEN
        const resultado = cadastroPets.validarNome(nome);
        //Então - THEN
        expect(resultado).toBe(true)
    })

    test("Teste para validar a Idade", () => {
        // Give
        const cadastroPets = new CadastroPets();
        const idade = 2
        // WHEN
        const resultado = cadastroPets.validarIdade(idade);
        // ENTÃO
        expect(resultado).toBe(true)
    })

    test("Teste para validar tipo de animal", () => {
        // GIVE
        const cadastroPets = new CadastroPets();
        const tiposValidos = ['cachorro', 'gato', 'pássaro', 'roedor'];
        const tipo = "cachorro"
        // WHEN
        const resultado = cadastroPets.validarTipo(tipo)
        // THEN
        expect(resultado).toBe(true)
    })

    test("Teste para validar cadastro", () => {
        // Give
        const cadastroPets = new CadastroPets();
        const nome = "Jaime"
        const idade = 2
        const tipo = "gato"
        // WHEN
        const nomeValido = cadastroPets.validarNome(nome)
        const idadeValida = cadastroPets.validarIdade(idade)
        const tipoValido = cadastroPets.validarTipo(tipo)
        const cadastroCompleto = nomeValido && idadeValida && tipoValido
        // ENTÃO
        expect(cadastroCompleto).toBe(true)
    })
})