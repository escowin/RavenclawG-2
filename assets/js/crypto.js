const cryptoEndpoint = "2e362a85-d8e1-40aa-bb14-c6585ac5d249";
const liveCoinWatchLink = "https://www.livecoinwatch.com/";
const cryptoETH = {
  name: "",
  icon: "",
  rate: "",
  high: "",
  link: "https://www.livecoinwatch.com/price/Ethereum-ETH",
};
const cryptoBTC = {
  name: "",
  icon: "",
  rate: "",
  high: "",
  link: "https://www.livecoinwatch.com/price/Bitcoin-BTC",
};
const cryptoSHIB = {
  name: "",
  icon: "",
  rate: "",
  high: "",
  link: "https://www.livecoinwatch.com/price/ShibaInu-SHIB",
};
const cryptoDOGE = {
  name: "",
  icon: "",
  rate: "",
  high: "",
  link: "https://www.livecoinwatch.com/price/Dogecoin-DOGE",
};
const cryptoLTC = {
  name: "",
  icon: "",
  rate: "",
  high: "",
  link: "https://www.livecoinwatch.com/price/Litecoin-LTC",
};
let cryptoETHcall = function () {
  fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": cryptoEndpoint,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: "ETH",
      meta: true,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      cryptoETH.name = jsonData.name;
      cryptoETH.icon = jsonData.png32;
      cryptoETH.rate = jsonData.rate;
      cryptoETH.high = jsonData.allTimeHighUSD;
    });
};
let cryptoBTCcall = function () {
  fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": cryptoEndpoint,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: "BTC",
      meta: true,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      cryptoBTC.name = jsonData.name;
      cryptoBTC.icon = jsonData.png32;
      cryptoBTC.rate = jsonData.rate;
      cryptoBTC.high = jsonData.allTimeHighUSD;
    });
};
let cryptoSHIBcall = function () {
  fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": cryptoEndpoint,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: "SHIB",
      meta: true,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      cryptoSHIB.name = jsonData.name;
      cryptoSHIB.icon = jsonData.png32;
      cryptoSHIB.rate = jsonData.rate;
      cryptoSHIB.high = jsonData.allTimeHighUSD;
    });
};
let cryptoDOGEcall = function () {
  fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": cryptoEndpoint,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: "DOGE",
      meta: true,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      cryptoDOGE.name = jsonData.name;
      cryptoDOGE.icon = jsonData.png32;
      cryptoDOGE.rate = jsonData.rate;
      cryptoDOGE.high = jsonData.allTimeHighUSD;
    });
};
let cryptoLTCcall = function () {
    fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": cryptoEndpoint,
      }),
      body: JSON.stringify({
        currency: "USD",
        code: "LTC",
        meta: true,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        cryptoLTC.name = jsonData.name;
        cryptoLTC.icon = jsonData.png32;
        cryptoLTC.rate = jsonData.rate;
        cryptoLTC.high = jsonData.allTimeHighUSD;
      });
  };

cryptoETHcall();
