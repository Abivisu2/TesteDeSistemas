class ConversorTemperatura {
    celsiusParaFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}

module.exports = ConversorTemperatura;
