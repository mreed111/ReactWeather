var React = require('react');
var PropTypes = require('prop-types');

var ErrorModal = React.createClass({
  //
  getDefaultProps: function () {
    return {
      title: 'error'
    };
  },
  propTypes: {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
  },
  componentDidMount: function () {
    // create a new instance of the modal dialog
    var modal = new Foundation.Reveal($('#error-modal'));
    // display the dialog
    modal.open();
  },

  render: function () {
    //debugger;
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="tiny reveal text-center" 
       data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;