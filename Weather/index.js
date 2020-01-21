var currentCities = ['San Francisco', 'Seattle', 'Los Angeles', 'New York', 'Washington DC', 'Boston'];

var newCityButton = $("#new-city-submitted");
var currentCitiesButtons = $("#city-buttons");
var weatherInfo = $("#weather-info");
var message = $("#for-message");

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
      var tempKelvin = response.main.temp;
      console.log(tempKelvin);
      var tempFahrenheit = Math.round(((tempKelvin - 273.15) * 1.8) + 32);
      console.log(tempFahrenheit);
      // Now the DOM
      var location = $("#for-city");
      var tableRow1 = $("<tr>");
      var tableRow2 = $("<tr>");

      location.empty();
      weatherInfo.empty();

      tableRow1.append(
        $("<th>").text("Current Condition"),
        $("<th>").text("Description"),
        $("<th>").text("Current Temp F"),
      )
      tableRow2.append(
        $("<td>").text(weatherCallsFor),
        $("<td>").text(weatherDescription),
        $("<td>").text(tempFahrenheit)
      );

      location.append(city);
      weatherInfo.append(tableRow1);
      weatherInfo.append(tableRow2);


      switch (weatherCallsFor) {
        case "Clear":
          message.text("Looks to be a nice day!")
          break;
        case "Clouds":
          message.text("At least it's not raining.")
          break;
        case "Rain":
          ("Don't forget the umbrella.")
          break;
        case "Snow":
          ("Better bundle up!")
          break;
        default:
          ("Roll the dice")
          break;
      }
    })
}

const fs = require('fs')
const customer = {
  name: "Newbie Co.",
  order_count: 0,
  address: "Po Box City",
}
const jsonString = JSON.stringify(customer)
fs.writeFile('./newCustomer.json', jsonString, err => {
  if (err) {
    console.log('Error writing file', err)
  } else {
    console.log('Successfully wrote file')
  }
})




