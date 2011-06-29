// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A2_T6;
* @section: 15.5.4.10, 15.10.6.2;
* @assertion: match returns array as specified in 15.10.6.2;
* @description: Regular expression is /([\d]{5})([-\ ]?[\d]{4})?$/. Last match is void 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A2_T6",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.10_String.prototype.match/S15.5.4.10_A2_T6.js",

assertion: "match returns array as specified in 15.10.6.2",

description: "Regular expression is /([\\d]{5})([-\\ ]?[\\d]{4})?$/. Last match is void 0",

test: function testcase() {
   var __string = "Boston, Mass. 02134";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0]!== "02134") {
  $ERROR('#1: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[0]=== "02134". Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1]!== "02134") {
  $ERROR('#2: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[1]=== "02134". Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2]!== void 0) {
  $ERROR('#3: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[2]=== void 0. Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length !==3) {
  $ERROR('#4: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).length ===3. Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index !==14) {
  $ERROR('#5: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).index ===14. Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input !==__string) {
  $ERROR('#6: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).input ===__string. Actual: '+__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

