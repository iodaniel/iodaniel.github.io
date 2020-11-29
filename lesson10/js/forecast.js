const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8eba9b61b1d76000625d0f19841e6bcb";
//call api 
fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

   const forecast = jsObject.list.filter( x => x.dt_txt.includes('18:00:00'));
   console.log(forecast);

    let count = 1

    const weekdays =['Sun', 'Mon', 'Tue', 'Wed','Thur','Fri','Sat'];
    for(let day=0; day < jsObject.list.length; day++){
   // forecast.forEach(x=> {
    let time = jsObject.list[day].dt_txt.substring(11);
    let date = new Date(jsObject.list[day].dt * 1000)
    let weekday = weekdays[date.getDay()];
        if (time == '18:00:00' && count <= 5){
    //        const d = new Date(forecast[day].dt_txt);
        document.getElementById('dayofweek' + count).textContent = weekday;
        document.getElementById('temp' + count).textContent = jsObject.list[day].main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[day].weather[0].icon + '.png';
        const info = jsObject.list[day].weather[0].description;
        document.getElementById('icon' + count).setAttribute('src', imagesrc);
        document.getElementById('icon' + count).setAttribute('alt', info);
        


        count++;
    }//)
    }
});