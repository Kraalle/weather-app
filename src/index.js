async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=london",
    { mode: "cors" }
  );
  response.json().then(function (response) {
    console.log(response);
  });
}

getWeather();
