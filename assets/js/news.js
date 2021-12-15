// #feature branch news 
fetch("https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-news.p.rapidapi.com",
		"x-rapidapi-key": "74fc7b6b2b8d4e368517bcefe10f1d07"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
