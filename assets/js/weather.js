let cityInputForm = document.querySelector(".citySearchForm");
let cityInputField = document.querySelector(".citySearchInput");
let citySearched = document.querySelector(".w-citySearch");
let currentTemp = document.querySelector(".w-temp");
let tempRange = document.querySelector(".w-maxAndMin");
let iconDisplay = document.querySelector(".w-icons");
let HumidityEl = document.querySelector(".w-moreInfo");
let WindSpeedEl = document.querySelector(".w-windSp");
let feelsLikeEl = document.querySelector(".w-feelsLike");
let weatherMain = document.querySelector(".w-weatherMain");
let weatherDescription = document.querySelector(".w-weatherDes")



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

    citySearched.innerHTML = data.name;
    weatherMain.innerHTML = data.weather[0].main;
    weatherDescription.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = Math.round(data.main.temp) + " °F";
    tempRange.innerHTML = Math.round(data.main.temp_max) + " °F / " + Math.round(data.main.temp_min) + " °F";
    feelsLikeEl.innerHTML ="Feels Like: " + Math.round(data.main.feels_like) + " °F"
    HumidityEl.textContent = "Humidity: " + data.main.humidity + " %";
    WindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph";

    let weatherIcon = data.weather[0].icon;
    iconDisplay.textContent = weatherIcon;
    iconDisplay.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIcon + ".png");
  };