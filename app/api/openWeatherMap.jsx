var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=93b0b9be965a11f0f099c8c7f74afa63&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          temp: Math.round(res.data.main.temp),
          location: res.data.name,
          country: res.data.sys.country
        };
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};