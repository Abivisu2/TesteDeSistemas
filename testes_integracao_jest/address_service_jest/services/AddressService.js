const AddressProvider = require('./AddressProvider');

class AddressService {
    // Método para obter um endereço a partir de um CEP
    static obterEndereco(cep) {
        if (!/^\d{8}$/.test(cep)) {
            throw new Error("CEP inválido! Deve conter 8 dígitos numéricos.");
        }

        return EnderecoProvider.buscarEnderecoPorCEP(cep);
    }
}

module.exports = AddressService;
