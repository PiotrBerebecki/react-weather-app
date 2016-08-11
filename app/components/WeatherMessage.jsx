var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="subheader text-center">It's {temp}°C in {location}</h3>
  );
};

module.exports = WeatherMessage;