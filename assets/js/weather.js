

// Gathers api data from this endpoint
var getOpenWeatherData = function(city) {
    var endPoint = "https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
    fetch(endPoint).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
  })
};
getOpenWeatherData();