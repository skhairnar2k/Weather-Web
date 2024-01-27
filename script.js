document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '38fea22087b523d3c574ba6ba9f7c0f1';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    async function getWeatherData(city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function updateWeatherUI(data) {
        const locationElem = document.getElementById('location');
        const temperatureElem = document.getElementById('temperature');
        const descriptionElem = document.getElementById('description');

        locationElem.textContent = `${data.name}, ${data.sys.country}`;
        temperatureElem.textContent = `${data.main.temp}°C`;
        descriptionElem.textContent = data.weather[0].description;
    }

    async function init() {
        const defaultCity = 'Ulhasnagar, IN';
        const weatherData = await getWeatherData(defaultCity);

        if (weatherData) {
            updateWeatherUI(weatherData);
        }
    }

    init();
});
