function getWeather() {
    //var lat = document.getElementById("lat").value;
    //var lon = document.getElementById("lon").value;
    navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position.coords.latitude, position.coords.longitude);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9eb295ce91fd2b8279988a7caee03753`).then((data) => {
        return data.json();
      }).then((res) => {
        console.log(res);
        document.getElementById("place").innerHTML = res.name
        document.getElementById("generalinfo").innerHTML = res.weather[0].main
        document.getElementById("temp").innerHTML = res.main.temp
      })
    })
  }
  