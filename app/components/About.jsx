var React =  require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
// the above can be replaced with
// stateless functional component below
// if only the render method is used

var About = (props) => {
  return (
    <div>
      <h1 className="subheader text-center">About</h1>
      <p>This app has been developed by <a href="https://github.com/PiotrBerebecki">Piotr Berebecki</a> as part of undertaking an excellent course: <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The Complete React Web App Developer Course</a> by <a href="http://www.mead.io/">Andrew Mead</a>.</p>
      <p>You can find the full source code <a href="https://github.com/PiotrBerebecki/react-weather-app">here</a>.</p>
      <p>The technologies used include:</p>
      <ul>
        <li>React</li>
        <li>ES6</li>
        <li>Node</li>
        <li>Webpack</li>
        <li>Express</li>
        <li>Axios (promise based Ajax requests)</li>
        <li>Open Weather Map (Weather API)</li>
        <li>Foundation (front-end framework)</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
      </ul>
      <blockquote>
        You don't learn to walk by following rules. You learn by doing, and by falling over.
        <cite>Richard Branson</cite>
      </blockquote>
    </div>
  );
};


module.exports = About;