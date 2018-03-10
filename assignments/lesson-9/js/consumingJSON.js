var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL );
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  console.log( townData );
  showTownData( townData );
}

function showTownData( townData ) {
    var towns = townData['towns']
    for( var i = 0; i < towns.lenght; i++ ) {
        var article = document.createElement( article );

        var title = document.createElement( h1 );
        var motto = document.createElement( h2 );
        var yearFounded = document.createElement('p');
        var currentPopulation = document.createElement('p');
        var averageRainfall = document.createElement('p');
        title.textContent = townData['name'];
        motto.textContent = townData['motto'];
        yearFounded.textContent = townData['yearFounded'];
        currentPopulation.textContent = townData['currentPopulation'];
        averageRainfall.textContent = townData['averageRainfall'];

        article.appendChild( title );
        article.appendChild( motto );
        article.appendChild( yearFounded );
        article.appendChild( currentPopulation );
        article.appendChild( averageRainfall );

        section.appendChild( article );
    }
}