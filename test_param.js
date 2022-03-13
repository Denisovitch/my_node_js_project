const packLoadash = require('lodash')
var tmpl = packLoadash.chunk(['a', 'b', 'c', 'd'], 3);
// console.log("🚀 ~ file: test_param.js ~ line 3 ~ tmpl", tmpl)

var argv = require('minimist')(process.argv.slice(2));
 console.log(`The name is ${argv._[0]} and the age is ${argv._[1]}`);




