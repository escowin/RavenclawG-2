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
let colorArray = [welcomeEl, weatherEl, sportsEl, financeEl, newsEl, creditsEl];
let mainEl = document.querySelector("#main");
let darkVerifyEl = document.querySelector("#dark-verify");
let dark = true;
let setDark = function(){
    for(i=0; i < colorArray.length; i++){
        colorArray[i].classList.remove("light")
        colorArray[i].classList.add("dark");
        dark = true;
    }
}
let setLight = function(){
    for(i=0; i < colorArray.length; i++){
        colorArray[i].classList.remove("dark")
        colorArray[i].classList.add("light");
        dark = false;
}
}

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
    if(jsonData.user.portfolio_url !== null){
        creatorEl.setAttribute("href", jsonData.user.portfolio_url);}
        else{
            creatorEl.setAttribute("href", unsplashLink);
        }
  })
  .then(function () {
    document.body.style.backgroundImage = "url('" + randomImage + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  });

let settings = function () {
  if (localStorage.getItem("userName") === null) {
    settingsEl.classList.remove("hidden");
  }else{
      mainEl.classList.remove("hidden");
  }
};
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
  if (darkRadBtnEl.checked === true){
      setDark();
      fail2 = false;
      darkVerifyEl.classList.add("hidden");
  }else if (lightRadBtnEl.checked === true){
      setLight();
      fail2 = false;
      darkVerifyEl.classList.add("hidden");
  }else{
      darkVerifyEl.classList.remove("hidden");
      fail2 = true;
  }

  if (fail1 === false && fail2 === false){
      setTime();
  }

};
let loadName = function () {
  userNameEl.value = localStorage.getItem("userName");
};
let showSettings = function (event) {
  event.preventDefault();
  darkVerifyEl.classList.add("hidden");
  nameVerifyEl.classList.add("hidden");
  settingsEl.classList.remove("hidden");
  if(dark === true){
      darkRadBtnEl.checked = true;
  }else{
      lightRadBtnEl.checked = true;
  }
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