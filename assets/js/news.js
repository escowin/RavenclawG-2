$(document).ready(function(){
    // EventListener for search input 
$("#searchbtn").on("click",function(e){
    e.preventDefault();
    // GNews api url with query input.text 
    var query = $("#searchquery").val();
    var url = 'https://gnews.io/api/v4/top-headlines?' + "q="+query+""
          +'&country=us&' +
          '&token=701c1df87fadc3a6b806c86596655ba5';

    if (query !=="" || "today"){
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",

                // loader UI display until news url return and hide after complete 
            beforeSend: function(){
                $("#loader").show();
            },
            complete: function(){
                $("#loader").hide();
            },
                // if ajax request return true the array data passed through for() loop 
            success: function(news){
                var output = "";
                var latestNews = news.articles;
				var post_limt =3;
				materializeColWidth = 12/post_limt;


                for(var i in latestNews){
                    
                 output +=`
                    <div class="col l${materializeColWidth} m3 s3">
					    <div class="card medium hoverable">
						    <div class="card-image">
							    <img src="${latestNews[i].image}" class="responsive-img">
						    </div>
						    <div class="card-content"> 
                                <span class="waves-effect waves-light card-title activator"><i class="material-icons right">more_vert</i></span>
							    <h6>${latestNews[i].title}</h6>
						    </div>
						    <div class="card-reveal ">
							    <span class="card-title activator"><i class="material-icons right">close</i></span>
							    <p>${latestNews[i].description}</p>
							    <p class="hide-on-small-only">${latestNews[i].content}</p>
							    <p>Published on: ${latestNews[i].publishedAt}</p>
						    </div>
						    <div class="card-action">
							    <a href="${latestNews[i].url}" target="_blank" class="btn pulse rounded">Read!</a>
						    </div>
					    </div>
				    </div>
			     `;
                }
                    
                if(output !== ""){

                    $("#newsResults").html(output);
                     M.toast({
                        html:"Here is the latest news!",
                        classes: 'green rounded'
                    });

                }else{
                    $("#newsResults").html("There is 0 article available for this search");
                     M.toast({
                        html:"There is 0 article available for this search",
                        classes: 'red rounded'
                    });
                }
            },
            error: function(){
                M.toast({
                html:"There is an error, please try again",
                classes: 'red rounded'
            });
            }
        });
        
    }else{
        M.toast({
            html:"Please enter topic you're lookig for",
            classes: 'red rounded'
        });
    }
})
});