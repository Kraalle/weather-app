export function displayWeather(weatherData) {
  const degrees_c = document.querySelector("#degreesC");
  const degrees_f = document.querySelector("#degreesF");
  const feelsLikeC = document.querySelector("#feelsLikeC");
  const feelsLikeF = document.querySelector("#feelsLikeF");
  const humidity = document.querySelector("#humidity");
  const city = document.querySelector("#city");
  const country = document.querySelector("#country");

  degrees_c.textContent = `Degrees: ${weatherData.degrees_c} °C`;
  degrees_f.textContent = `Degrees: ${weatherData.degrees_f} °F`;
  feelsLikeC.textContent = `Feels like: ${weatherData.feelsLike_c} °C`;
  feelsLikeF.textContent = `Feels like: ${weatherData.feelsLike_f} °F`;
  humidity.textContent = `Humidity: ${weatherData.humidity}`;
  city.textContent = "City: " + weatherData.city;
  country.textContent = "Country: " + weatherData.country;
  container.classList.add("result");
}

export function clearInput() {
  locationInput.value = "";
}
