class CadastroPets {
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
            this.validarTipo(pet.tipo);
    }
}

module.exports = CadastroPets;
