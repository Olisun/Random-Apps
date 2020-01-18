var currentCities = ['San Francisco', 'Seattle', 'Los Angeles', 'New York', 'Washington DC', 'Boston'];

var newCityButton = $("#new-city-submitted");
var currentCitiesButtons = $("#city-buttons");
var weatherInfo = $("#weather-info");

// $(document).on("click", "city-button", apiCall);

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

apiCall = () => {
  var dataAttributeCity = $(this).attr("data-city");
}