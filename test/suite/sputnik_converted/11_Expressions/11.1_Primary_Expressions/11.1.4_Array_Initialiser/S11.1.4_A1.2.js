// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.4_A1.2;
* @section: 11.1.4;
* @assertion: Evaluate the production ArrayLiteral: [ Elision ];
* @description: Checking various properties the array defined with "var array = [,,,,,]";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.4_A1.2",

path: "TestCases/11_Expressions/11.1_Primary_Expressions/11.1.4_Array_Initialiser/S11.1.4_A1.2.js",

assertion: "Evaluate the production ArrayLiteral: [ Elision ]",

description: "Checking various properties the array defined with \"var array = [,,,,,]\"",

test: function testcase() {
   var array = [,,,,,];

//CHECK#1
if (typeof array !== "object") {
  $ERROR('#1: var array = [,,,,,]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  $ERROR('#2: var array = [,,,,,]; array instanceof Array === true');
}

//CHECK#3
if (array.toString !== Array.prototype.toString) {
  $ERROR('#3: var array = [,,,,,]; array.toString === Array.prototype.toString. Actual: ' + (array.toString));
}

//CHECK#4
if (array.length !== 5) {
  $ERROR('#4: var array = [,,,,,]; array.length === 5. Actual: ' + (array.length));
}

 }
});

