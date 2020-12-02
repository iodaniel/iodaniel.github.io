const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=8eba9b61b1d76000625d0f19841e6bcb";


fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);


    var iconcode = jsObject.weather[0].icon;

    const curtemp = document.querySelector('#current-temp');
    const source = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

   curtemp.innerHTML = jsObject.main.temp;
    

   source.textContent = 'https://openweathermap.org/img/w/' + iconcode + '.png';
   const iconsrc = 'https://openweathermap.org/img/w/' + iconcode + '.png';
   weathericon.setAttribute('src', iconsrc);
   weathericon.setAttribute('alt', jsObject.weather[0].description);
});
