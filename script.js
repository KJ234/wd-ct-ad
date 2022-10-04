//document.getelemntbyid or query selector
let formInput = document.querySelector(".input");
let searchButton = document.querySelector(".searchButton");
// api key
let APIKEY = "bd0d0c0b9ffe1286395e4abb56d49400";

function displaySpecificForecast() {
  // fetch request
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      formInput.value +
      "&appid=" +
      APIKEY
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// if statments

//.add eventlistener

//pressclick

searchButton.addEventListener("click", displaySpecificForecast);
