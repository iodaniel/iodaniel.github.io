const requestURL = "https://iodaniel.github.io/scoots/json/tour.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const tours = jsonObject['tour'];

        for (let i = 0; i < tours.length; i++) {

                let card = document.createElement('section');
                let name = document.createElement('h2');
                let image = document.createElement('img');
                
                let type = document.createElement('p');
                let description = document.createElement('p');
                let cost_person = document.createElement('p');
                let cost_group= document.createElement('p')
               

                let button= document.createElement('button');
                let anchor = document.createElement('a');
                
                

                image.setAttribute('src', 'images/' + tours[i].photo);
                image.setAttribute('alt', name.textContent + '-' + tours[i].order);
                card.appendChild(image);

                name.textContent = tours[i].name;
                card.appendChild(name);
                
                 type.textContent ="Your adventure will be by" +' '+tours[i].type;
                 card.appendChild(type);
                
                description.textContent = 'Your tour will provide an extrem experience with' + ' ' + tours[i]. description;
                card.appendChild(description);
                
                cost_person.textContent = 'Cost per person:'+ ' ' + tours[i].cost_person;
                card.appendChild(cost_person);

                cost_group.textContent = 'Cost per group:' + ' ' + tours[i].cost_group;
                card.appendChild(cost_group);

              
              //  population.textContent = 'Population:' + ' ' + cities[i].currentPopulation;
              //  card.appendChild(population);
                anchor.textContent = tours[i].anchor;
                card.appendChild(anchor);
                
                //anchor.setAttribute("onclick", "return myFunc('" + vehicle[i] + "')");
                //anchor.innerHTML = vehicle[i];
                anchor.href = "reservation.html";
                anchor.appendChild(button)
                button.appendChild(document.createTextNode("Reserve Now"));
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

    