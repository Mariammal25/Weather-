// API Key from OpenWeatherMap
const apiKey = "YOUR_API_KEY_HERE";

// Get user's location
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Update HTML elements
            document.getElementById("location").innerText = location;
            document.getElementById("weather-description").innerText = weatherDescription;
            document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
            document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
            document.getElementById("wind-speed").innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => console.error("Error:", error));
});
