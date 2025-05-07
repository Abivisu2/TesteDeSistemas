const AgendamentoConsulta = require("../classes/AgendamentoConsulta")

describe("Testes de agendamento de consultas", () => {

    test("Agendamento com CRM do médico válido", () => {
        // GVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamentoConsulta, "validaMedico")
        mockValidaMedico.mockReturnValue(true);

        // Par validar se esses métodos foram chamados
        const spyDataValida = jest.spyOn(agendamentoConsulta, "dataValida")
        const spyDataFutura = jest.spyOn(agendamentoConsulta, "dataFutura")

        // WHEN - QUANDO (AÇÃO)
        agendamentoConsulta.agendarConsulta(crm, paciente, data);
        const listaConsultas = agendamentoConsulta.listarConsultas();

        // THEN - ENTÃO (RESULTADO)
        expect(listaConsultas.length).toBe(1);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);

        expect(spyDataValida).toHaveBeenCalledTimes(1)
        expect(spyDataFutura).toHaveBeenCalledTimes(1)

    })

    test("Agendamento com CRM do médico inválido", () => {
        // GVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamentoConsulta, "validaMedico")
        mockValidaMedico.mockReturnValue(false);
        const spyDataValida = jest.spyOn(agendamentoConsulta, "dataValida")
        const spyDataFutura = jest.spyOn(agendamentoConsulta, "dataFutura")

        // WHEN - QUANDO (AÇÃO)
        expect(() => agendamentoConsulta.agendarConsulta(crm, paciente, data)).toThrow("Médico inválido")

        const listaConsultas = agendamentoConsulta.listarConsultas();

        // THEN - ENTÃO (RESULTADO)
        expect(listaConsultas.length).toBe(0);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);
        expect(spyDataValida).toHaveBeenCalledTimes(0)
        expect(spyDataFutura).toHaveBeenCalledTimes(0)

    })

    test("Agendamento com sistema do CRM offline", () => {
        // GVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamentoConsulta, "validaMedico")
        mockValidaMedico.mockImplementation(() => {throw new Error("CRM Fora do AR");
        });
        const spyDataValida = jest.spyOn(agendamentoConsulta, "dataValida")
        const spyDataFutura = jest.spyOn(agendamentoConsulta, "dataFutura")


        // WHEN - QUANDO (AÇÃO)
        expect(() => agendamentoConsulta.agendarConsulta(crm, paciente, data)).toThrow("CRM Fora do AR")

        const listaConsultas = agendamentoConsulta.listarConsultas();

        // THEN - ENTÃO (RESULTADO)
        expect(listaConsultas.length).toBe(0);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);
        expect(spyDataValida).toHaveBeenCalledTimes(0)
        expect(spyDataFutura).toHaveBeenCalledTimes(0)

    })
})


// Para que ele auto completa
// npm install --save-dev @types/jest