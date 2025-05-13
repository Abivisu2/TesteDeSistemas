const GerenciadorImoveis = require("../classes/GerenciadorImoveis");



describe("Implementar testes unitários para a função adicionarImovel com mocks e spies", () => {

    test("CEP válido: imóvel adicionado e notificação enviada", () => {

        const gerenciadorImoveis = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciadorImoveis, "buscarEnderecoPorCep");

        mockBuscarEnderecoPorCep.mockReturnValue({
            logradouro: "Rua capitão Romualdo de barros 10",
            bairro: "Carvoeira",
            localidade: "Florianópolis",
            uf: "SC"
        });

        const spyEnviarNotificacao = jest.spyOn(gerenciadorImoveis, "enviarNotificacao");
        spyEnviarNotificacao.mockImplementation(() => {});

        const imovel = {
            id: 1,
            cep: "88040-600",
            endereco: "Rua capitão Romualdo de barros 10",
            bairro: "Carvoeira",
            preco: 2500,
            status: "disponível",
            proprietarioId: 105
        };

       
        gerenciadorImoveis.adicionarImovel(imovel);

        expect(gerenciadorImoveis.imoveis.length).toBe(1);
        expect(gerenciadorImoveis.imoveis[0].endereco).toBe("Rua capitão Romualdo de barros 10, Carvoeira - Florianópolis/SC");
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88040-600");
        expect(spyEnviarNotificacao).toHaveBeenCalledTimes(1);
        expect(spyEnviarNotificacao).toHaveBeenCalledWith(105, "Seu imóvel em Rua capitão Romualdo de barros 10, Carvoeira - Florianópolis/SC foi cadastrado com sucesso!"
        );
    });

    test("Teste para que retorne um erro na API de CEP: erro tratado e notificação não enviada", () => {

        const gerenciadorImoveis = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciadorImoveis, "buscarEnderecoPorCep");
        mockBuscarEnderecoPorCep.mockImplementation(() => {
            throw new Error("Falha na API de CEP");
        });

        const spyEnviarNotificacao = jest.spyOn(gerenciadorImoveis, "enviarNotificacao");
        spyEnviarNotificacao.mockImplementation(() => {});

        const imovel = {
            id: 2,
            cep: "88040-600",
            endereco: "Rua capitão Romualdo de barros 10",
            bairro: "Carvoeira",
            preco: 3000,
            status: "disponível",
            proprietarioId: 106
        };

        expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Falha na API de CEP");
        expect(gerenciadorImoveis.imoveis.length).toBe(0);
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88040-600");
        expect(spyEnviarNotificacao).not.toHaveBeenCalled();
    });

    test("API de CEP que retorna endereço vazio - cadastro impedido e notificação não enviada", () => {
       
        const gerenciadorImoveis = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciadorImoveis, "buscarEnderecoPorCep");
        mockBuscarEnderecoPorCep.mockReturnValue(null);

        const spyEnviarNotificacao = jest.spyOn(gerenciadorImoveis, "enviarNotificacao");
      

        const imovel = {
            id: 3,
            cep: "88040-600",
            endereco: "Rua capitão Romualdo de barros 10",
            bairro: "Carvoeira",
            preco: 40000,
            status: "disponível",
            proprietarioId: 107
        };

        expect(() => gerenciadorImoveis.adicionarImovel(imovel)).toThrow("Endereço não encontrado para o CEP informado.");
        expect(gerenciadorImoveis.imoveis.length).toBe(0);
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88040-600");
        expect(spyEnviarNotificacao).not.toHaveBeenCalled();
    });
});

