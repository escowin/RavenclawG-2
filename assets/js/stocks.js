// DOM ELEMENTS | FINANCE WIDGET - STOCKS
var searchEl = document.querySelector("#search-stocks");
var searchButtonEl = document.querySelector("#stock-search-btn");
var stockNameEl = document.querySelector("#stock-name");
var stockHighEl = document.querySelector("#stock-high");
var stockLowEl = document.querySelector("#stock-low");

// STOCKS | Alpha Vantage API
const urlBase = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
const apiKey = "apikey=0FNPYTR1466MR51T";
const apiInterval = "&interval=5min&";

// RETRIEVE API STOCK DATA
var getStock = function(symbol) {
    var apiUrl = urlBase + symbol + apiInterval + apiKey;
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// USER INPUT | FUNCTION LINKED TO SEARCH BUTTON
var stockSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
    // var stockSearch = searchEl.value
    // if(stockSearch) {
    //     searchEl.value = '';
    // } else {
    //     alert('enter stock symbol');
    // }
};

// DISPLAY STOCK DATA ON HOMEPAGE
var displayStock = function (data) {
    console.log(data);
    stockSearched.innerHTML = data.name;
    stockMain.innerHTML.setItem("current-stock", data.stock[0].main);
    localStorage.setItem("current-stock")
}

// EVENT SUBMISSION
searchButtonEl.addEventListener("submit", stockSubmitHandler);

// CALL | BASED ON USER INPUT
getStock("IBM");