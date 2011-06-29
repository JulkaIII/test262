// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A1_T11;
* @section: 15.5.1.1;
* @assertion: When String is called as a function rather than as a constructor, it performs a type conversion;
* @description: Call String(1/0) and String(-1/0), and call with +/-Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A1_T11",

path: "TestCases/15_Native/15.5_String_Objects/15.5.1_The_String_Constructor_Called_as_a_Function/S15.5.1.1_A1_T11.js",

assertion: "When String is called as a function rather than as a constructor, it performs a type conversion",

description: "Call String(1/0) and String(-1/0), and call with +/-Infinity",

test: function testcase() {
   var __str = String(1/0);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(1/0); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "Infinity") {
  $ERROR('#2: __str = String(1/0); __str === "Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(-1/0);

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __str !== "string") {
  $ERROR('#3: __str = String(-1/0); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__str !== "-Infinity") {
  $ERROR('#4: __str = String(-1/0); __str === "-Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(Infinity);

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (typeof __str !== "string") {
  $ERROR('#5: __str = String(Infinity); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__str !== "Infinity") {
  $ERROR('#6: __str = String(Infinity); __str === "Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(-Infinity);

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if (typeof __str !== "string") {
  $ERROR('#7: __str = String(-Infinity); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if (__str !== "-Infinity") {
  $ERROR('#8: __str = String(-Infinity); __str === "-Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(Number.POSITIVE_INFINITY);

//////////////////////////////////////////////////////////////////////////////
//CHECK#9
if (typeof __str !== "string") {
  $ERROR('#9: __str = String(Number.POSITIVE_INFINITY); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#10
if (__str !== "Infinity") {
  $ERROR('#10: __str = String(Number.POSITIVE_INFINITY); __str === "Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(Number.NEGATIVE_INFINITY);

//////////////////////////////////////////////////////////////////////////////
//CHECK#11
if (typeof __str !== "string") {
  $ERROR('#11: __str = String(Number.NEGATIVE_INFINITY); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#12
if (__str !== "-Infinity") {
  $ERROR('#12: __str = String(Number.NEGATIVE_INFINITY); __str === "-Infinity". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

