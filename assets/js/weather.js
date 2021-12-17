let cityInputForm = document.querySelector(".citySearchForm");
let cityInputField = document.querySelector(".citySearchInput");
let citySearched = document.querySelector(".w-citySearch");
let weatherDescription = "";
let currentTemp = document.querySelector(".w-temp");
let iconDisplay = document.querySelector(".w-icons");
let Humidity = document.querySelector(".w-moreInfo");


// Gathers api data from this endpoint
var getOpenWeatherData = function(city) {
    var endPoint = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
    fetch(endPoint).then(function(response) {
    response.json().then(function(data) {
        displayWeatherData(data);
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


  // Displays data on the page
  var displayWeatherData = function(data) {
    console.log(data);

    citySearched.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description;
    currentTemp.textContent = Math.round(data.main.temp) + " °F";
    Humidity.textContent = "Humidity: " + data.main.humidity + "%";

    let weatherIcon = data.weather[0].icon;
    iconDisplay.textContent = weatherIcon;
    iconDisplay.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIcon + ".png");
  };