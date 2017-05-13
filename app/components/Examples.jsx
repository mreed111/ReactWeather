var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Example locations to try:</p>
      <ol>
        <li>
          <Link to="/?location=Vallejo,CA">Vallejo,CA</Link>
        </li>
        <li>
          <Link to="/?location=Paris,FR">Paris,FR</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
