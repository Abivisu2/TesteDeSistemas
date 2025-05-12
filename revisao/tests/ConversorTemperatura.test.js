const ConversorTemperatura = require("../classes/ConversorTemperatura");

describe("Teste para o conversor de Temperatura", () => {

    test("teste para conversão bem sucedidad", () => {
        // Dado-Given
        const conversaoTemperatura = new ConversorTemperatura();
        const temperaturaCelsius = 100
        // When - Quando 
        const resultado = conversaoTemperatura.celsiusParaFahrenheit(temperaturaCelsius)
        // Então - Then 
        expect(resultado).toBe(212)
    })

     test("Deve converter 32°F para 0°C com sucesso", () => {
        // Dado-Given
        const conversaoTemperatura = new ConversorTemperatura();
        const temperaturaFahrenheit = 32;
        // When - Quando 
        const resultado = conversaoTemperatura.fahrenheitParaCelsius(temperaturaFahrenheit);
        // Então - Then 
        expect(resultado).toBe(0);
    });
});