var temp = 78;
var wind = 25;

document.querySelector(".windSpeed").innerHTML = wind;
document.querySelector(".temp").innerHTML = temp;

function getWindChill(temp, wind) {

    return  Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));  
    }
    document.querySelector(".windChill").innerHTML = getWindChill(temp, wind);
