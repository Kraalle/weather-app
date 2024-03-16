export class WeatherData {
  constructor(data) {
    this.degrees_c = data.current.temp_c;
    this.degrees_f = data.current.temp_f;
    this.feelsLike_c = data.current.feelslike_c;
    this.feelsLike_f = data.current.feelslike_f;
    this.humidity = data.current.humidity;
    this.country = data.location.country;
    this.city = data.location.name;
  }
}
