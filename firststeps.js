// Import the JSVerify library:
var p = require("jsverify"); 

// Define the 'system under test':

function squared(x) {
  return x * x; 
}

var squareRootOfNSquaredEqualsN = p.forall(p.integer(), function ( n ) {
  return Math.sqrt(squared(n)) === n;
});

var options = { tests: 100, quiet: false };

p.check(squareRootOfNSquaredEqualsN, options);
