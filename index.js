const API_KEY = "11ac85296bdbe816b3301327943bde16";
// let url


function handleFormSubmit(event) {
  //handle submit
  event.preventDefault();
  var city = document.querySelector('#city').value.replace(/ /g, '+');
  fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
  fetch(url)
  .then(data => data.json())
  .then(convertedData  => displayCurrentWeather(convertedData)  +  console.log( convertedData))

  ;
}

function displayCurrentWeather(inputtedData) {
  //render current weather data to the DOM using provided IDs and json from API
  let temp = document.getElementById('temp');

  temp.innerHTML = inputtedData.main.temp;
  low.innerHTML = inputtedData.main.temp_min;
  high.innerHTML = inputtedData.main.temp_max;
  humidity.innerHTML = (inputtedData.main.humidity + "%");
  cloudCover.innerHTML = (inputtedData.clouds.all + "%");

}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
   let url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`;
  fetch(url2)
  .then(data2 => data2.json())
  .then(convertedData2  => displayFiveDayForecast(convertedData2)  +  console.log( convertedData2))
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('cityForm').addEventListener('submit',handleFormSubmit)
  document.getElementById('city').focus;

})
