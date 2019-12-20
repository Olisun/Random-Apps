function apiCall() {
  var queryURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      console.log(response.deck_id);
    });

  var API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
  var id = response.deck_id;
  var cardURL = `${API_BASE_URL}/${id}/draw/`;
  $.ajax({
    url: cardURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
    });
};

apiCall();

