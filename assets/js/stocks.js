// DOM ELEMENTS | FINANCE WIDGET - STOCKS
var stockFormEl = document.querySelector("#stock-form");
var stockInputEl = document.querySelector("#symbol");
var searchButtonEl = document.querySelector("#stock-search-btn");
var stockStatsContainerEl = document.querySelector("#stock-stats-container")
var stockSymbolEl = document.querySelector("#stock-symbol");
var stockHighEl = document.querySelector("#stock-high");
var stockLowEl = document.querySelector("#stock-low");

// STOCKS | Alpha Vantage API
const urlBase = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
const apiKey = "&apikey=0FNPYTR1466MR51T";

// RETRIEVE API STOCK DATA
var getStock = function(symbol) {
    var apiUrl = urlBase + symbol + apiKey;
    // var apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=0FNPYTR1466MR51T";
    fetch(apiUrl).then(function(response) {
        displayStock(symbol);
        // response.json().then(function(data) {
            console.log(symbol);
        // });
    });
};

// USER INPUT | FUNCTION LINKED TO SEARCH BUTTON
var stockSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
    if (symbol) {
        getStock(symbol);
        searchEl.value = "";
    } else {
        alert("enter valid stock symbol");
    }
};

// DISPLAY STOCK DATA ON HOMEPAGE
var displayStock = function(symbol, searchTerm) {
    stockSymbolEl.textContent = searchTerm;
}

// EVENT SUBMISSION
stockFormEl.addEventListener("submit", stockSubmitHandler);

// CALL | BASED ON USER INPUT
// getStock();