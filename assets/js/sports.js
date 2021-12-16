// gets all the players
// var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" 
var searchEl = document.querySelector('#searchNBA');
var buttonEl = document.querySelector('#nba-btn');
var dataEl = document.querySelector('#nbaPlayer');


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
    .then(data => console.log(data));
    

};

buttonEl.addEventListener("click", playerSumbitHandler)
