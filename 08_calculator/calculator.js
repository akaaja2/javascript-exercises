const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(arr) {
	var total = 0;
for (var i in arr) {
  total += arr[i];
};
return total
};
const multiply = function(arr) {
  var total = 1;
for (var i in arr) {
  total *= arr[i];
};
return total;
};
const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
	var result = a;
  if (a === 0 || a === 1) return 1; 
  while (a > 1) {
    a--;
    result *= a; 
  }
  return result
};
// npm test calculator.spec.js
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
