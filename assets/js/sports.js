// gets all the players
// var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" 
var searchEl = document.querySelector('#searchNBA');
var buttonEl = document.querySelector('#nba-btn');
var dataEl = document.querySelector('#playerName');
var heightEl = document.querySelector('#height');
var weightEl = document.querySelector('#weight');
var positionEl = document.querySelector('#position');
var teamEl = document.querySelector('#team');
var playerPicture = document.querySelector('#playerPicture');
const video = document.getElementById('video');
var assitsPg = document.getElementById('assitspg');
var freeThrowPer = document.getElementById('freeThrow');
var threePointPer = document.getElementById('threePoint');
var pointsPG = document.getElementById('ppg');

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
    } else {
        alert('Please enter a player');
    }
};

var getPlayer = function(lastName, firstName) {
    // format the Api
    var apiUrl = "https://nba-players.herokuapp.com/players-stats/" + lastName + "/" + firstName  
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        assitsPg.innerHTML = " Assists Per Game: " + data.assists_per_game
        freeThrowPer.innerHTML = " Free Throw Percentage: " + data.free_throw_percentage + "%"
        threePointPer.innerHTML = " 3pt Percentage: " + data.three_point_percentage + "%"
        pointsPG.innerHTML = " PPG: " + data.points_per_game

    })
}



var getPlayerTwo = function(playerSearch) {
    // format the Api
    var apiUrl = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch
    // fetch the api
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dataEl.innerHTML = " Name: " + data.data[0].first_name + "  " + data.data[0].last_name;
        heightEl.innerHTML = " Height: " + data.data[0].height_feet + " feet ";
        weightEl.innerHTML = " Weight: " + data.data[0].height_inches + " inches ";
        positionEl.innerHTML = " Position: " + data.data[0].position;
        teamEl.innerHTML = " Team: " + data.data[0].team.city + " " + data.data[0].team.name;
    })
};

fetch("https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "livescore6.p.rapidapi.com",
		"x-rapidapi-key": "5eac565ee1mshdb48ee068ef1a4cp1f16efjsnc8cb0faa0fc0"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// var getPicture = function() {
//     var apiUrl = "https://nba-players.herokuapp.com/players/curry/stephen"
//     fetch(apiUrl)
//     .then(response => response.blob())
//     .then(images => {
//         outside = URL.createObjectURL(images)
//         console.log(images)
//     });
// };
// getPicture()
// var getTeams = function (playerSearch) {

// }
// // loops through data
// for (i = 0; i < data.data.length; i++) {

//     console.log(data.data[i].name)
// }
// data.data.forEach(function(team,index){
//     console.log(team.name)
// })
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
