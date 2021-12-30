$(document).ready(function () {
  // EventListener for search input
  $("#searchbtn").on("click", function (e) {
    e.preventDefault();
    // GNews api url with query input.text
    var query = $("#searchquery").val().trim();
    var url =
      "https://gnews.io/api/v4/top-headlines?" +
      "q=" +
      query +
      "" +
      "&token=2d2499655012ece242e8d5220e8f0422&max=6&country=us";

    if (query !== "" ||"todays") {
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",

        // loader UI display until news url return and hide after complete
        beforeSend: function () {
          $("#loader").show();
        },
        complete: function () {
          $("#loader").hide();
        },
        // if ajax request return true the array data passed through for() loop
        success: function (news) {
          let output = "";
          let latestNews = news.articles;
          // for loop to go though the json data to get the img, title, and link
          for (var i in latestNews) {
            output += `
                <div class="card one-third column">
                <div class="card-image">
                <img src="${latestNews[i].image}">
                </div>
                <div class="card-title">
                <h6 class="ten columns">${latestNews[i].title}</h6>
                </div>
                <div class="card-icons">
                </div>
                <br>
                <a href="${latestNews[i].url}" target="_blank" class="button u-full-width article">Read Full Article</a>
                </div>  
			     `;
          }

          if (output !== "") {
            $("#newsResults").html(output);
          } else {
            $("#newsResults").html(
              "There is 0 article available for this search"
            );
          }
        },
        error: function () {$("#newsResults").html(
          "There is an error, please try again"
        );
        },
      });
    } 
  });
});
