// Global variables
var searchEl = document.querySelector('#searchNBA');
var buttonEl = document.querySelector('#nba-btn');
var dataEl = document.querySelector('#playerName');
var heightEl = document.querySelector('#height');
var weightEl = document.querySelector('#weight');
var positionEl = document.querySelector('#position');
var teamEl = document.querySelector('#team');
var playerPicture = document.querySelector('#playerPicture');
var assitsPg = document.getElementById('assitspg');
var freeThrowPer = document.getElementById('freeThrow');
var threePointPer = document.getElementById('threePoint');
var pointsPG = document.getElementById('ppg');
 
// function tp handle when the user inputs a first and last name in the html input
var playerSumbitHandler = function(event) {
    // prevent page from refreshing 
    event.preventDefault();
    // get the value from the input
    var playerSearch = searchEl.value
    var newArray = playerSearch.split(/(\s+)/)
    console.log(playerSearch)
     firstName = newArray[0]
     lastName = newArray[2]

    if(playerSearch) {
        getPlayer(lastName, firstName);
        getPlayerTwo(playerSearch)
        // clear the old content
        searchEl.value = '';
    
    // if (searchEl.value !== getPlayer) {
    //     alert('Sorry, no player found. Please try again! Hint: Full first & full last name')
    // }
    
    } else {
        alert('Please enter a player to search for stats');
    }
};

var getPlayer = function(lastName, firstName) {
    // format the Api
    var apiUrl = "https://nba-players.herokuapp.com/players-stats/" + lastName + "/" + firstName  
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        assitsPg.innerHTML = " - Assists Per Game: " + data.assists_per_game
        freeThrowPer.innerHTML = " - Free Throw Percentage: " + data.free_throw_percentage + "%"
        threePointPer.innerHTML = " - 3pt Percentage: " + data.three_point_percentage + "%"
        pointsPG.innerHTML = " - PPG: " + data.points_per_game
        playerPicture.innerHTML = "<img src=\"https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName + "\"/>"
       
    })
}

var getPlayerTwo = function(playerSearch) {
    // format the Api
    var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dataEl.innerHTML = " - Name: " + data.data[0].first_name + "  " + data.data[0].last_name;
        heightEl.innerHTML = " - Height: " + data.data[0].height_feet + " feet ";
        weightEl.innerHTML = " - Weight: " + data.data[0].height_inches + " inches ";
        positionEl.innerHTML = " - Position: " + data.data[0].position;
        teamEl.innerHTML = " - Team: " + data.data[0].team.city + " " + data.data[0].team.name;
    })
};


// adds a event listener to the buttonEl and says once this button is clicked run the player 
buttonEl.addEventListener("click", playerSumbitHandler)
