const GeometriaService = require("./classes/GeometriaService");

describe("Testes para serviços geometricos", () => {

        service = new GeometriaService();

    test("Deve testar Ao calcular a área do triângulo de base 2.0 e altura 2.0 deve ser obtido o valor 2.0 de área.", ()=>{
        resultado = service.areaTriangulo(2.0, 2.0)
        expect(resultado).toBeCloseTo(2.0)
    })

    test("Deve testar Ao calcular a área de um círculo de raio 2.0 deve ser retornado o valor 12.6 de área com precisão de 0.1.", ()=>{
        resultado = service.areaCircunferencia(2.0)
        expect(resultado).toBeCloseTo(12.6, 0.1)
    })

    test("Deve testar Ao calcular a área de um quadrado de lado 2.0 deve ser retornado o valor 4.0 de área.", ()=>{
        resultado = service.areaQuadrado(2.0)
        expect(resultado).toBeCloseTo(4.0)
    })

    test("Deve testar Ao calcular a área de um retângulo de lados 2.0 e 3.0 deve ser retornado o valor de 6.0 de área.", ()=>{
        resultado = service.areaRetangulo(2.0, 3.0)
        expect(resultado).toBeCloseTo(6.0)
    })

    test("Deve testar Ao calcular o volume de um cubo de lado 2.0 deve ser retornado o valor 8.0.", ()=>{
        resultado = service.volumeCubo(2.0)
        expect(resultado).toBeCloseTo(8.0)
    })

    test("Deve testar Ao calcular o volume de um cilindro de raio 2.0 e altura 2.0 deve ser retornado o valor de 25.1 com precisão de 0.1.", ()=>{
        resultado = service.volumeCilindro(2.0, 2.0)
        expect(resultado).toBeCloseTo(25.1, 0.1)
    })

    test("Deve testar Ao calcular o volume de uma esfera de raio 2.0 deve ser retornado o valor de 33.5 com precisão de 0.1.", ()=>{
        resultado = service.volumeEsfera(2.0)
        expect(resultado).toBeCloseTo(33.5, 0.1)
    })
})