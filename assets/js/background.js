// Global variables defined
let clientID = "T55TOxKxDJMpz91j6fEuSi-nPDhq1TpFAFtB91u4X9o";
let endpoint = ``;
let randomImage = "";
let creatorEl = document.querySelector("#creator");
let settingsEl = document.querySelector("#settings");
let userNameEl = document.querySelector("#user-name");
let updateBtnEl = document.querySelector("#update-btn");
let nameVerifyEl = document.querySelector("#name-verify");
let updateSettingsEl = document.querySelector("#update-settings");
let unsplashLink = "https://www.unsplash.com";
let darkRadBtnEl = document.getElementById("darkMode");
let lightRadBtnEl = document.getElementById("lightMode");
let welcomeEl = document.querySelector("#welcome");
let weatherEl = document.querySelector("#weather");
let sportsEl = document.querySelector("#sports");
let financeEl = document.querySelector("#finance");
let newsEl = document.querySelector("#news");
let creditsEl = document.querySelector("#credits");
let navEl = document.querySelector("#nav");
// colorArray is used to allow dark/light mode to be set to backgrounds of widgets
let colorArray = [
  welcomeEl,
  weatherEl,
  sportsEl,
  financeEl,
  newsEl,
  creditsEl,
  navEl,
];
let mainEl = document.querySelector("#main");
let darkVerifyEl = document.querySelector("#dark-verify");
let dark = "";
let weatherIconEl = document.querySelector("#weather-icon");
let sportsIconEl = document.querySelector("#sports-icon");
let financeIconEl = document.querySelector("#finance-icon");
let newsIconEl = document.querySelector("#news-icon");
// iconArray is used to allow dark/light mode to be set to mobile nav icons
let iconArray = [weatherIconEl, sportsIconEl, financeIconEl, newsIconEl];
let weatherCheckEl = document.querySelector("#weather-check");
let sportsCheckEl = document.querySelector("#sports-check");
let financeCheckEl = document.querySelector("#finance-check");
let newsCheckEl = document.querySelector("#news-check");
let animalsImgCheckEl = document.querySelector("#animalsImg");
let carsImgCheckEl = document.querySelector("#carsImg");
let grafittiImgCheckEl = document.querySelector("#grafittiImg");
let librariesImgCheckEl = document.querySelector("#librariesImg");
let scenicImgCheckEl = document.querySelector("#scenicImg");
let skylinesImgCheckEl = document.querySelector("#skylinesImg");
let sportsImgCheckEl = document.querySelector("#sportsImg");
let insertCollection;
let backgroundTypeArray = [];
// loadChecks enables the settings tab to be populated with the correct settings checked upon reload
let loadChecks = function () {
  let animals = localStorage.getItem("animals");
  let cars = localStorage.getItem("cars");
  let grafitti = localStorage.getItem("grafitti");
  let libraries = localStorage.getItem("libraries");
  let scenic = localStorage.getItem("scenic");
  let skylines = localStorage.getItem("skylines");
  let sports = localStorage.getItem("sports");
  let weatherEl = localStorage.getItem("weatherEl");
  let sportsEl = localStorage.getItem("sportsEl");
  let financeEl = localStorage.getItem("financeEl");
  let newsEl = localStorage.getItem("newsEl");
  if (animals == "true") {
    animalsImgCheckEl.checked = true;
  }
  if (cars == "true") {
    carsImgCheckEl.checked = true;
  }
  if (grafitti == "true") {
    grafittiImgCheckEl.checked = true;
  }
  if (libraries == "true") {
    librariesImgCheckEl.checked = true;
  }
  if (scenic == "true") {
    scenicImgCheckEl.checked = true;
  }
  if (skylines == "true") {
    skylinesImgCheckEl.checked = true;
  }
  if (sports == "true") {
    sportsImgCheckEl.checked = true;
  }
  if (weatherEl == "true") {
    weatherCheckEl.checked = true;
  }
  if (sportsEl == "true") {
    sportsCheckEl.checked = true;
  }
  if (financeEl == "true") {
    financeCheckEl.checked = true;
  }
  if (newsEl == "true") {
    newsCheckEl.checked = true;
  }
};
// hideElements is used to hide and unhide widgets from main page
let hideElements = function () {
  if (weatherCheckEl.checked === true) {
    weatherEl.classList.remove("hidden");
    localStorage.setItem("weatherEl", "true");
  } else {
    weatherEl.classList.add("hidden");
    localStorage.setItem("weatherEl", "false");
  }
  if (sportsCheckEl.checked === true) {
    sportsEl.classList.remove("hidden");
    localStorage.setItem("sportsEl", "true");
  } else {
    sportsEl.classList.add("hidden");
    localStorage.setItem("sportsEl", "false");
  }
  if (financeCheckEl.checked === true) {
    financeEl.classList.remove("hidden");
    localStorage.setItem("financeEl", "true");
  } else {
    financeEl.classList.add("hidden");
    localStorage.setItem("financeEl", "false");
    4;
  }
  if (newsCheckEl.checked === true) {
    newsEl.classList.remove("hidden");
    localStorage.setItem("newsEl", "true");
  } else {
    newsEl.classList.add("hidden");
    localStorage.setItem("newsEl", "false");
  }
};
// checkImages takes input from background settings window and sets the type of background images to be loaded it also stores this info in local storage
let checkImages = function () {
  backgroundTypeArray = [];
  if (animalsImgCheckEl.checked === true) {
    backgroundTypeArray.push("4760062");
    localStorage.setItem("animals", "true");
  } else {
    localStorage.setItem("animals", "false");
  }
  if (carsImgCheckEl.checked === true) {
    backgroundTypeArray.push("1989985");
    localStorage.setItem("cars", "true");
  } else {
    localStorage.setItem("cars", "false");
  }
  if (grafittiImgCheckEl.checked === true) {
    backgroundTypeArray.push("2138314");
    localStorage.setItem("grafitti", "true");
  } else {
    localStorage.setItem("grafitti", "false");
  }
  if (librariesImgCheckEl.checked === true) {
    backgroundTypeArray.push("1995427");
    localStorage.setItem("libraries", "true");
  } else {
    localStorage.setItem("libraries", "false");
  }
  if (scenicImgCheckEl.checked === true) {
    backgroundTypeArray.push("136095");
    localStorage.setItem("scenic", "true");
  } else {
    localStorage.setItem("scenic", "false");
  }
  if (skylinesImgCheckEl.checked === true) {
    backgroundTypeArray.push("917009");
    localStorage.setItem("skylines", "true");
  } else {
    localStorage.setItem("skylines", "false");
  }
  if (sportsImgCheckEl.checked === true) {
    backgroundTypeArray.push("536788");
    localStorage.setItem("sports", "true");
  } else {
    localStorage.setItem("sports", "false");
  }
  insertCollection = backgroundTypeArray.toString();
  localStorage.setItem("collection", insertCollection);
};
// setDark sets dark mode and stores that in local storage
let setDark = function () {
  for (i = 0; i < colorArray.length; i++) {
    colorArray[i].classList.remove("light");
    colorArray[i].classList.add("dark");
  }
  for (i = 0; i < iconArray.length; i++) {
    iconArray[i].classList.remove("light-txt");
    iconArray[i].classList.add("dark-txt");
  }
  dark = true;
  localStorage.setItem("mode", "dark");
};
// setLight sets light mode and stores that in local storage
let setLight = function () {
  for (i = 0; i < colorArray.length; i++) {
    colorArray[i].classList.remove("dark");
    colorArray[i].classList.add("light");
  }
  for (i = 0; i < iconArray.length; i++) {
    iconArray[i].classList.remove("dark-txt");
    iconArray[i].classList.add("light-txt");
  }
  dark = false;
  localStorage.setItem("mode", "light");
};
// viewMode is the first executable function and sets the endpoint url by calling variables that dictate what image types are required
// viewMode also checks screen height to width ratio and gets the right image orientation
viewMode = function () {
  insertCollection = localStorage.getItem("collection");
  if (window.innerHeight > window.innerWidth) {
    endpoint = `https://api.unsplash.com/photos/random/?orientation=portrait&collections=${insertCollection}&client_id=${clientID}`;
  } else {
    endpoint = `https://api.unsplash.com/photos/random/?orientation=landscape&collections=${insertCollection}&client_id=${clientID}`;
  }
};
viewMode();
//this sends the request to the unsplash api and returns the data used for backgrounds and credits. the last then applies this data
fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    randomImage = jsonData.urls.full;
    creatorEl.innerText = jsonData.user.name;
    if (jsonData.user.portfolio_url !== null) {
      creatorEl.setAttribute("href", jsonData.user.portfolio_url);
    } else {
      creatorEl.setAttribute("href", unsplashLink);
    }
  })
  .then(function () {
    document.body.style.backgroundImage = "url('" + randomImage + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  });
// settings checks if the user has data in local storage then decides if the settings window should show4
let settings = function () {
  if (localStorage.getItem("userName") === null) {
    settingsEl.classList.remove("hidden");
  } else {
    mainEl.classList.remove("hidden");
    setMode();
    loadChecks();
    hideElements();
  }
};
// updateClicked executes if the update button in the settings window is clicked. this checks for a user name and a light or dark mode
let updateClicked = function (event) {
  event.preventDefault();
  let fail1 = true;
  let fail2 = true;
  if (userNameEl.value == "") {
    nameVerifyEl.classList.remove("hidden");
    fail1 = true;
  } else {
    let userName = userNameEl.value.trim();
    localStorage.setItem("userName", userName);
    settingsEl.classList.add("hidden");
    mainEl.classList.remove("hidden");
    nameVerifyEl.classList.add("hidden");
    fail1 = false;
  }
  if (darkRadBtnEl.checked === true) {
    setDark();
    fail2 = false;
    darkVerifyEl.classList.add("hidden");
  } else if (lightRadBtnEl.checked === true) {
    setLight();
    fail2 = false;
    darkVerifyEl.classList.add("hidden");
  } else {
    darkVerifyEl.classList.remove("hidden");
    fail2 = true;
  }

  if (fail1 === false && fail2 === false) {
    checkImages();
    setTime();
    hideElements();
  }
};
// loadName loads user name from storage so it is prepopulated when the settings is reloaded
let loadName = function () {
  userNameEl.value = localStorage.getItem("userName");
};
// showSettings allows the settings tab to be reloaded
let showSettings = function (event) {
  event.preventDefault();
  loadChecks();
  darkVerifyEl.classList.add("hidden");
  nameVerifyEl.classList.add("hidden");
  settingsEl.classList.remove("hidden");
  if (dark === true) {
    darkRadBtnEl.checked = true;
  } else {
    lightRadBtnEl.checked = true;
  }
  loadName();
};
// setTime controls most of the welcome widget
setTime = function () {
  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  let date =
    monthsArray[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let half = " AM";
  let greeting = "";
  let userName = localStorage.getItem("userName");

  if (hour < 12) {
    greeting = "Good Morning ";
  } else if (hour < 17) {
    greeting = "Good Afternoon ";
  } else {
    greeting = "Good Evening ";
  }

  if (hour > 12) {
    hour = hour - 12;
    half = " PM";
  } else if (hour === 0) {
    hour = 12;
    half = " AM";
  } else {
    half = " AM";
  }

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  let time = hour + ":" + minute + half;
  let welcomeEl = document.querySelector("#welcome");
  welcomeEl.innerHTML =
    "<h3>" +
    greeting +
    userName +
    "</h3>" +
    "<h1>" +
    time +
    "</h1>" +
    "<h3>" +
    date +
    "</h3>";

  setTimeout(setTime, 60000);
};
// setMode sets dark/light modes on page reload
let setMode = function () {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    setDark();
  } else {
    setLight();
  }
};

settings();
setTime();
//event listeners
updateBtnEl.addEventListener("click", updateClicked);
updateSettingsEl.addEventListener("click", showSettings);
