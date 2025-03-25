// Simulated weather data (hardcoded for demonstration purposes)
const weatherData = {
    "New York": {
        temperature: 22,
        humidity: 60,
        description: "Sunny",
    },
    "London": {
        temperature: 16,
        humidity: 75,
        description: "Cloudy",
    },
    "Tamilnadu": {
        temperature: 22,
        humidity: 60,
        description: "Sunny",
    },
    "India": {
        temperature: 42,
        humidity: 50,
        description: "Sunny",
    },
    "Delhi": {
        temperature: 32,
        humidity: 68,
        description: "Sunny",
    },
    "Tokyo": {
        temperature: 18,
        humidity: 80,
        description: "Rainy",
    },
    "Paris": {
        temperature: 20,
        humidity: 65,
        description: "Clear",
    },
    "Sydney": {
        temperature: 25,
        humidity: 50,
        description: "Windy",
    }
};

// Function to get weather data from the hardcoded list
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Check if the city exists in the simulated data
    if (weatherData[city]) {
        displayWeather(weatherData[city], city);
    } else {
        showError("City not found! Please try again.");
    }
}

// Function to display weather data
function displayWeather(data, city) {
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('weather-info').classList.remove('hidden');

    document.getElementById('city-name').textContent = `${city}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('weather-description').textContent = `Weather: ${data.description}`;
}

// Function to show error messages
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').classList.remove('hidden');
    document.getElementById('weather-info').classList.add('hidden');
}

// Adding event listener to the button
document.getElementById('searchButton').addEventListener('click', getWeather);

// Optional: Allow pressing Enter key to trigger search
document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
