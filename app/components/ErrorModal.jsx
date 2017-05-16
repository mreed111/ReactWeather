var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
    var {title, message} = this.props;
    // foundation makes changes to the DOM when it call modal.open();
    // This will cause React to lose track of the dom state.
    // moving the element creation here, outside the render method, fixes that.
    var modalMarkup = (
      <div id="error-modal" className="tiny reveal text-center" 
       data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    );

    // convert the jsx code to string
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // add the jsx into the DOM
    $(ReactDOM.findDOMNode(this)).html($modal);
    //debugger;
    // create a new instance of the modal dialog
    var modal = new Foundation.Reveal($('#error-modal'));
    // display the dialog
    modal.open();
  },

  render: function () {
    
    var {title, message} = this.props;
    //debugger;
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;