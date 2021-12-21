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
      "&country=us&" +
      "&token=701c1df87fadc3a6b806c86596655ba5";

    if (query !== "" || "today") {
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
  <div class="card">
    <div class="card-image">
      <img src="${latestNews[i].image}">
    </div>
    <div class="card-title row">
      <h6 class="ten columns">${latestNews[i].title}</h6>
    </div>
    <div class="card-medoaIcons">
      <a href="${latestNews[i].url}" target="_blank" class="button button-primary">Read</a>
    </div>
    </div>     
			     `;
          }

          if (output !== "") {
            $("#newsResults").html(output);
            M.toast({
              html: "Here is the latest news!",
              classes: "green rounded",
            });
          } else {
            $("#newsResults").html(
              "There is 0 article available for this search"
            );
            M.toast({
              html: "There is 0 article available for this search",
              classes: "red rounded",
            });
          }
        },
        error: function () {
          M.toast({
            html: "There is an error, please try again",
            classes: "red rounded",
          });
        },
      });
    } else {
      M.toast({
        html: "Please enter topic you're lookig for",
        classes: "red rounded",
      });
    }
  });
});
