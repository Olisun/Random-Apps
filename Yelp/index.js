$(document).ready(function () {
  // Need this helper function for Yelp.
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  $(".yelp").on("submit", () => {
    event.preventDefault();
    console.log("inside yelp")

    var API_BASE_URL = "https://api.yelp.com/v3/businesses/search?term=";
    var location = $("#location").val();
    var category = $("#category").val();

    var queryURL = `${API_BASE_URL} + preference + "&location=" + location = ""`;
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        authorization: "Bearer x1AdQoObnoQ14KayqKU-QSHkDsBRSa8ggj1SQdOnwe0HC5rFnNuTt9paCipIOUuQUCMbIKZkd6AeWkBPa0YxFypxEZ7TNrHhqkVddRT-OPY2jZZdZs9JSv-HevMEXnYx"
      }
    })
      .then((response) => {
        console.log(response);
        for (var i = 0; i < response.businesses.length; i++) {
          $(".container").append('<img class="thumbnail" src="' + response.businesses[i].image_url + '"/><h2 class="name">' + response.businesses[i].name + '</h2><p class="phone">' + response.businesses[i].display_phone + '</p><p class="address">' + response.businesses[i].location.address1 + ', ' + response.businesses[i].location.city + ' ' + response.businesses[i].location.zip_code + '</p><hr>')
        }

      });
  });
})

