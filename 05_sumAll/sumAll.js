//issue with jest test running

const sumAll = function(a,b) {

if (b<a) {
    [a, b] = [b, a];
    return .5 * b * (b + 1) - .5 * a * (a - 1)
} else {

return .5 * b * (b + 1) - .5 * a * (a - 1)
};

// Do not edit below this line
module.exports = sumAll();