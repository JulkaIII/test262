// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A2_T6;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end) returns a string value(not object);
* @description: start is negative float number, end is 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A2_T6",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A2_T6.js",

assertion: "String.prototype.slice (start, end) returns a string value(not object)",

description: "start is negative float number, end is 0",

test: function testcase() {
   var __string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.slice(-0.01,0) !== "") {
  $ERROR('#1: __string = new String("this is a string object"); __string.slice(-0.01,0) === "". Actual: '+__string.slice(-0.01,0) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

