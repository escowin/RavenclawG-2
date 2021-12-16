// gets all the players
// var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" 
var searchEl = document.querySelector('#searchNBA');
var buttonEl = document.querySelector('#nba-btn');
var dataEl = document.querySelector('#playerName');
var heightEl = document.querySelector('#height');
var weightEl = document.querySelector('#weight');
var positionEl = document.querySelector('#position');
var teamEl = document.querySelector('#team');


var playerSumbitHandler = function(event) {
    // prevent page from refreshing 
    event.preventDefault();
    // get the value from the input
    var playerSearch = searchEl.value.trim();

    if(playerSearch) {
        getPlayer(playerSearch);
        // clear the old content
        searchEl.value = '';
    } else {
        alert('Please enter a player');
    }
};

var getPlayer = function(playerSearch) {
    // format the Api
    var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dataEl.innerHTML = " Name: " + data.data[0].first_name + "  " + data.data[0].last_name;
        heightEl.innerHTML = " Height: " + data.data[0].height_feet;
        weightEl.innerHTML = " Weight: " + data.data[0].height_inches;
        positionEl.innerHTML = " Position: " + data.data[0].position;
        teamEl.innerHTML = " Team: " + data.data[0].team.city + " " + data.data[0].team.name;
    })
};

// fetch("https://odds.p.rapidapi.com/v1/odds?sport=americanfootball_nfl&region=us&mkt=h2h&dateFormat=iso&oddsFormat=american", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "odds.p.rapidapi.com",
// 		"x-rapidapi-key": "5eac565ee1mshdb48ee068ef1a4cp1f16efjsnc8cb0faa0fc0"
// 	}
// })
// .then(response => response.json())
// .then(data => console.log(data))

buttonEl.addEventListener("click", playerSumbitHandler)
