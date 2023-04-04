// consts, vars for DOM

console.log('here')
var storedCity=JSON.parse(localStorage.getItem("citySearch"));
console.log(storedCity)
var saveButton = document.querySelector('.save');
var weatherSearch = document.querySelector('.weatherSearch');

// items for following days
var temp1=document.querySelector('#temp1');
var wind1=document.querySelector('#wind1');
var humiity1=document.querySelector('#humidity1');


var temp2=document.querySelector('#temp2');
var wind2=document.querySelector('#wind2');
var humidity2=document.querySelector('#humidity2');

// day 3

var temp3=document.querySelector('#temp3');
var wind3=document.querySelector('#wind3');
var humidity3=document.querySelector('#humidity3');

// function that extracts data from weather API and puts it onto the page

function renderForecast(data) {
var cityName=document.querySelector("#cityName");
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var humidity=document.querySelector('#humidity');
var date=document.querySelector("#date");




// day 2 stuff
var temp2=document.querySelector('#temp2');
var wind2=document.querySelector('#wind2');
var humidity2=document.querySelector('#humidity2');

    console.log(data)
    cityName.textContent=data.city.name
    temp.textContent="temp: "+ data.list[0].main.temp +" degrees" 
    wind.textContent="wind: "+ data.list[0].wind.speed +" mph"
    humidity.textContent="humidity: "+ data.list[0].main.humidity + " %"




    console.log(data)
    cityName.textContent=data.city.name
    temp1.textContent="temp: "+ data.list[0].main.temp +" degrees" 
    wind1.textContent="wind: "+ data.list[0].wind.speed +" mph"
    humidity1.textContent="humidity: "+ data.list[0].main.humidity + " %"
//     dateOne.textContent = data.list[0].dt_txt.split(" ")[0]








//     dateOne.textContent = data.list[0].dt_txt.split(" ")[0]
//    ///this below is for the icon
//     var iconOne = document.createElement("img")
//     iconOne.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png")
//     dateOne.appendChild(iconOne)

    console.log(data)
    cityName.textContent=data.city.name
    temp2.textContent="temp: "+ data.list[8].main.temp +" degrees" 
    wind2.textContent="wind: "+ data.list[8].wind.speed +" mph"
    humidity2.textContent="humidity: "+ data.list[8].main.humidity + " %"

    console.log(data)
    cityName.textContent=data.city.name
    temp3.textContent="temp: "+ data.list[16].main.temp +" degrees" 
    wind3.textContent="wind: "+ data.list[16].wind.speed +" mph"
    humidity3.textContent="humidity: "+ data.list[16].main.humidity + " %"

    console.log(data)
    cityName.textContent=data.city.name
    temp4.textContent="temp: "+ data.list[24].main.temp +" degrees" 
    wind4.textContent="wind: "+ data.list[24].wind.speed +" mph"
    humidity4.textContent="humidity: "+ data.list[24].main.humidity + " %"

    console.log(data)
    cityName.textContent=data.city.name
    temp5.textContent="temp: "+ data.list[32].main.temp +" degrees" 
    wind5.textContent="wind: "+ data.list[32].wind.speed +" mph"
    humidity5.textContent="humidity: "+ data.list[32].main.humidity + " %"
};







// call function that gets the information from the API, then stringify's it so it is all in text. Also saves the info on the console via setItem and getItem property

function getForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=1890a9f0ba6cc3aecef74d6470826a8e&units=imperial').then(function (response) {
        return response.json()
    }).then(function (data) {
        renderForecast(data);
        localStorage.setItem("citySearch", JSON.stringify(data))
    
    })
}


saveButton.addEventListener('click', function (event) {
    console.log(weatherSearch.value)
getForecast(weatherSearch.value)
})

