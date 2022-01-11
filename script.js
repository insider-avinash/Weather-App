
const api = {
    key: "6dde46ad25d510b153878c2b0f3febcc",
    baseUrl : "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event){
    if(event.keyCode == 13){
        console.log(searchBox.value);
        getResults(searchBox.value);
    }
}

function getResults(query){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=6dde46ad25d510b153878c2b0f3febcc`)
    .then(res =>{
        return res.json();
    }).then(displayResults);
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)} <span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)} °c / ${Math.round(weather.main.temp_max)}°c`;

    

}

function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday","Saturday"];                


let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day},  ${date} ${month} ${year}`;
}









































