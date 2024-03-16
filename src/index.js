const container = document.querySelector("#container");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const degrees_c = document.querySelector("#degreesC");
const degrees_f = document.querySelector("#degreesF");
const feelsLikeC = document.querySelector("#feelsLikeC");
const feelsLikeF = document.querySelector("#feelsLikeF");
const humidity = document.querySelector("#humidity");
const locationInput = document.querySelector("#location");
const searchButton = document.querySelector("#search");

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=${location}`,
    { mode: "cors" }
  );

  const data = await response.json();
  const degrees_c = data.current.temp_c;
  const degrees_f = data.current.temp_f;
  const feelsLike_c = data.current.feelslike_c;
  const feelsLike_f = data.current.feelslike_f;
  const humidity = data.current.humidity;
  const country = data.location.country;
  const city = data.location.name;
  // console.log(data);

  return {
    degrees_c,
    degrees_f,
    feelsLike_c,
    feelsLike_f,
    humidity,
    country,
    city,
  };
}

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const location = locationInput.value.trim();
  if (location) {
    const weatherData = await getWeather(location);
    degrees_c.textContent = `Degrees: ${weatherData.degrees_c} °C`;
    degrees_f.textContent = `Degrees: ${weatherData.degrees_f} °F`;
    feelsLikeC.textContent = `Feels like: ${weatherData.feelsLike_c} °C`;
    feelsLikeF.textContent = `Feels like: ${weatherData.feelsLike_f} °F`;
    humidity.textContent = `Humidity: ${weatherData.humidity}`;
    city.textContent = "City: " + weatherData.city;
    country.textContent = "Country: " + weatherData.country;
    container.classList.add("result");
  } else {
    alert("Please enter a location");
  }
});

// function clearInput() {
//   locationInput.value = "";
// }
