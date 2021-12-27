const cryptoEndpoint = "2e362a85-d8e1-40aa-bb14-c6585ac5d249";
const liveCoinWatchLink = "https://www.livecoinwatch.com/";
let cryptoType = [];
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
      cryptoETH.name = jsonData.name;
      cryptoETH.icon = jsonData.png32;
      cryptoETH.rate = jsonData.rate;
      cryptoETH.high = jsonData.allTimeHighUSD;
    });

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
      cryptoBTC.name = jsonData.name;
      cryptoBTC.icon = jsonData.png32;
      cryptoBTC.rate = jsonData.rate;
      cryptoBTC.high = jsonData.allTimeHighUSD;
    });

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
      cryptoSHIB.name = jsonData.name;
      cryptoSHIB.icon = jsonData.png32;
      cryptoSHIB.rate = jsonData.rate;
      cryptoSHIB.high = jsonData.allTimeHighUSD;
    });

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
      cryptoDOGE.name = jsonData.name;
      cryptoDOGE.icon = jsonData.png32;
      cryptoDOGE.rate = jsonData.rate;
      cryptoDOGE.high = jsonData.allTimeHighUSD;
    });


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
        cryptoLTC.name = jsonData.name;
        cryptoLTC.icon = jsonData.png32;
        cryptoLTC.rate = jsonData.rate;
        cryptoLTC.high = jsonData.allTimeHighUSD;
      });

let showFinanceEL = document.querySelector("#finance-check");
let btcCheckEl = document.querySelector("#BTC-Check");
let ethCheckEl = document.querySelector("#ETH-Check");
let dogeCheckEl = document.querySelector("#DOGE-Check");
let shibCheckEl = document.querySelector("#SHIB-Check");
let ltcCheckEl = document.querySelector("#LTC-Check");
let updateEl = document.querySelector("#update-btn");
let contentEl = document.querySelector("#lcw-content");
let checkFinance = localStorage.getItem("financeEl");

let restoreChecks = function(){
    let checkFinance = localStorage.getItem("financeEl");
    let checkBTC = localStorage.getItem("BTC");
    let checkETH = localStorage.getItem("ETH");
    let checkDOGE = localStorage.getItem("DOGE");
    let checkSHIB = localStorage.getItem("SHIB");
    let checkLTC = localStorage.getItem("LTC");
    if(checkFinance == "true"){
        showFinanceEL.checked = true;
    }
    if(checkBTC == "true"){
        btcCheckEl.checked = true;
    }
    if(checkETH == "true"){
        ethCheckEl.checked = true;
    }
    if(checkDOGE == "true"){
        dogeCheckEl.checked = true;
    }
    if(checkSHIB == "true"){
        shibCheckEl.checked = true;
    }
    if(checkLTC == "true"){
        ltcCheckEl.checked = true;
    }
}
let populateCryptoInfo = function(){
    console.log("also ran");
    console.log(cryptoType);
    contentEl.innerHTML = "";
    for (i=0; i < cryptoType.length; i++){
    let cryptoMain = document.createElement("div");
    cryptoMain.className = "cryptoMain";
    let cryptoName = document.createElement("div");
    cryptoName.className = "image-name";
    cryptoName.innerHTML = "<img src=\"" + cryptoType[i].icon + "\"/>" + " <b>" + cryptoType[i].name + "</b>";
    let cryptoInfo = document.createElement("div");
    cryptoInfo.className = "crypto-info";
    cryptoInfo.innerHTML = cryptoType[i].rate;
    cryptoMain.appendChild(cryptoName);
    cryptoMain.appendChild(cryptoInfo);
    contentEl.appendChild(cryptoMain);
    }
    console.log("finish");
};
let checkCryptoType = function(){
    console.log("ran");
    if(btcCheckEl.checked == true){
        cryptoType.push(cryptoBTC);
        localStorage.setItem("BTC", "true");
    }else{
        localStorage.setItem("BTC", "false");
    }
    if(ethCheckEl.checked == true){
        cryptoType.push(cryptoETH);
        localStorage.setItem("ETH", "true");
    }else{
        localStorage.setItem("ETH", "false");
    }
    if(dogeCheckEl.checked == true){
        cryptoType.push(cryptoDOGE);
        localStorage.setItem("DOGE", "true");
    }else{
        localStorage.setItem("DOGE", "false");
    }
    if(shibCheckEl.checked == true){
        cryptoType.push(cryptoSHIB);
        localStorage.setItem("SHIB", "true");
    }else{
        localStorage.setItem("SHIB", "false");
    }
    if(ltcCheckEl.checked == true){
        cryptoType.push(cryptoLTC);
        localStorage.setItem("LTC", "true");
    }else{
        localStorage.setItem("LTC", "false");
    }
    populateCryptoInfo();
}
let checkAPI = function(){
    if (cryptoLTC.name !== ""){
        checkCryptoType();
    }else{
        setTimeout(checkAPI, 1000);
    }
}
let checkRun = function(){
    restoreChecks();
    if(showFinanceEL.checked == true){
        cryptoType = [];
        checkAPI();
    }
}

checkRun();
updateEl.addEventListener("click", checkRun);