// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A2_T7;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end) returns a string value(not object);
* @description: start is tested_string.length, end is tested_string.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A2_T7",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A2_T7.js",

assertion: "String.prototype.substring (start, end) returns a string value(not object)",

description: "start is tested_string.length, end is tested_string.length",

test: function testcase() {
   var __string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.substring(__string.length, __string.length) !== "") {
  $ERROR('#1: __string = new String("this is a string object"); __string.substring(__string.length, __string.length) === "". Actual: '+__string.substring(__string.length, __string.length) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

