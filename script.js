let formInput = document.querySelector("#searchBtn");
let button = document.querySelector(".button");
let APIKey = "bd0d0c0b9ffe1286395e4abb56d49400";


let temp1 = document.querySelector('#temp1')
let humidity1 = document.querySelector('#humidity1')
let wind1 = document.querySelector('#wind1')
let name1 = document.querySelector('#name1')




export default function getWeather() {



    fetch ( "https://api.openweathermap.org/data/2.5/weather?q=" + formInput.value + "&appid=" + APIKey + "&units=metric")
   .then(function (response) { return response.json() })
   .then(function (data) {
    name1.innerHTML = "Weather in " + data.name + " today:"
    temp1.innerHTML = "Temperature: " + data.main.temp + "&#8451"
    humidity1.innerHTML = "Humidity: " + data.main.humidity + "%"
    wind1.innerHTML = "Wind Speed: " + data.wind.speed + " MPH"
 
    document.querySelector('#cards').style.border = '2px solid black'
    document.getElementById('cards').style.backgroundColor = 'white'




})
dateAndTime()

}


function get5dayForecast() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + formInput.value + "&appid=" + APIKey + "&cnt=5" + "&units=metric")
    .then(function (response) { return response.json() })
    .then(function (data) {
        
        
        let allDivs = []

        temp2.innerHTML="";
        humidity2.innerHTML=""
        wind2.innerHTML=""

        
        for (let i =0; i < data.list.length; i++){
            document.querySelector(".results1").innerHTML="";
            let div = document.createElement("div");
            
            let item = data.list[i];
            let TemperatureEl = document.createElement("ul");
            TemperatureEl.innerHTML = "Temperature: " +data.list[i].main.temp +  "&#8451"
            div.appendChild(TemperatureEl) 
            allDivs.push(div);

            let HumidityEl = document.createElement("ul")
            HumidityEl.innerHTML = "Humidity: " +data.list[i].main.humidity + "%"
            div.appendChild(HumidityEl) 
            
            let windEl = document.createElement("ul")
            windEl.innerHTML = "Wind Speed: " +data.list[i].wind.speed + " MPH"
            div.appendChild(windEl)


            allDivs.push(div);

            document.querySelector('.results1').style.border = '2px solid black'
            document.querySelector('.results1').style.backgroundColor = 'white'

        }
        
        allDivs.forEach(item=>{
            document.querySelector(".results1").appendChild(item);
        })})}



        

        
            

        localStorage.setItem('name','Komal')
        console.log(date1.innerHTML = localStorage.getItem('name'))
        

  
        
          
button.addEventListener("click", get5dayForecast);
          
button.addEventListener("click", getWeather);



