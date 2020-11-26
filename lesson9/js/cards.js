const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const cities = jsonObject['towns'];

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == 'Preston' || cities[i].name == 'Fish Haven' || cities[i].name == 'Soda Springs') {

                let image = document.createElement('img');
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                let h3 = document.createElement('h3')
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                

                image.setAttribute('src', 'images/' + cities[i].photo);
                image.setAttribute('alt', h1.textContent + '-' + cities[i].order);
                card.appendChild(image);

                h1.textContent = cities[i].name;
                card.appendChild(h1);
                
                h3.textContent = cities[i].motto;
                card.appendChild(h3);
                
                year.textContent = 'Year Founded:' + ' ' + cities[i].yearFounded;
                card.appendChild(year);
                
                population.textContent = 'Population:' + ' ' + cities[i].currentPopulation;
                card.appendChild(population);
                
                rain.textContent = 'Annual Rain Fall:' + ' ' + cities[i].averageRainfall;
                card.appendChild(rain);
                
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });