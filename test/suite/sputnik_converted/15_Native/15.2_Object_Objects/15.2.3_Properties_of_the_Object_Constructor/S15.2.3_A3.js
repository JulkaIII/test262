// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.3_A3;
* @section: 15.2.3, 15.2.4;
* @assertion: Object constructor has length property whose value is 1;
* @description: Checking Object.length; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.3_A3",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.3_Properties_of_the_Object_Constructor/S15.2.3_A3.js",

assertion: "Object constructor has length property whose value is 1",

description: "Checking Object.length",

test: function testcase() {
   //CHECK#1
if(!Object.hasOwnProperty("length")){
  $ERROR('#1: The Object constructor has the property "length"');
}

//CHECK#2
if (Object.length !== 1) {
  $ERROR('#2: Object.length property value should be 1');
}

 }
});

