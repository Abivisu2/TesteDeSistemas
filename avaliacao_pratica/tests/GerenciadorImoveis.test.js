const GerenciadorImoveis = require("../classes/GerenciadorImoveis");

describe("Testes unitários das funções de cadastro e busca de imóveis", () => {
    let gerenciadorImoveis;

    beforeEach(() => {
        gerenciadorImoveis = new GerenciadorImoveis();
    });

    describe("Teste para adicionar Imoveis na lista.", () => {

        test("Teste para adicionar um imóvel válido.", () => {
            const imovel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "Carvoeira",
                preco: 1000,
                status: "disponível"
            };

            gerenciadorImoveis.adicionarImovel(imovel);

            const imoveis = gerenciadorImoveis.listarImoveis();
            expect(imoveis.length).toBe(1);
        });

        test("Teste para dar erro ao adicionar um imóvel com endereço inválido", () => {
            const imovel = {
                endereco: "",
                bairro: "Carvoeira",
                preco: 1000,
                status: "disponível"
            };

            expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Endereço inválido.");
        });

        test("Teste para dar erro ao adicionar um imóvel com preço negativo ou igual a zero", () => {
            const imovel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "Carvoeira",
                preco: 0,
                status: "disponível"
            };

            expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Preço inválido. Deve ser um número maior que zero.");
        });

        test("Teste para dar erro ao adicionar status diferente de 'disponível' ou 'indisponível'", () => {
            const imovel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "Carvoeira",
                preco: 1000,
                status: "Alugado"
            };

            expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Status inválido. Deve ser 'disponível' ou 'indisponível'.");
        });

        test("Teste para dar erro ao adicionar bairro inválido", () => {
            const imovel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "",
                preco: 1000,
                status: "disponível"
            };

            expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Bairro inválido.");
        });
    });

    describe("Teste para buscar imoveis por Bairro", () => {

        test("Teste que retorna imóveis de um bairro específico.", () => {
            const primeiroImovel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "Carvoeira",
                preco: 1000,
                status: "disponível"
            };
            const segundoImovel = {
                endereco: "Rua joão Motta esperzim, 945",
                bairro: "Saco dos Limões",
                preco: 500,
                status: "indisponível"
            };

            gerenciadorImoveis.adicionarImovel(primeiroImovel);
            gerenciadorImoveis.adicionarImovel(segundoImovel);

            const resultado = gerenciadorImoveis.buscarImoveisPorBairro("Saco dos Limões");

            expect(resultado.length).toBe(1);
            expect(resultado[0]).toEqual(segundoImovel);
        });

        test("Teste para retornar vazio caso não houver imóveis no bairro", () => {
            const imovel = {
                endereco: "Rua joão Motta esperzim, 945",
                bairro: "Saco dos Limões",
                preco: 500,
                status: "disponível"
            };

            gerenciadorImoveis.adicionarImovel(imovel);

            const resultado = gerenciadorImoveis.buscarImoveisPorBairro("Trindade");

            expect(resultado.length).toBe(0);
        });
    });

    describe("Teste que serve para listar imoveis disponiveis", () => {

        test("Teste que retorna imóveis com status 'disponível'.", () => {
            const imovelDisponivel = {
                endereco: "Rua Capitão Romualdo de Barros, 10",
                bairro: "Carvoeira",
                preco: 1000,
                status: "disponível"
            };
            const imovelIndisponivel = {
                endereco: "Rua joão Motta esperzim, 945",
                bairro: "Saco dos Limões",
                preco: 500,
                status: "indisponível"
            };

            gerenciadorImoveis.adicionarImovel(imovelDisponivel);
            gerenciadorImoveis.adicionarImovel(imovelIndisponivel);

            const resultado = gerenciadorImoveis.listarImoveisDisponiveis();

            expect(resultado.length).toBe(1);
            expect(resultado[0]).toEqual(imovelDisponivel);
        });

        test("Teste que retorna lista vazia se não houver imóveis disponíveis", () => {
            const imovel = {
                endereco: "Rua joão Motta esperzim, 945",
                bairro: "Saco dos Limões",
                preco: 500,
                status: "indisponível"
            };

            gerenciadorImoveis.adicionarImovel(imovel);

            const resultado = gerenciadorImoveis.listarImoveisDisponiveis();

            expect(resultado.length).toBe(0);
        });
    });
});
