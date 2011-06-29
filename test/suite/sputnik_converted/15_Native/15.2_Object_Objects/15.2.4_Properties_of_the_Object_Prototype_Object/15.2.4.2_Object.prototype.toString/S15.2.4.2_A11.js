// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.2_A11;
* @section: 15.2.4.2;
* @assertion: The length property of the toString method is 0;
* @description: Checking the Object.prototype.toString.length property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.2_A11",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.2_Object.prototype.toString/S15.2.4.2_A11.js",

assertion: "The length property of the toString method is 0",

description: "Checking the Object.prototype.toString.length property",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.toString.hasOwnProperty("length"))) {
  $ERROR('#1: The length property of the toString method is 0');
}

//CHECK#2
if (Object.prototype.toString.length !== 0) {
  $ERROR('#2: The length property of the toString method is 0');
}

 }
});

