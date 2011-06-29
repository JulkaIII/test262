// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.4_A6.1;
 * @section: 11.9.4, 11.9.6;
 * @assertion: If Type(x) and Type(y) are Undefined-s, return true;
 * @description: void 0, eval("var x") is undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.4_A6.1",

path: "TestCases/11_Expressions/11.9_Equality_Operators/11.9.4_The_Strict_Equals_Operator/S11.9.4_A6.1.js",

assertion: "If Type(x) and Type(y) are Undefined-s, return true",

description: "void 0, eval(\"var x\") is undefined",

test: function testcase() {
   //CHECK#1
if (!(undefined === undefined)) {
  $ERROR('#1: undefined === undefined');
}

//CHECK#2
if (!(void 0 === undefined)) {
  $ERROR('#2: void 0 === undefined');
}

//CHECK#3
if (!(undefined === eval("var x"))) {
  $ERROR('#3: undefined === eval("var x")');
}

 }
});

