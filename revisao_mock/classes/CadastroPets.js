class CadastroPet {
    validarNome(nome) {
        return typeof nome === 'string' && nome.trim().length > 0;
    }

    validarIdade(idade) {
        return typeof idade === 'number' && idade >= 0;
    }

    validarTipo(tipo) {
        const tiposValidos = ['cachorro', 'gato', 'pássaro', 'roedor'];
        return tiposValidos.includes(tipo.toLowerCase());
    }

    validarCadastro(pet) {
        return this.validarNome(pet.nome) &&
            this.validarIdade(pet.idade) &&
            this.validarTipo(pet.tipo) &&
            this.validarVacinacao(pet);
    }

    validarVacinacao(pet) {
        // Simula verificação de vacinação
        console.log(`Verificando vacinação de ${pet.nome}`);
        return true; // Assumindo que todos estão vacinados para simplificação
    }
}

module.exports = CadastroPet;
