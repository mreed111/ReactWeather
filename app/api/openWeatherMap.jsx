var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=565db73cb4ececbed05f1f535cac4dbb';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.response.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      debugger;
      throw new Error(res.response.data.message);
    });
  }
}
