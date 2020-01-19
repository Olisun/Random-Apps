var currentCities = ['San Francisco', 'Seattle', 'Los Angeles', 'New York', 'Washington DC', 'Boston'];

var newCityButton = $("#new-city-submitted");
var currentCitiesButtons = $("#city-buttons");
var weatherInfo = $("#weather-info");

$(document).on("click", ".thisCity", apiCall);

createButton = () => {
  currentCitiesButtons.empty();
  for (var i = 0; i < currentCities.length; i++) {
    var cityButton = $("<button>");
    cityButton.addClass("thisCity");
    cityButton.attr("data-city", currentCities[i]);
    cityButton.text(currentCities[i]);
    currentCitiesButtons.append(cityButton);
  };
};

createButton();

newCityButton.on("click", event => {
  event.preventDefault();
  var newCityLabel = $("#new-city").val().trim();
  currentCities.push(newCityLabel);
  createButton();
})

function apiCall() {
  var dataAttributeCity = $(this).attr("data-city");
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${dataAttributeCity}&APPID=74d340d237b6d2940eb2ab87c453587a`;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(response => {
      console.log(queryURL);
      console.log(response);
      var city = response.name;
      console.log(city);
      var weatherCallsFor = response.weather[0].main;
      console.log(weatherCallsFor);
      var weatherDescription = response.weather[0].description;
      console.log(weatherDescription);
      // Now the DOM
      weatherInfo.empty();
      var cityDOM = $("<h1>").text(`The weather in ${city}`);
      var weatherForcastDOM = $("<p>").text(`Current: ${weatherCallsFor}`);
      var weatherDescription = $("<p>").text(`Description: ${weatherDescription}`);
      weatherInfo.append(cityDOM);
      weatherInfo.append(weatherForcastDOM);
      weatherInfo.append(weatherDescription);
    })
}