var section = document.querySelector('section');
var requestURL = 'http://api.wunderground.com/api/a4db95e21bffa11a/conditions/forecast/q/mn/Franklin.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL );
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  console.log( townData );
  showData( townData );
}

function showData ( townData ) {
    var article = document.createElement( 'article' ); {
    var sCurrentWeather = document.createElement( 'p' );
    var currentTemp = document.createElement( 'p' );
    var currentWindSpeed = document.createElement( 'p' );
    var icon = document.createElement( 'img' );
    var textDescrip = document.createElement( 'p' );

    sCurrentWeather.textContent = townData[ 'current_observation' ]['weather'];
    currentTemp.textContent = townData[ 'current_observation' ]['temp_f'];
    currentWindSpeed.textContent = townData[ 'current_observation' ]['wind_mph'];
    icon.setAttribute('src', townData[ 'current_observation' ]['icon_url'] )
    icon.setAttribute('alt', townData[ 'current_observation' ]['icon'] )
    textDescrip.textContent = townData[ 'forecast' ]['txt_forecast']['forecastday'][0]['fcttext'] + ' Low ' 
            townData['forecast'][ 'simpleforecast' ]['forecastday'][0]['low']['fahrenheit'] + ' High ' +
            townData['forecast'][ 'simpleforecast' ]['forecastday'][0]['high']['fahrenheit'];

    }

}