const reverseString = function(str) {
var arrString = str.split("");
var flipMode = arrString.reverse();
var rejoin = flipMode.join("");
return rejoin; 

};

// Do not edit below this line
module.exports = reverseString;
