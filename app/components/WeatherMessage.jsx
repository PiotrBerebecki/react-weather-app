var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
  return (
    <h3 className="text-center">It's {temp}°C in {location}, {country}</h3>
  );
};

module.exports = WeatherMessage;