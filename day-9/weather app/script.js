const inputEl = document.getElementById("input-el")
const searchBtn = document.getElementById("search-btn")
const image = document.getElementById("weather-img")
const temperature = document.getElementById("temp")
const desc = document.getElementById("status")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const LNF = document.querySelector(".location-not-found")
const weatherbody = document.querySelector(".weather-body")

const key = "1e87029128da3143c433bdce8c1925fa"

searchBtn.addEventListener("click", function(){
    checkweather(inputEl.value)
})

inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault()
        checkweather(inputEl.value)
    }
})


async function checkweather(city){
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    const weather_data = await fetch(`${api_url}`).then(response => response.json())
    console.log(weather_data)
    
    if (weather_data.cod === "404"){
        LNF.style.display = "flex"
        weatherbody.style.display = "none"
        return
    }
    else{
        weatherbody.style.display = "flex"
        LNF.style.display = "none"

        temperature.innerHTML = `${Math.round((weather_data.main.temp-273.15)*10)/10}<sup>°C</sup>`
        desc.innerHTML = `${weather_data.weather[0].description}` 
        humidity.innerHTML = `${weather_data.main.humidity}%`
        wind.innerHTML = `${Math.round((weather_data.wind.speed*3600/1000)*10)/10}Km/H`

        switch(weather_data.weather[0].main){
            case "Clouds":
                image.src = "img/cloud.png"
                break
            case "Clear":
                image.src = "img/clear.png" 
                break   
            case "Rain":
                image.src = "img/rain.png"    
                break
            case "Mist":
                image.src = "img/mist.png"
                break
            case "Snow":
                image.src = "img/snow.png"
                break
        }
    }
}