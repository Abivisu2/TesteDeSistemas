const Calculadora = require("./classes/Calculadora")

describe("Teste da calculadora", () => {

    test("Deve somar dois números com sucesso", () => {
    
        //Given - Dado
        calc = new Calculadora()
    
        //When - Quando
        resultado = calc.somar(2, 3);
    
        //Then - Então
        expect(resultado).toBe(5)
    
    })

    test("Deve subtrair dois números com sucesso", () => {
    
        //Given - Dado
        calc = new Calculadora()
    
        //When - Quando
        resultado = calc.subtrair(6, 3);
    
        //Then - Então
        expect(resultado).toBe(3)
    
    })

    test("Deve multiplicar dois números com sucesso", () => {
    
        //Given - Dado
        calc = new Calculadora()
    
        //When - Quando
        resultado = calc.multiplicar(6, 3);
    
        //Then - Então
        expect(resultado).toBe(18)
    
    })

    it("Deve dividir dois números com sucesso", () => {
    
        //Given - Dado
        calc = new Calculadora()
    
        //When - Quando
        resultado = calc.dividir(6, 3);
    
        //Then - Então
        expect(resultado).toBe(2)
    
    })

})

//O que se espera do teste pode ser executado tanto com o *test*, quanto com o *it*. 