// DOM ELEMENTS | FINANCE WIDGET - STOCKS
var searchEl = document.querySelector("#search-stocks");
var buttonEl = document.querySelector("#stock-search-btn");
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

    // fetch(endPoint)
    // .then(response => response.json())
    // .then(data => {
    //     stockNameEl.innerHTML = "Stock | " + data.data[0].symbol;
    //     stockHighEl.innerHTML = "High | " + data.data[0].high;
    //     weightEl.innerHTML = "Low | " + data.data[0].low;
    // })
};

// USER INPUT
var stockSubmitHandler = function (event) {
    // HOMEPAGE REFRESH PREVENTION
    event.preventDefault();
    // elimnate white space from user input
    var stockSearch = searchEl.value
    if(stockSearch) {
        searchEl.value = '';
    } else {
        alert('enter stock symbol');
    }
};

// DISPLAY STOCK DATA ON HOMEPAGE
var displayStock = function (data) {
    console.log(data);
    stockSearched.innerHTML = data.name;
    stockMain.innerHTML.setItem("current-stock", data.stock[0].main);
    localStorage.setItem("current-stock")
}

// EVENT SUBMISSION
buttonEl.addEventListener("click", stockSubmitHandler);

// CALL | BASED ON USER INPUT
getStock("IBM");