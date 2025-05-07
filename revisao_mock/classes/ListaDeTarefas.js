class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        if (!tarefa) throw new Error("Tarefa inválida.");
        if (this.sincronizarComGoogleCalendar(tarefa)) {
            this.tarefas.push(tarefa);
        }else{
            throw new Error("Não foi possível realizar a sincronização dos dados");
        }
    }

    removerTarefa(tarefa) {
        this.tarefas = this.tarefas.filter(t => t !== tarefa);
    }

    listarTarefas() {
        return this.tarefas;
    }

    sincronizarComGoogleCalendar(tarefa) {
        // Simula envio da tarefa para o Google Calendar
        console.log(`Sincronizando tarefa "${tarefa}" com o Google Calendar.`);
        return true;
    }
}

module.exports = ListaDeTarefas;
