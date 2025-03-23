const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWe
const apiKey = 'your_api_key_here'; // Replace with your OpenWeather API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found');
            return;
        }

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.style.display = 'block';
    } catch (error) {
        alert('Error fetching weather data');
    }
});
