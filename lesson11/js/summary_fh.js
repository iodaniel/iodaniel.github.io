const newLocal = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=8eba9b61b1d76000625d0f19841e6bcb";
const apifh = newLocal;
//request api for the current weather information. 
fetch(apifh)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    //get element by ID and render to the API value
    document.getElementById('curtemp').textContent = jsObject.weather[0].description;
    document.getElementById('hightemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;


});