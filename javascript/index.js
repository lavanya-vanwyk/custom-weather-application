

// function formatDate(date) {
//   let minutes = date.getMinutes();
//   let hours = date.getHours();
//   let day = date.getDay();

//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];

//   let formattedDay = days[day];
//   return `${formattedDay} ${hours}:${minutes}`;
// }

// let currentDateElement = document.querySelector("#current-date");
// let currentDate = new Date();

// currentDateElement.innerHTML = formatDate(currentDate);
function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city"); 
  
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = searchInput.value;
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);