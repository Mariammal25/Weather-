const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temp = data.main.temp;
                const description = data.weather[0].description;

                document.getElementById('city-name').textContent = cityName;
                document.getElementById('temperature').textContent = `${temp}°C`;
                document.getElementById('description').textContent = description;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve weather data!');
        });
}
