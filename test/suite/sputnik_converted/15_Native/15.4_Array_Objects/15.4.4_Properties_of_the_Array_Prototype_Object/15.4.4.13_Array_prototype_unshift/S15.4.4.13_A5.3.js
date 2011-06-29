// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.13_A5.3;
* @section: 15.4.4.13; 
* @assertion: The length property of unshift has the attribute ReadOnly;
* @description: Checking if varying the length property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.13_A5.3",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.13_Array_prototype_unshift/S15.4.4.13_A5.3.js",

assertion: "The length property of unshift has the attribute ReadOnly",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
var x = Array.prototype.unshift.length;
Array.prototype.unshift.length = Infinity;
if (Array.prototype.unshift.length !== x) {
  $ERROR('#1: x = Array.prototype.unshift.length; Array.prototype.unshift.length = Infinity; Array.prototype.unshift.length === x. Actual: ' + (Array.prototype.unshift.length));
}


 }
});

