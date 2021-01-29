// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.code);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const code = document.getElementById('code').value;

  if (city !== '' && code !== '') {
    // Change location
    weather.changeLocation(city, code);

    // Set location in LS
    storage.setLocationData(city, code);

    // Get and display new weather
    getWeather();

    // Close modal (with jQuery)
    $('#locModal').modal('hide');

    document.getElementById('city').value = '';
    document.getElementById('code').value = '';
  }
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}
