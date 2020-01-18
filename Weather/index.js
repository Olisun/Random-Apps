var currentCities = ['San Francisco', 'Seattle', 'Los Angeles', 'New York', 'Washington DC', 'Boston'];

var newCity = $("#new-city-submitted");
var cityButton = $("#city-buttons");
var weatherInfo = $("#weather-info");

$(document).on("click", "city-button", apiCall);

createButton = () => {

}