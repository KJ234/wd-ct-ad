let formInput = document.querySelector("#searchBtn");
let button = document.querySelector(".button");
let currentUVEl = document.querySelector(".currentUVEl")
let APIKey = "bd0d0c0b9ffe1286395e4abb56d49400";

let temp1 = document.querySelector('#temp1')
let humidity1 = document.querySelector('#humidity1')
let wind1 = document.querySelector('#wind1')
let name1 = document.querySelector('#name1')

let temp2 = document.querySelector('#temp2')
let temp3 = document.querySelector('#temp3')
let temp4 = document.querySelector('#temp4')
let temp5 = document.querySelector('#temp5')
let temp6 = document.querySelector('#temp6')

let humidity2 = document.querySelector('#humidity2')
let humidity3 = document.querySelector('#humidity3')
let humidity4 = document.querySelector('#humidity4')
let humidity5 = document.querySelector('#humidity5')
let humidity6 = document.querySelector('#humidity6')


let feelLike2 = document.querySelector('#feelLike2')
let feelLike3 = document.querySelector('#feelLike3')
let feelLike4 = document.querySelector('#feelLike4')
let feelLike5 = document.querySelector('#feelLike5')
let feelLike6 = document.querySelector('#feelLike6')

let wind2 = document.querySelector('#wind2')
let wind3 = document.querySelector('#wind3')
let wind4 = document.querySelector('#wind4')
let wind5 = document.querySelector('#wind5')
let wind6 = document.querySelector('#wind6')

let dateEl2 = document.getElementById('date2');
let dateEl3 = document.getElementById('date3');
let dateEl4 = document.getElementById('date4');
let dateEl5 = document.getElementById('date5');
let dateEl6 = document.getElementById('date6');

let tempArray = []
let windArray = []
let humidityArray = []
let feelLikeArray = []
let dateArray = []


let d = new Date();
document.getElementById("date1").innerHTML = d;




var today = new Date().getHours();
if (today >= 24 && today <= 12 ) {
    document.querySelector(".morning").style.visibility = "visible"
} else {
    document.querySelector(".afternoon").style.visibility = "visible"
}

















function getWeather() {

    fetch ( "https://api.openweathermap.org/data/2.5/weather?q=" + formInput.value + "&appid=" + APIKey + "&units=metric")
   .then(function (response) { return response.json() })
   .then(function (data) {
    name1.innerHTML = "Weather in " + data.name + " today:"
    temp1.innerHTML = "Temperature: " + data.main.temp + "&#8451"
    humidity1.innerHTML = "Humidity: " + data.main.humidity + "%"
    wind1.innerHTML = "Wind Speed: " + data.wind.speed + " MPH"
 
    document.querySelector('#cards1').style.border = '2px solid black'
    document.querySelector('#cards1').style.backgroundColor = 'white'
    
    let lat = data.coord.lat;
    let lon = data.coord.lon;

    fetch( "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1")
    .then(function (response) { return response.json() })
    .then(function (data) { console.log(data)


        currentUVEl.innerHTML = "";
        currentUVEl.textContent = "UV Index: "+ data[0].value

        document.querySelector(".subTitle").style.visibility = "visible"
        get5dayForecast()
        
    })


    function get5dayForecast() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts=&units=metric&appid=' + APIKey)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data);

          for (let i = 0; i < 7; i ++) {
            let openWeather = data.daily[i]
            console.log(openWeather)

            var date = openWeather.dt;
            // convert the date from unix to a more user friendly format
            var unixFormat = moment.unix(date).format('MMM Do YYYY');
            dateArray.push(unixFormat);

          let temp = openWeather.temp.day
          tempArray.push(temp)

          let feel = openWeather.feels_like.day
          feelLikeArray.push(feel)

          let humid = openWeather.humidity
          humidityArray.push(humid)

          let wind = openWeather.wind_speed
          windArray.push(wind)

            groupArray()
          }
    })}
})}

    function groupArray() {


        temp2.textContent = 'Temp: ' + tempArray[1] + '°C';
        humidity2.textContent = 'Humidity: ' + humidityArray[1] + "%";
        feelLike2.textContent = 'It Feels like: ' + feelLikeArray[1] +'°C'
        wind2.textContent = 'Wind Speed: ' + windArray[1] + " MPH"
        document.querySelector('#cards2').style.border = '2px solid black'
        document.querySelector('#cards2').style.backgroundColor = 'white'

        temp3.textContent = 'Temp: ' + tempArray[2] + '°C';
        humidity3.textContent = 'Humidity: ' + humidityArray[2] + "%";
        feelLike3.textContent = 'It Feels like: ' + feelLikeArray[2] +'°C'
        wind3.textContent = 'Wind Speed: ' + windArray[2] + " MPH"
        document.querySelector('#cards3').style.border = '2px solid black'
        document.querySelector('#cards3').style.backgroundColor = 'white'

        temp4.textContent = 'Temp: ' + tempArray[3] + '°C';
        humidity4.textContent = 'Humidity: ' + humidityArray[3] + "%";
        feelLike4.textContent = 'It Feels like: ' + feelLikeArray[3] +'°C'
        wind4.textContent = 'Wind Speed: ' + windArray[3] + " MPH"
        document.querySelector('#cards4').style.border = '2px solid black'
        document.querySelector('#cards4').style.backgroundColor = 'white'

        temp5.textContent = 'Temp: ' + tempArray[4] + '°C';
        humidity5.textContent = 'Humidity: ' + humidityArray[4] + "%";
        feelLike5.textContent = 'It Feels like: ' + feelLikeArray[4] +'°C'
        wind5.textContent = 'Wind Speed: ' + windArray[4] + " MPH"
        document.querySelector('#cards5').style.border = '2px solid black'
        document.querySelector('#cards5').style.backgroundColor = 'white'

        temp6.textContent = 'Temp: ' + tempArray[5] + '°C';
        humidity6.textContent = 'Humidity: ' + humidityArray[5] + "%";
        feelLike6.textContent = 'It Feels like: ' + feelLikeArray[5] +'°C'
        wind6.textContent = 'Wind Speed: ' + windArray[5] + " MPH"
        document.querySelector('#cards6').style.border = '2px solid black'
        document.querySelector('#cards6').style.backgroundColor = 'white'


      
        dateEl2.textContent = dateArray[1];
        dateEl3.textContent = dateArray[2];
        dateEl4.textContent = dateArray[3];
        dateEl5.textContent = dateArray[4];
        dateEl6.textContent = dateArray[5];

     


    }
    

    

button.addEventListener("click", getWeather);


