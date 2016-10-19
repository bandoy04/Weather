$(document).ready(function() {
    getWeather(); //Get the initial weather.
    setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

function getWeather() {
    $.simpleWeather({
        woeid: '1096823', // WOEID Location
        location: '',
        unit: 'c',
        success: function(weather) {
            var newDate = new Date();
            var formattedDate = newDate.format("dddd, mmmm dS");
            html = '<div class="weatherimage"><img src="' + weather.image + '"> </div>'
            html += '<div class="currentweather">' + weather.temp + '&deg;' + weather.units.temp + '</div>';
            html += '<div class="currentDate">' + formattedDate + '</div>';
            html += '<div class="forecast">'

            for (var i = 0; i < 5; i++) {
                html += '<div class="forecast' + [i] + '"><img src="' + weather.forecast[i].thumbnail + '"> <br>' + weather.forecast[i].day + ' - ' + weather.forecast[i].text + '<br> High: ' + weather.forecast[i].high + '&deg;C <br> Low: ' + weather.forecast[i].low + '&deg;C <br> </div>';
            }

            html += '</div>'

            $("#mainDiv").html(html);
        },
        error: function(error) {
            $("#mainDiv").html('<p>' + error + '</p>');
        }
    });
}
