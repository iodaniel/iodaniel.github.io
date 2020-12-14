const requestURL = "json/vehicles.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const vehicle = jsonObject['rental'];

        for (let i = 0; i < vehicle.length; i++) {

                let card = document.createElement('section')
                let name = document.createElement('h1')
                let image = document.createElement('img');
                let crew = document.createElement('p')

                let walkhalf = document.createElement('p');
                let walkfull = document.createElement('p');
                let reservationhalf= document.createElement('p')
                let reservationfull = document.createElement('p');
                
                

                image.setAttribute('src', 'images/' + vehicle[i].photo);
                image.setAttribute('alt', name.textContent + '-' + vehicle[i].order);
                card.appendChild(image);

                name.textContent = vehicle[i].name;
                card.appendChild(name);
                
               // h3.textContent = cities[i].motto;
               // card.appendChild(h3);
                
               // year.textContent = 'Year Founded:' + ' ' + cities[i].yearFounded;
              //  card.appendChild(year);
                
              //  population.textContent = 'Population:' + ' ' + cities[i].currentPopulation;
              //  card.appendChild(population);
                
               // rain.textContent = 'Annual Rain Fall:' + ' ' + cities[i].averageRainfall;
              //  card.appendChild(rain);
                
                document.querySelector('div.cards').appendChild(card);
            
        }
    });