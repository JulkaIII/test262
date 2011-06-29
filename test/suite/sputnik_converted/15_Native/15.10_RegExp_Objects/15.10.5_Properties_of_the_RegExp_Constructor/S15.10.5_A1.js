// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.5_A1;
* @section: 15.10.5;
* @assertion: RegExp constructor has length property whose value is 2;
* @description: Checking RegExp.length property;
*/

 
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.5_A1",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.5_Properties_of_the_RegExp_Constructor/S15.10.5_A1.js",

assertion: "RegExp constructor has length property whose value is 2",

description: "Checking RegExp.length property",

test: function testcase() {
   //CHECK#1
if (RegExp.length !== 2) {
	$ERROR('#1: RegExp.length === 2. Actual: ' + (RegExp.length));
}


 }
});

