let cityInputForm = document.querySelector(".citySearchForm");
let cityInputField = document.querySelector(".citySearchInput");





// Gathers api data from this endpoint
var getOpenWeatherData = function(city) {
    var endPoint = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
    fetch(endPoint).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
  })
};

// Handles the form submit
var citySubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputField.value.trim();
    if (cityName) {
       getOpenWeatherData(cityName);
       localStorage.setItem("City Search", cityName);
    } else {
        alert("Please enter a valid city.");
    }
};

// Submit Event for the City Search Form
  cityInputForm.addEventListener("submit", citySubmitHandler);