const api = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&appid=8eba9b61b1d76000625d0f19841e6bcb";
//request api for the current weather information. 
fetch(api)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    //get element by ID and render to the API value
    document.getElementById('curtemp').textContent = jsObject.weather[0].description;
    document.getElementById('hightemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;


});
