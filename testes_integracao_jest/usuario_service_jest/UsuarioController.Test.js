// Criar testes para:
// 1. Criar usuário quando não encontrar um igual no banco de dados.
// 2. Não criar usuário quando encontrar um igual no banco de dados.
// Para isso utilize mocks para o repositório de usuário (que faz o papel de
// armazenar as informações no banco de dados).

const UsuarioController = require('./controllers/UsuarioController');
const UsuarioRepository = require('./repositories/UsuarioRepository');

describe('Teste para verificar usuario', () => {

    
    test('Usuario criado com sucesso', () => {

        const usuarioRepository = UsuarioRepository();
        const usuarioController = UsuarioController(usuarioRepository);
        
        const usuarioCriado = {
            nome: "Abi",
            email: "abi@skabvisu.com",
            senha: "123",
            documento: "123456789"
        }

        const mockeCreat = jest.spyOn(usuarioRepository, "createUsuario")
        .mockReturnValue(usuarioCriado);
        
        
        const resultado = createUsuario(req)

        expect()
        

    })
})