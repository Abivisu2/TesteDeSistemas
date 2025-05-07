class ConversorTemperatura {
    celsiusParaFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    verificarTemperatura(latitude, longitude) {
        if (latitude > 90 || latitude < -90 || longitude > 180 || longitude < -180){ 
            throw new Error("Latitude ou longitude inválido")
        }
        let temperatura = this.obterTemperaturaPorLocalizacao(latitude, longitude)
        return {
            "fahrenheit": this.celsiusParaFahrenheit(temperatura),
            "celsius": temperatura
        }
    }

    obterTemperaturaPorLocalizacao(latitude, longitude) {
        // Simula chamada externa para buscar a temperatura baseada em localização
        console.log(`Buscando temperatura para lat: ${latitude}, lon: ${longitude}`);
        return 25; // Temperatura fictícia
    }
}

module.exports = ConversorTemperatura;
