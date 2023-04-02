console.log('here')
var storedCity=JSON.parse(localStorage.getItem("citySearch"));
console.log(storedCity)
var saveButton = document.querySelector('.save');
var weatherSearch = document.querySelector('.weatherSearch');


function renderForecast(data) {
var cityName=document.querySelector("#cityName");
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var humidity=document.querySelector('#humidity');
    console.log(data)
    cityName.textContent=data.city.name
    temp.textContent="temp: "+ data.list[0].main.temp +" degrees" 
    wind.textContent="wind: "+ data.list[0].wind.speed +" mph"
    humidity.textContent="humidity: "+ data.list[0].main.humidity + " %"
};













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

