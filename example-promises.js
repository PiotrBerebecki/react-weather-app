// Callback pattern
// function getTempCallback(location, callback) {
//   callback(undefined, 28);
//   callback('City not found');
// }

// getTempCallback('London', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });


// Promises pattern
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(28);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('London').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });


// Example:
// Use the promise pattern to return the sum only if two numbers
// have been passed in to the addPromise function
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + ' + ' + b + ' = ' + (a + b));
      } else {
        reject('2 numbers have not been provided');
      }
    }, 1000);
  });
}

addPromise(2, 3).then(function(sum) {
  console.log('success:', sum);
}, function (err) {
  console.log('error:', err);
});
// success: 2 + 3 = 5

addPromise(2).then(function(sum) {
  console.log('success:', sum);
}, function (err) {
  console.log('error:', err);
});
// error: 2 numbers have not been provided