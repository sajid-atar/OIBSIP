function validateInput() {
    const input = document.getElementById('temperatureInput').value;
    if (isNaN(input)) {
        alert('Please enter a valid number for temperature.');
        document.getElementById('temperatureInput').value = '';
    }
}

function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = inputTemperature - 273.15;
        convertedUnit = 'Celsius';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}