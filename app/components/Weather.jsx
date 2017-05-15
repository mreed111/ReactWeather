var React = require('react');
var {Link, IndexLink} = require('react-router');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    console.log('handleSearch: '+location);
    var that = this; 

    this.setState({isLoading: true});
    //debugger;
    openWeatherMap.getTemp(location).then(function (temp) {
      //

      console.log('temp found for '+location+': '+toString(temp));
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      //
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3 className="text-center">Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;