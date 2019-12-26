var API_BASE_URL = "https://api-nba-v1.p.rapidapi.com/leagues/";

apiCall = () => {
  var queryURL = `${API_BASE_URL}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then((response) => {
      console.log(response);
    });
};


apiCall();



