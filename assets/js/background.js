let clientID = "T55TOxKxDJMpz91j6fEuSi-nPDhq1TpFAFtB91u4X9o";
let endpoint = ``;
let randomImage = "";
let creatorEl = document.querySelector("#creator");
// document.body.style.backgroundImage = "url('" + randomImage + "')";
// document.body.style.backgroundSize = "cover";
viewMode = function () {
    if (window.innerHeight > window.innerWidth){
        endpoint = `https://api.unsplash.com/photos/random/?orientation=portrait&client_id=${clientID}`
    }else{
        endpoint = `https://api.unsplash.com/photos/random/?orientation=landscape&client_id=${clientID}`
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

  });
