class AgendamentoConsulta {
  constructor() {
    this.consultas = [];
  }

  agendarConsulta(paciente, data) {
    if (!paciente || !data) {
      throw new Error("Paciente e data são obrigatórios.");
    }

    if (!this.dataValida(data)) {
      throw new Error("Data inválida.");
    }

    if (!this.dataFutura(data)) {
      throw new Error("A data deve ser futura.");
    }

    this.consultas.push({ paciente, data });
  }

  cancelarConsulta(paciente) {
    this.consultas = this.consultas.filter(c => c.paciente !== paciente);
  }

  listarConsultas() {
    return this.consultas;
  }

  dataValida(data) {
    const dataObj = new Date(data);
    return !isNaN(dataObj.getTime());
  }

  dataFutura(data) {
    const agora = new Date();
    const dataObj = new Date(data);
    return dataObj.getTime() > agora.getTime();
  }
}

module.exports = AgendamentoConsulta;
