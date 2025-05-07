class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        if (!tarefa) throw new Error("Tarefa inválida.");
        this.tarefas.push(tarefa);
    }

    removerTarefa(tarefa) {
        this.tarefas = this.tarefas.filter(t => t !== tarefa);
    }

    listarTarefas() {
        return this.tarefas;
    }
}

module.exports = ListaDeTarefas;
