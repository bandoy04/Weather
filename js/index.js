$(document).ready(function() {
    getWeather(); //Get the initial weather.
    setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

// var d = new Date();
// document.getElementById("currentDate").innerHTML = d;

var newDate = new Date();
var formattedDate = newDate.format("dddd, mmmm dS");

function getWeather() {
    $.simpleWeather({
        woeid: '22721202', 
        location: '',
        unit: 'c',
        success: function(weather) {
            html = '<div class="weatherimage"><img src="' + weather.image + '"> </div>'
            html += '<div class="currentweather"><h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2> </div>';
            html += '<div class="currentDate">' + formattedDate + '</div>';
            
            //       html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            //       html += '<li class="currently">'+weather.currently+'</li></div>';

            html += '<div class="forecast">'
            for (var i = 0; i < 4; i++) {
                html += '<img src="' + weather.forecast[i].thumbnail + '"> <br>' + weather.forecast[i].day + ' - ' + weather.forecast[i].text + '<br> High: ' + weather.forecast[i].high + '&deg;C <br> Low: ' + weather.forecast[i].low + '&deg;C <br>';
            }
            html += '</div>'

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}