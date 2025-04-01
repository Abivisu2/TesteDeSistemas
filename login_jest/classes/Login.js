class Login {
    constructor() {
        this.username = "admin"; // Usuário fixo
        this.password = "1234";  // Senha fixa
    }

    authenticate(inputUser, inputPass) {
        if (inputUser === this.username && inputPass === this.password) {
            return "Login bem-sucedido!";
        } else {
            return "Usuário ou senha incorretos.";
        }
    }
}

module.exports = Login 