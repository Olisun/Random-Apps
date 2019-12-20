var deck = null;
var drawn = [];
var API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
var draw = $("#drawCards");

apiCall = () => {
  var queryURL = `${API_BASE_URL}/new/shuffle/`;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then((response) => {
      console.log(response);
      console.log(response.deck_id);
      var id = response.deck_id;

      drawCard = () => {
        var cardURL = `${API_BASE_URL}/${id}/draw/`;
        $.ajax({
          url: cardURL,
          method: "GET"
        })
          .then((response) => {
            console.log(response);
          });
      }
      draw.on("click", drawCard);
    });
};


apiCall();



