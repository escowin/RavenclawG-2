// gets all the players
var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" 
var searchEl = document.querySelector('#searchNBA');
var buttonEl = document.querySelector('#update-btn');
var dataEl = document.querySelector('#nbaPlayer');


var playerSumbitHandler = function(event) {
    // prevent page from refreshing 
    event.preventDefault();
    // get the value from the input
    var playerSearch = searchEl.value;

    if(playerSearch) {
        getPlayer(playerSearch);
        // clear the old content
    } else {
        alert('Please enter a player');
    }
};

var getPlayer = function() {
    // format the Api
    var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch 
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data));

}


buttonEl.addEventListener("update", playerSumbitHandler)
