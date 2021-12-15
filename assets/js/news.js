// #feature branch news 
fetch("https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-news.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});