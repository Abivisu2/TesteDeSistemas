const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioController {
    // Método GET para listar todos os usuários
    async getUsuarios(req, res) {
        try {
            const usuarios = await UsuarioRepository.getUsuarios();
            res.json(usuarios); // Retorna a lista de usuários
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Método POST para criar um novo usuário
    async createUsuario(req, res) {
        const { nome, email, senha, documento } = req.body;

        try {
            const usuario = await UsuarioRepository.createUsuario({
                nome,
                email,
                senha,
                documento,
            });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UsuarioController();
