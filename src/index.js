import { WeatherData } from "./weatherDataModule";
import { fetchWeather } from "./apiModule";
import { displayWeather } from "./domModule";
import { searchWeather } from "./searchModule";

const searchForm = document.querySelector(".input-form");
const locationInput = document.querySelector(".location");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const location = locationInput.value.trim();
  if (location) {
    try {
      const weatherData = await searchWeather(location);
      displayWeather(weatherData);
    } catch (error) {
      console.error("Error searching weather:", error.message);
    }
  } else {
    alert("Please enter a location");
  }
});

// const container = document.querySelector("#container");
// const city = document.querySelector("#city");
// const country = document.querySelector("#country");
// const degrees_c = document.querySelector("#degreesC");
// const degrees_f = document.querySelector("#degreesF");
// const feelsLikeC = document.querySelector("#feelsLikeC");
// const feelsLikeF = document.querySelector("#feelsLikeF");
// const humidity = document.querySelector("#humidity");
// const locationInput = document.querySelector("#location");
// const searchButton = document.querySelector("#search");

// async function getWeather(location) {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=${location}`,
//       { mode: "cors" }
//     );
//     if (!response.ok) {
//       alert("Invalid location or API key");
//       throw new Error("Invalid location or API key");
//     }
//     const data = await response.json();

//     if (!data.current) {
//       alert("Invalid location or API key.");
//       throw new Error("Invalid location or API key.");
//     }
//     const degrees_c = data.current.temp_c;
//     const degrees_f = data.current.temp_f;
//     const feelsLike_c = data.current.feelslike_c;
//     const feelsLike_f = data.current.feelslike_f;
//     const humidity = data.current.humidity;
//     const country = data.location.country;
//     const city = data.location.name;

//     return {
//       degrees_c,
//       degrees_f,
//       feelsLike_c,
//       feelsLike_f,
//       humidity,
//       country,
//       city,
//     };
//   } catch (error) {
//     console.error("There has been a problem with your fetch operation:", error);
//   }
// }

// searchButton.addEventListener("click", async (event) => {
//   event.preventDefault();
//   const location = locationInput.value.trim();
//   if (location) {
//     const weatherData = await getWeather(location);
//     degrees_c.textContent = `Degrees: ${weatherData.degrees_c} °C`;
//     degrees_f.textContent = `Degrees: ${weatherData.degrees_f} °F`;
//     feelsLikeC.textContent = `Feels like: ${weatherData.feelsLike_c} °C`;
//     feelsLikeF.textContent = `Feels like: ${weatherData.feelsLike_f} °F`;
//     humidity.textContent = `Humidity: ${weatherData.humidity}`;
//     city.textContent = "City: " + weatherData.city;
//     country.textContent = "Country: " + weatherData.country;
//     container.classList.add("result");
//     clearInput();
//   } else {
//     alert("Please enter a location");
//   }
// });

// function clearInput() {
//   locationInput.value = "";
// }
