class ValidadorSenha {
    validar(senha) {
        if (!senha) {
            return false;
        }

        return this.temTamanhoMinimo(senha) &&
            this.temNumero(senha) &&
            this.temSimbolo(senha) &&
            this.temMaiuscula(senha);
    }

    temTamanhoMinimo(senha) {
        return senha.length >= 8;
    }

    temNumero(senha) {
        return /\d/.test(senha);
    }

    temSimbolo(senha) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    }

    temMaiuscula(senha) {
        return /[A-Z]/.test(senha);
    }
}

module.exports = ValidadorSenha;
