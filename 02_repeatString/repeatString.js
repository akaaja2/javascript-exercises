const repeatString = function(string, num) {
    var repeatedString = "";
    if (num < 0) {return 'ERROR'}
    else {
    while (num > 0) {
      repeatedString += string;
      num--;
    }
    return repeatedString;
    }
};
console.log(repeatString(test,4));
// Do not edit below this line
module.exports = repeatString;
