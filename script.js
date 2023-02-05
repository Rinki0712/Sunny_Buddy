let isFirstElementOfTableDeleted = false;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "916655a858mshd231bd6f4c5013cp145441jsn89d2942afccc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  //function to get the weather for different city that is searched on page.
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  ) //fetching data from weather api for given city name
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      
      //cloud_pct.innerHTML = response.cloud_pct
      //different weather conditions.
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML =new Date((response.sunrise)*1000)
      sunset.innerHTML = new Date((response.sunset)*1000)
    })
    .catch((err) => console.error(err)); //to handle error
};
submit.addEventListener("click", (e) => {
  //on clicking search button
  e.preventDefault(); //prevents page to reload
  getWeather(city.value);
});
getWeather("Delhi"); // default search for weather of Delhi.



function insRow(data, city) {
  var x = document.getElementById("citiesList");
  console.log("Getting rows data");
  console.log(x.rows[0]);
  // deep clone the targeted row
  var new_row = x.rows[0].cloneNode(true); 
  new_row.childNodes[1].innerHTML = city;
  new_row.childNodes[3].innerHTML = data.cloud_pct;
  new_row.childNodes[5].innerHTML = data.feels_like;
  new_row.childNodes[7].innerHTML = data.humidity;
  new_row.childNodes[9].innerHTML = data.max_temp;
  new_row.childNodes[11].innerHTML = data.min_temp;
  new_row.childNodes[13].innerHTML = new Date((data.sunrise)*1000)
  new_row.childNodes[15].innerHTML = new Date((data.sunset)*1000)
  new_row.childNodes[17].innerHTML = data.wind_degrees
  new_row.childNodes[19].innerHTML = data.wind_speed

  if (isFirstElementOfTableDeleted == false) {
    x.rows[0].remove();
    isFirstElementOfTableDeleted = true;
  }
  //console.log(new_row.childNodes);
  x.appendChild(new_row);
}

//function to get data
const onlyGetWeather = async (city) => {
  
  const data = await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  );
  const JsonData = await data.json();
  console.log(JsonData);
  return JsonData;
};

//function to set data
const setCityWeatherInTable = async () => {
  const totalCities = [
    "Noida",
    "Mumbai",
    "Kolkata",
    "Tokyo",
    "London",
    "Chandigarh",
  ];

  for (city of totalCities) {
    const cityData = await onlyGetWeather(city);
    insRow(cityData, city);
  }
};

setCityWeatherInTable();
