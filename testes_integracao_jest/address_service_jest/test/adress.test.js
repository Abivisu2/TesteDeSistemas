const AddressProvider = require('../services/AddressProvider')
const AddressService = require ('../services/AddressService')

describe('Testes do addressService',() =>{
    beforeAll(()=>{
        addressService = new AddressService()
        addressProvider = new AddressProvider()
    
        endDummy = {
            cep: '12345-678',
            logradouro: 'Rua Exemplo',
            bairro: 'Centro',
            localidade: 'São Paulo',
            uf: 'SP'
        }
       
    })
    it('CEP válido e endereço retornado com sucesso.', () => {
        cepDummy = 12345678

        const mockCep = jest.spyOn(addressService,'obterEndereco').mockReturnValue(cepDummy)
        const mockReturnEnd = jest.spyOn(addressProvider,'buscarEnderecoPorCEP').mockReturnValue(endDummy)
        //WHEN
        const resultado =  addressService.obterEndereco(cepDummy)
        const resultado2 = addressProvider.buscarEnderecoPorCEP(endDummy)
        //THEN
        expect(mockCep).toHaveBeenCalledWith(cepDummy)
        expect(mockReturnEnd).toHaveBeenCalledWith(endDummy)

    })
    it('CEP válido e endereço não é retornado.', () => {
        let cepDummy = 12345678
        const mockCep = jest.spyOn(addressService,'obterEndereco').mockReturnValue(cepDummy)
        const mockReturnEnd = jest.spyOn(addressProvider,'buscarEnderecoPorCEP').mockImplementation(() =>{throw new Error ("CEP não encontrado.")})
        //WHEN
        const resultado =  addressService.obterEndereco(cepDummy)
       
        //THEN
        expect(mockCep).toHaveBeenCalledWith(cepDummy)
        expect(() => addressProvider.buscarEnderecoPorCEP(endDummy).toThrow("CEP não encontrado."))


    })

    it('CEP inválido.', () => {
        let cepDummy = 12345678
        const mockCep = jest.spyOn(addressService,'obterEndereco').mockImplementation(() => {throw new Error ("CEP inválido! Deve conter 8 dígitos numéricos.")})


        expect(() => addressService.obterEndereco(cepDummy).toThrow("CEP inválido! Deve conter 8 dígitos numéricos."))
        expect(mockCep).not.toHaveBeenCalled()


    })

    it('Erro de conexão com API Via CEP.',() => {
        const mockReturnEnd = jest.spyOn(addressProvider,'buscarEnderecoPorCEP').mockImplementation(() => {throw new Error("Erro ao buscar endereço.")})
    })

    

})