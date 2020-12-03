const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//request URL 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const cities = jsonObject['towns'];

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == 'Preston' || cities[i].name == 'Fish Haven' || cities[i].name == 'Soda Springs') {
                
                let card = document.createElement('section');
                let h3 =document.createElement('h3');              
                let event = document.createElement('p');
             

                h3.textContent = "New events"
                card.appendChild(h3)

                event.textContent = cities[i].events;
                card.appendChild(event);
                
                
                
                document.querySelector('div.events').appendChild(card);
            }
        }
    });