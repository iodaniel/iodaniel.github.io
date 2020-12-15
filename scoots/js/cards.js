const requestURL = "https://iodaniel.github.io/scoots/json/vehicles.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const vehicle = jsonObject['rental'];

        for (let i = 0; i < vehicle.length; i++) {

                let card = document.createElement('section')
                let name = document.createElement('h2')
                let image = document.createElement('img');
                let crew = document.createElement('p')

                let walkhalf = document.createElement('p');
                let walkfull = document.createElement('p');
                let reservationhalf= document.createElement('p')
                let reservationfull = document.createElement('p');
                let button= document.createElement('button');
                let anchor = document.createElement('a');
                
                

                image.setAttribute('src', 'images/' + vehicle[i].photo);
                image.setAttribute('alt', name.textContent + '-' + vehicle[i].order);
                card.appendChild(image);

                name.textContent = vehicle[i].name;
                card.appendChild(name);
                
                 crew.textContent ="Number of persons:" +' '+vehicle[i].crew;
                 card.appendChild(crew);
                
                walkhalf.textContent = 'Walk-in rent for half day cost:' + ' ' + vehicle[i].walkhalf;
                card.appendChild(walkhalf);
                
                walkfull.textContent = 'Walk-in rent for full day cost:' + ' ' + vehicle[i].walkfull;
                card.appendChild(walkfull);

                reservationhalf.textContent = 'Reservartion rent for full day cost:' + ' ' + vehicle[i].reservationhalf;
                card.appendChild(reservationhalf);

                reservationfull.textContent = 'Reservation rent for full day cost:' + ' ' + vehicle[i].reservationfull;
                card.appendChild(reservationfull);
              //  population.textContent = 'Population:' + ' ' + cities[i].currentPopulation;
              //  card.appendChild(population);
                anchor.textContent = vehicle[i].anchor;
                card.appendChild(anchor);
                
                //anchor.setAttribute("onclick", "return myFunc('" + vehicle[i] + "')");
                //anchor.innerHTML = vehicle[i];
                anchor.href = "reservation.html";
                anchor.appendChild(button)
                button.appendChild(document.createTextNode("Rent Me"));
                //anchor.textContent = vehicle[i].a;
                //button.appendChild(document.createTextNode("Rent Me"));
                //a.setAttribute('href', '#' + vehicle[i].url);
                //button.appendChild(anchor)


                //a.appendChild(document.createTextNode())
                
             // a href='reservation.html'><button class='myButton'>Book Now</button>
               // rain.textContent = 'Annual Rain Fall:' + ' ' + cities[i].averageRainfall;
              //  card.appendChild(rain);
              
                document.querySelector('div.cards').appendChild(card);
            
        }
    });

    