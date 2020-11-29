const apiW = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8eba9b61b1d76000625d0f19841e6bcb";

fetch(apiW)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);


  let  temp = document.getElementById('hightemp').textContent = jsObject.main.temp;
  let  wind = document.getElementById('wind').textContent = jsObject.wind.speed;


function getWindChill(temp, wind) {
//function to calculate the wind chill in base of current temperarure and seed
    return  Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));  
    }
    
    document.getElementById("windChill").innerHTML = getWindChill(temp, wind);
    
  });