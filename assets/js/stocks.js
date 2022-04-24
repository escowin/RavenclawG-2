// DOM ELEMENTS | FINANCE WIDGET - STOCKS
var searchEl = document.querySelector("#search-stocks");
var buttonEl = document.querySelector("#stock-search-btn");
var stockNameEl = document.querySelector("#stock-name");
var stockHighEl = document.querySelector("#stock-high");
var stockLowEl = document.querySelector("#stock-low");

// STOCKS | Alpha Vantage API
var apiKey = "apiKey=0FNPYTR1466MR51T";

// RETRIEVE API STOCK DATA
var getStock = function (stock) {
    var endPoint = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + stock + "&interval=5min&" + apiKey;
    fetch(endPoint).then(function (response) {
        response.json().then(function (data) {
            displayStock(data)
        });
    });
};

// USER INPUT
var stockSubmit = function (event) {
    event.preventDefault();
    // elimnate white space from user input
    var stockName = stockInputField.ariaValueMax.trim();
    localStorage.setItem("stockSearch", stockName);
    if (stockName) {
        getStock(stockName);
    }
};

// EVENT SUBMISSION
stockUpdateEl.addEventListener("click", stockSubmit);

// DISPLAY STOCK DATA ON HOMEPAGE
var displayStock = function (data) {
    stockSearched.innerHTML = data.name;
    stockMain.innerHTML.setItem("current-stock", data.stock[0].main);
    localStorage.setItem("current-stock")
}
getStock();