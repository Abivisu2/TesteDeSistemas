const ContaCorrente = require("./classes/ContaCorrente")

describe("teste de conta corrente", () => {

    //Given - Dado
    beforeEach(()=>{
        Maria = new ContaCorrente("Maria", 200);
        Jose = new ContaCorrente("Jose", 100);
    })

    test('testar se as contas foram criadas corretamente', () => {
      expect(Maria).not.toBeNull()
      expect(Jose).not.toBeNull()
    })

    test('Testar se o saldo das contas de Maria é diferente da conta de Jose', () => {  
      expect(Maria.balanco).not.toBe(Jose.balanco);
    })
    
    test('Testar se Ao realizar um saque de R$100 na conta da Maria, o valor de saldo será igual ao saldo do José;', () => {
        Maria.sacar(100)  
        expect(Maria.balanco).toBe(Jose.balanco);
    })
    
    test('Testar se Ao realizar um depósito na conta do José, de R$50, o saldo na sua conta será igual a R$50 a menos o saldo na conta da Maria.', () => {
       Jose.depositar(50)
      expect(Jose.balanco).toBe(Maria.balanco - 50);
    })
    
    test('Testar se Ao tentar sacar um valor acima do disponível em conta vai retornar False.', () => {
      expect(Maria.sacar(300)).toBeFalsy()
      expect(Jose.sacar(200)).toBeFalsy()
    })

    test('Testar se Ao Ao tentar sacar um valor disponível, vai retornar True.', () => {      
        expect(Maria.sacar(100)).toBeTruthy()
        expect(Jose.sacar(100)).toBeTruthy()
    })
    
    

})