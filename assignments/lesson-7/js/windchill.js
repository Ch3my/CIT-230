
var t = 78; // average temp ( high + low / 2 ) in Fahrenheit
var s = 5; // Wind Speed in miles per hour
var f;
f = 35.74 + 0.6215 * t - 35.75 * pow( s, 0.16 ) + 0.4275 * t * pow( s, 0.16 );
document.getElementById("windchill").innerHTML = f;