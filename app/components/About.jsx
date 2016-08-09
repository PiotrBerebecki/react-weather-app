var React =  require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
// the above can be replaced with
// stateless functional component
// if only render method used in 
// a component

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the about page!</p>
    </div>
  );
};


module.exports = About;