let clientID = "T55TOxKxDJMpz91j6fEuSi-nPDhq1TpFAFtB91u4X9o";
let endpoint = ``;
let randomImage = "";
let creatorEl = document.querySelector("#creator");
let settingsEl = document.querySelector("#settings");
let userNameEl = document.querySelector("#user-name");
let updateBtnEl = document.querySelector("#update-btn");
let nameVerifyEl = document.querySelector("#name-verify");
let updateSettingsEl = document.querySelector("#update-settings");


viewMode = function () {
  if (window.innerHeight > window.innerWidth) {
    endpoint = `https://api.unsplash.com/photos/random/?orientation=portrait&collections=136095&client_id=${clientID}`;
  } else {
    endpoint = `https://api.unsplash.com/photos/random/?orientation=landscape&collections=136095&client_id=${clientID}`;
  }
};
viewMode();
fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    randomImage = jsonData.urls.full;
    creatorEl.innerText = jsonData.user.name;
    creatorEl.setAttribute("href", jsonData.user.portfolio_url);
  })
  .then(function () {
    document.body.style.backgroundImage = "url('" + randomImage + "')";
    document.body.style.backgroundSize = "cover";
<<<<<<< HEAD

  });
=======
    document.body.style.backgroundRepeat = "no-repeat";
  });

let settings = function () {
  if (localStorage.getItem("userName") === null) {
    settingsEl.classList.remove("hidden");
  }
};
let updateClicked = function (event) {
  event.preventDefault();
  if (userNameEl.value == "") {
    nameVerifyEl.classList.remove("hidden");
  } else {
    let userName = userNameEl.value.trim();
    localStorage.setItem("userName", userName);
    settingsEl.classList.add("hidden");
    setTime();
  }
};
let loadName = function () {
  userNameEl.value = localStorage.getItem("userName");
};
let showSettings = function (event) {
  event.preventDefault();
  settingsEl.classList.remove("hidden");
  loadName();
};

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
  welcomeEl.innerHTML = "<h3>" + greeting + userName + "</h3>" + "<h1>" + time + "</h1>" + "<h3>" + date + "</h3>";

  setTimeout(setTime, 60000);
 
};

settings();
setTime();
updateBtnEl.addEventListener("click", updateClicked);
updateSettingsEl.addEventListener("click", showSettings);
>>>>>>> develop
