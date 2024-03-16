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

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=london",
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

(async () => {
  const weatherData = await getWeather();
  degrees_c.textContent = weatherData.degrees_c + " C";
  degrees_f.textContent = weatherData.degrees_f + " F";
  feelsLikeC.textContent = weatherData.feelsLike_c + " C";
  feelsLikeF.textContent = weatherData.feelsLike_f + " F";
  humidity.textContent = weatherData.humidity;
  city.textContent = weatherData.city;
  country.textContent = weatherData.country;
  container.appendChild(degrees_c);
  container.appendChild(degrees_f);
  container.appendChild(feelsLikeC);
  container.appendChild(feelsLikeF);
  container.appendChild(humidity);
  container.appendChild(country);
  container.appendChild(city);
  console.log(weatherData);
})();

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(locationInput.value);
  clearInput();
});

function clearInput() {
  locationInput.value = "";
}
