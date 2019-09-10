var _ = require('underscore');  //Calling the installed package
var addM = require('lion-lib-sayan');

var result = _.contains([1,2,3], 1);
console.log(result);

var newRes = addM.add(2, 3);
console.log(newRes);