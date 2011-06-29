// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A7;
* @section: 12.6.2;
* @assertion: The "while" Statement is evaluted according to 12.6.2 and returns (normal, V, empty);
* @description: using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A7",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A7.js",

assertion: "The \"while\" Statement is evaluted according to 12.6.2 and returns (normal, V, empty)",

description: "using eval",

test: function testcase() {
   var __condition=0

__evaluated = eval("while (__condition<5) eval(\"__condition++\");");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__condition !== 5) {
	$ERROR('#1: The "while" statement is evaluated as described in the Standard');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 4) {
	$ERROR('#2: The "while" statement returns (normal, V, empty)');
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

