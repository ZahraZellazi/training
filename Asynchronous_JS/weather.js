
    const apiKey = '075f38c9ab4222e2eaa3f62a1110d8ed';
    const city = 'London';
    function getWeather() {
      const city = document.getElementById('city').value;
      if (!city) {
        alert('Please enter a city name');
        return;
      }

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.cod !== 200) {
            alert('City not found');
            return;
          }
          const weatherDiv = document.getElementById('weather');
          const weatherContent = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
          weatherDiv.innerHTML = weatherContent;
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
