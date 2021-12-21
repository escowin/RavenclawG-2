$(document).ready(function () {
  // EventListener for search input
  $("#searchbtn").on("click", function (e) {
    e.preventDefault();
    // GNews api url with query input.text
    var query = $("#searchquery").val();
    var url =
      "https://gnews.io/api/v4/top-headlines?" +
      "q=" +
      query +
      "" +
      "&token=701c1df87fadc3a6b806c86596655ba5&max=6&country=us";

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

          for (var i in latestNews) {
            output += `
                <div class="card one-third column">
                <div class="card-image">
                <img src="${latestNews[i].image}">
                </div>
                <div class="card-title row">
                <h6 class="ten columns">${latestNews[i].title}</h6>
                </div>
                <div class="card-icons">
                <a href="${latestNews[i].url}" target="_blank" class="button u-pull-right">Read</a>
                </div>
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
