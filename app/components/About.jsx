var React = require('react');
var {Link, IndexLink} = require('react-router');

// stateless functional component
var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">Weather application:</h3>
      <p>  This is my React Weather application.  It will fetch the current temperature for a specified city in degrees Fahrenheit.</p>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <p></p>
      <p>
      
          Some resources/tools used:

      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Used to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;