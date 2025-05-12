const ListaDeTarefas = require("../classes/ListaDeTarefas");

describe("Teste para lista de tarefas", () => {

    test("Tarefa não adicionada", () => {
        const listaTarefas = new ListaDeTarefas();
        let tarefas = ["Lavar", "Comer", "Sair"];
        let taferaCadastrada = "BEBER"

        const resultado = listaTarefas.adicionarTarefa(taferaCadastrada)
        expect(resultado).throw , new Error("Tarefa inválida.");
        
    });
    
})