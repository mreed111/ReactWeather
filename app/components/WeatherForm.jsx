var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    //
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    // http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=565db73cb4ececbed05f1f535cac4dbb
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="location" placeholder="Enter city name"/></div>
          <div><button>Get Weather</button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
