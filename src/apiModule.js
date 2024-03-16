import { WeatherData } from "./weatherDataModule";
export async function fetchWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=33417db233ee48d59c313733240603&q=${location}`,
    { mode: "cors" }
  );
  if (!response.ok) {
    throw new Error("Invalid location or API key");
  }

  const data = await response.json();
  if (!data.current) {
    throw new Error("Invalid location or API key.");
  }

  return new WeatherData(data);
}
