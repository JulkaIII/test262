// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A2_T7;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: ^ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /^..^e/.test("ab\ncde") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A2_T7",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.6_Assertion/S15.10.2.6_A2_T7.js",

assertion: "The production Assertion :: ^ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...",

description: "Execute /^..^e/.test(\"ab\\ncde\") and check results",

test: function testcase() {
   __executed = /^..^e/.test("ab\ncde");

//CHECK#1
if (__executed) {
	$ERROR('#1: /^..^e/.test("ab\\ncde") === false');
}


 }
});

