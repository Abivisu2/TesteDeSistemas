// PedidoService.test.js

const PedidoService = require('../classes/PedidoService');
const PagamentoService = require('../classes/PagamentoService');
const NotificacaoService = require('../classes/NotificacaoService');

describe('Teste de Pedido Service', () => {

  test("Fechar pagamento com sucesso", () => {
    // GIVEN - DADO
    const pagamentoService = new PagamentoService();
    const mockPagamento = jest.spyOn(pagamentoService, "processarPagamento")
                              .mockReturnValue(true);

    const notificacaoService = new NotificacaoService();
    const mockNotificacao = jest.spyOn(notificacaoService, "enviarNotificacao");

    const pedidoService = new PedidoService(pagamentoService, notificacaoService);

    let pedidoDummy = {id: 1}

    // WHEN
    const resultado = pedidoService.fecharPedido(pedidoDummy)

    // THEN
    expect(resultado).toBeTruthy()
    expect(mockPagamento).toHaveBeenCalled()
    expect(mockNotificacao).toHaveBeenCalledWith(pedidoDummy)
    // expect(mockNotificacao).toHaveBeenCalledTimeOut()
    // expect(mockNotificacao).toHaveBeenCalled()
  })

  test("pedido realizado com falha", () => {
    // GIVEN - DADO
    const pagamentoService = new PagamentoService();
    const notificacaoService = new NotificacaoService();

    const mockPagamento = jest.spyOn(pagamentoService, "processarPagamento")
                              .mockReturnValue(false);

    const mockNotificacao = jest.spyOn(notificacaoService, "enviarNotificacao");

    const pedidoService = new PedidoService(pagamentoService, notificacaoService);

    const pedidoDummy = {id: 1}

    // // WHEN
    // expect(() => {
    //   pedidoService.fecharPedido(pedido)
    // }).toThrow(`Pedido ${pedido.id} não pôde ser fechado. Pagamento inválido.`)

    // THEN
    expect(() => {
      pedidoService.fecharPedido(pedidoDummy)
    }).toThrow(`Pedido ${pedidoDummy.id} não pôde ser fechado. Pagamento inválido.`)

    expect(mockPagamento).toHaveBeenCalled()
    expect(mockNotificacao).not.toHaveBeenCalled()
  })


});

