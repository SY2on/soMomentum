const API_KEY = "edb658387ebf3e34d76df3607dd98bc1";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
      const weatherContainer = document.querySelector("#weather");
      const weather = weatherContainer.querySelector("span:first-child")
      const city = weatherContainer.querySelector("span:nth-child(2)")
      const temp =  weatherContainer.querySelector("span:last-child")
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}℃`;
    })
  }
  function onGeoError(){
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);