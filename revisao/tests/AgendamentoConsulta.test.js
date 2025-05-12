const AgendamentoConsulta = require("../classes/AgendamentoConsulta")

describe("Testes de agendamento de consulta", () => {

    test("retorna data valida", () => {
        //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta();
        const dataValida = "2025-04-28"
        //When - Quando
        const resultado = agendamentoConsulta.dataValida(dataValida)
        //Then - Então
        expect(resultado).toBe(true)
    })

    test("retorna data inválida", () => {
        //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta();
        const dataInvalida = "2025-04-35"
        //When - Quando
        const resultado = agendamentoConsulta.dataValida(dataInvalida)
        //Then - Então
        expect(resultado).toBe(false)
    })

    test("Testar se a data está no futuro", () => {
        //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta();
        // outra forma de resolver para garantir que sempre vai estar no futuro
        const ano = new Date().getFullYear() 
        const data = `${ano + 1}-05-1`
        // const dataFutura = "2025-05-01"
        //When - Quando
        const resultado = agendamentoConsulta.dataFutura(data)
        //Then - Então
        expect(resultado).toBe(true)
    })

    test("Testar se a data não está no futuro", () => {
        //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta();
        const data = "2025-04-01"
        //When - Quando
        const resultado = agendamentoConsulta.dataFutura(data)
        //Then - Então
        expect(resultado).toBe(false)
    })

    test("Testar se possui agendamento e se lista agendamento", () => {
        //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta();
        const ano = new Date().getFullYear() 
        const dataFutura = `${ano + 1}-05-1`
        const paciente = "João"
        //When - Quando
        agendamentoConsulta.agendarConsulta(paciente, dataFutura)
        const resultado = agendamentoConsulta.listarConsultas()
        //Then - Então
        expect(agendamentoConsulta.consultas.length).toBe(1)
        expect(resultado.length).toBe(1)
    })

    test("Teste para Cancelar consulta", () => {
         //Give - Dado
        const agendamentoConsulta = new AgendamentoConsulta()
        const ano = new Date().getFullYear() 
        const dataFutura = `${ano + 1}-05-1`
        const paciente = "Abilio"
        //When - Quando
        agendamentoConsulta.agendarConsulta(paciente, dataFutura);
        agendamentoConsulta.cancelarConsulta(paciente);
        resultado = agendamentoConsulta.listarConsultas();

        //Então - THEN
        expect(resultado.length).toBe(0)
    })


})

