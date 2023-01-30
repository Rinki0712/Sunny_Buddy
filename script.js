const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '916655a858mshd231bd6f4c5013cp145441jsn89d2942afccc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city)=>{ //function to get the weather for different city that is searched on page.
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options) //fetching data from weather api for given city name
    .then(response => response.json())
    .then(response => {

        console.log(response)

        //cloud_pct.innerHTML = response.cloud_pct
        //different weather conditions.
        temp.innerHTML = response.temp 
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err)); //to handle error
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()//prevents page to reload
    getWeather(city.value)
})
getWeather("Delhi")// search for weather of Delhi.

/* Function declaration for getting details of common cities.

const getWeather2=(city2)=>{ //function to get the weather for different city that is searched on page.
    cityName.innerHTML=city2
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city2, options) //fetching data from weather api for given city name
    .then(response => response.json())
    .then(response => {

        console.log(response)
//different weather conditions.
        cloud_pct2.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp 
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        min_temp2.innerHTML = response.min_temp
        max_temp2.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees2.innerHTML = response.wind_degrees
        sunrise2.innerHTML = response.sunrise
        sunset2.innerHTML = response.sunset


    })
    .catch(err => console.error(err)); //to handle error
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()//prevents page to reload
    getWeather2(city2.value)
})
getWeather2("Shanghai")
*/