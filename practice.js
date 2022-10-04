let formInput = document.querySelector(".input");
let button = document.querySelector(".searchButton");

// generated api key form the openweather website
let APIKey = "bd0d0c0b9ffe1286395e4abb56d49400";

// function to get the weather from the api and display on the page
function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      formInput.value +
      "&appid=" +
      APIKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

button.addEventListener("click", getWeather);
