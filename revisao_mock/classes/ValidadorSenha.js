class ValidadorSenha {
    validar(senha) {
        if (!senha) {
            return false;
        }

        return this.temTamanhoMinimo(senha) &&
            this.temNumero(senha) &&
            this.temSimbolo(senha) &&
            this.temMaiuscula(senha) &&
            this.verificarSegurancaOnline(senha);
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

    verificarSegurancaOnline(senha) {
        // Simula chamada para serviço externo de verificação de segurança de senha
        console.log(`Verificando segurança da senha "${senha}" online.`);
        return true; // Consideramos segura
    }
}

module.exports = ValidadorSenha;
