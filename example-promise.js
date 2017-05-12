/*
// Callback example:
// http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=565db73cb4ececbed05f1f535cac4dbb
function getTempCallback (location, callback) {
  // success case.
  callback(undefined, 70);
  // failure case.
  callback('City not found');
}

getTempCallback('Oakland', function (err, temp) {
  if (err) {
    console.log('error:', err);
    
  } else {
    console.log('success:', temp);
    
  }
});


// Promise example.

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout( function () {
      resolve(71);
      reject('City not found');
    },3000);
  });
}

getTempPromise('Oakland').then(function (temp) {
  // success case.
  console.log('Promise success:', temp);
}, function (err) {
  // error case.
  console.log('Promise error:', err);
});
*/

// add numbers

function addPromise (a, b) {
  return new Promise( function( resolve, reject ) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('both arguments must be numeric.');
    }
  });
}

addPromise (1,2).then( function (val) {
  console.log('addPromise success:', val);
}, function (err) {
  console.log('addPromise failure:', err);
});
addPromise (5, 'Mike').then( function (val) {
  console.log('addPromise success:', val);
}, function (err) {
  console.log('addPromise failure:', err);
});

