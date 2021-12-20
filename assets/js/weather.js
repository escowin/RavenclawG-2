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
  if (cityName) {
    getOpenWeatherData(cityName);
    localStorage.setItem("City Search", cityName);
  } else {
    alert("Please enter a valid city.");
  }
};

// Submit Event for the City Search Form
weatherUpdateEl.addEventListener("click", citySubmitHandler);

// Displays data on the page
var displayWeatherData = function (data) {
  console.log(data);

  citySearched.innerHTML = data.name;
  localStorage.setItem("citySearch", data.name);

  weatherMain.innerHTML = data.weather[0].main;
  localStorage.setItem("Current Weather", data.weather[0].main);

  weatherDescription.innerHTML = data.weather[0].description;
  localStorage.setItem("Current Description", data.weather[0].description);

  currentTemp.innerHTML = Math.round(data.main.temp) + " °F";
  localStorage.setItem("Current Temp", Math.round(data.main.temp) + " °F");

  tempRange.innerHTML =
    Math.round(data.main.temp_max) +
    " °F / " +
    Math.round(data.main.temp_min) +
    " °F";
  localStorage.setItem(
    "Current Range",
    Math.round(data.main.temp_max) +
      " °F / " +
      Math.round(data.main.temp_min) +
      " °F"
  );

  feelsLikeEl.innerHTML =
    "Feels Like: " + Math.round(data.main.feels_like) + " °F";
  localStorage.setItem("Feels Like", Math.round(data.main.feels_like) + " °F");

  HumidityEl.textContent = "Humidity: " + data.main.humidity + " %";
  localStorage.setItem("Humidity", data.main.humidity + " %");

  WindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph";
  localStorage.setItem("Wind Speed", data.wind.speed + " mph");

  let weatherIcon = data.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
  iconDisplay.innerHTML = "<img src='http://openweathermap.org/img/w/" + weatherIcon + ".png' alt='Icon depicting current weather.'>";
  localStorage.setItem("Icon", weatherIcon);
};

//reload from local storage

let reloadWeather = function () {
  if (localStorage.getItem("citySearch") !== null) {
    //take citySearch and turn into full weather widget

    console.log("weather reload");
  }
};
reloadWeather();

let storeCity = function () {
  cityInputField.value = localStorage.getItem("City Search");
  weatherMain.value = localStorage.getItem("Current Weather");
  weatherDescription.value = localStorage.getItem("Current Description");
  currentTemp.value = localStorage.getItem("Current Temp");
  tempRange.value = localStorage.getItem("Current Range");
  feelsLikeEl.value = localStorage.getItem("Feels Like");
  HumidityEl.value = localStorage.getItem("Humidity");
  WindSpeedEl.value = localStorage.getItem("Wind Speed");
  iconDisplay.value = localStorage.getItem("Icon");
};
storeCity();
