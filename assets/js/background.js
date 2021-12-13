let clientID = "T55TOxKxDJMpz91j6fEuSi-nPDhq1TpFAFtB91u4X9o";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
let randomImage = "";
// document.body.style.backgroundImage = "url('" + randomImage + "')";
// document.body.style.backgroundSize = "cover";
fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    randomImage = jsonData.urls.full;
  })
  .then(function () {
    document.body.style.backgroundImage = "url('" + randomImage + "')";
    document.body.style.backgroundSize = "cover";
  });
