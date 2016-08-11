var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=London'>London</Link>
          </li>
          <li>
            <Link to='/?location=SanFrancisco'>San Francisco</Link>
          </li>
        </ol>
    </div>
  );
};

module.exports = Examples;