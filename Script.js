JavaScript (in script.js file)
```
// Get input elements
const temperatureInput = document.getElementById("temperature");
const humidityInput = document.getElementById("humidity");
const windSpeedInput = document.getElementById("wind-speed");

// Get calculate button
const calculateBtn = document.getElementById("calculate-btn");

// Get result element
const weatherResult = document.getElementById("weather-result");

// Add event listener to calculate button
calculateBtn.addEventListener("click", calculateWeather);

// Function to calculate weather
function calculateWeather() {
    // Get input values
    const temperature = parseFloat(temperatureInput.value);
    const humidity = parseFloat(humidityInput.value);
    const windSpeed = parseFloat(windSpeedInput.value);

    // Calculate weather
    let weather;
    if (temperature > 25 && humidity > 60) {
        weather = "Hot and Humid";
    } else if (temperature < 15 && humidity < 40) {
        weather = "Cold and Dry";
    } else if (windSpeed > 10) {
        weather = "Windy";
    } else {
        weather = "Normal";
    }

    // Display result
    weatherResult.innerText = `Weather: ${weather}`;
}
```
