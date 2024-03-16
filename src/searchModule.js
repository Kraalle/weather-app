import { clearInput, displayWeather } from "./domModule";
import { fetchWeather } from "./apiModule";

export async function searchWeather(location) {
  try {
    if (!location) {
      throw new Error("Location is required");
    }

    const weatherData = await fetchWeather(location);

    displayWeather(weatherData);

    clearInput();
  } catch (error) {
    console.error("Error searching weather:", error.message);
  }
}
