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
let weatherDescription = document.querySelector(".w-weatherDes");
let weatherUpdateEl = document.querySelector("#update-btn");


// Gathers api data from this endpoint
var getOpenWeatherData = function (city) {
  var endPoint =
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
  fetch(endPoint).then(function (response) {
    response.json().then(function (data) {
      displayWeatherData(data);
    });
  });
};

// Handles the form submit
var citySubmitHandler = function (event) {
  event.preventDefault();
  var cityName = cityInputField.value.trim();
  localStorage.setItem("citySearch", cityName);
  if (cityName) {
    getOpenWeatherData(cityName);
  } 

};

// Submit Event for the City Search Form
weatherUpdateEl.addEventListener("click", citySubmitHandler);

// Displays data on the page
var displayWeatherData = function (data) {

  citySearched.innerHTML = data.name;
  // localStorage.setItem("citySearch", data.name);

  weatherMain.innerHTML = data.weather[0].main;
  localStorage.setItem("currentWeather", data.weather[0].main);

  weatherDescription.innerHTML = data.weather[0].description;
  localStorage.setItem("currentDescription", data.weather[0].description);

  currentTemp.innerHTML = Math.round(data.main.temp) + " °F";
  localStorage.setItem("currentTemp", Math.round(data.main.temp) + " °F");

  tempRange.innerHTML = Math.round(data.main.temp_max) + " °F / " + Math.round(data.main.temp_min) + " °F";
  localStorage.setItem("currentRange", Math.round(data.main.temp_max) + " °F / " + Math.round(data.main.temp_min) + " °F");

  feelsLikeEl.innerHTML =
    "Feels Like: " + Math.round(data.main.feels_like) + " °F";
  localStorage.setItem("feelsLike", Math.round(data.main.feels_like) + " °F");

  HumidityEl.textContent = "humidity: " + data.main.humidity + " %";
  localStorage.setItem("Humidity", data.main.humidity + " %");

  WindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph";
  localStorage.setItem("windSpeed", data.wind.speed + " mph");

  let weatherIcon = data.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
  iconDisplay.innerHTML = "<img src='http://openweathermap.org/img/w/" + weatherIcon + ".png' class='weather-icon' alt='Icon depicting current weather.'>"
  localStorage.setItem("icon", weatherIcon);
};

//reload from local storage
let reloadWeather = function () {
  if (localStorage.getItem("citySearch") !== null) {
    window.onload = function() {
      citySubmitHandler(event);
    };
  }
};
reloadWeather();

let storeCity = function () {
  cityInputField.value = localStorage.getItem("citySearch");
  weatherMain.value = localStorage.getItem("currentWeather");
  weatherDescription.value = localStorage.getItem("currentDescription");
  currentTemp.value = localStorage.getItem("currentTemp");
  tempRange.value = localStorage.getItem("currentRange");
  feelsLikeEl.value = localStorage.getItem("feelsLike");
  HumidityEl.value = localStorage.getItem("humidity");
  WindSpeedEl.value = localStorage.getItem("windSpeed");
  iconDisplay.value = localStorage.getItem("icon");
};
storeCity();