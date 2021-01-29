class Weather {
  constructor(city, code) {
    this.apiKey = '41449ea0da37fcf1aeb8cdf6cb39ae76';
    this.city = city;
    this.code = code;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, code) {
    this.city = city;
    this.code = code;
  }
}
