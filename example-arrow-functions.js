var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Pete'));


// anonymous functions take this binding
// but arrow function take their parent's binding
// so if using anonymous functions as below, you
// need to for example use the 'that' hack;
var person = {
  name: 'Pete',
  greet: function () {
    var that = this;
    names.forEach(function (name) {
      console.log(that.name + ' says hi to ' + name);
    });
  }
};
// person.greet();

// but arrow functions solve this problem
var personArrow = {
  name: 'Pete',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
// personArrow.greet();

// Challenge area
// Reproduce add using statement and
// expressions syntax
function add(a, b) {
  return a + b;
}

var add2 = (a, b) => {
  return a + b;
};

var add3 = (a, b) => a + b;

console.log(add2(1, 3));
console.log(add2(9, 3));