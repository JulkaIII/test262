// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A8;
* @section: 15.5.4.12;
* @assertion: The String.prototype.search.length property has the attribute DontEnum;
* @description: Checking if enumerating the String.prototype.search.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A8",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A8.js",

assertion: "The String.prototype.search.length property has the attribute DontEnum",

description: "Checking if enumerating the String.prototype.search.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.search.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.search.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.search.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.search.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.search.propertyIsEnumerable(\'length\') return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (p in String.prototype.search){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.search){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

