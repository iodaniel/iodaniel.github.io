const requestURL = "https://iodaniel.github.io/json/porfolio.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const porfolio = jsonObject['tour'];

        for (let i = 0; i < porfolio.length; i++) {

                let card = document.createElement('section');
                let name = document.createElement('h2');
                let image = document.createElement('img');
                
                let type = document.createElement('p');
                let description = document.createElement('p');
                let cost_person = document.createElement('p');
                let cost_group= document.createElement('p')
               

                let button= document.createElement('button');
                let anchor = document.createElement('a');
                
                

                image.setAttribute('src', 'images/' + porfolio[i].photo);
                image.setAttribute('alt', name.textContent + '-' + porfolio[i].order);
                card.appendChild(image);

                name.textContent = porfolio[i].name;
                card.appendChild(name);
                
                 type.textContent ="Your adventure will be by" +' '+porfolio[i].type;
                 card.appendChild(type);
                
                description.textContent = 'Your tour will provide an extrem experience with' + ' ' + porfolio[i]. description;
                card.appendChild(description);
                
                cost_person.textContent = 'Cost per person:'+ ' ' + porfolio[i].cost_person;
                card.appendChild(cost_person);

                cost_group.textContent = 'Cost per group:' + ' ' + porfolio[i].cost_group;
                card.appendChild(cost_group);

              
              //  population.textContent = 'Population:' + ' ' + cities[i].currentPopulation;
              //  card.appendChild(population);
                anchor.textContent = porfolio[i].anchor;
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

                // esta implementacion genera algo de conflicto con cada una de las tarjetas. 
                


                //a.appendChild(document.createTextNode())
                
             // a href='reservation.html'><button class='myButton'>Book Now</button>
               // rain.textContent = 'Annual Rain Fall:' + ' ' + cities[i].averageRainfall;
              //  card.appendChild(rain);
              
                document.querySelector('div.cards').appendChild(card);
            
        }
    });
 