const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//request URL 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const request = jsonObject['prophets'];
    //loop to length the data of JSON 
    for(i=0; i < request.length; i++){

        var h2 = document.createElement('h2'); // data tag of HTML in create Element JS function
        var date = document.createElement('p');
        var place = document.createElement('p');
        var image = document.createElement('img');
        var card= document.createElement('section');

        //use the method textContent to print the JSON data in HTML.
        h2.textContent = request[i].name +' '+ request[i].lastname;
        card.appendChild(h2);

        date.textContent = 'Date of Birth:' + ' ' + request[i].birthdate;
        card.appendChild(date);

        place.textContent = 'Place of Birth:' + ' ' + request[i].birthplace;
        card.appendChild(date);

        image.setAttribute('src', request[i].imageurl);
        card.appendChild(image)

        document.querySelector('div.cards').appendChild(card);

    }





});