// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
  * @name: S11.8.3_A3.1_T2.7;
  * @section: 11.8.3;
  * @assertion: Operator x <= y returns ToNumber(x) <= ToNumber(y), if Type(Primitive(x)) is not String or Type(Primitive(y)) is not String;
  * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between String (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.3_A3.1_T2.7",

path: "TestCases/11_Expressions/11.8_Relational_Operators/11.8.3_The_Less_than_or_equal_Operator/S11.8.3_A3.1_T2.7.js",

assertion: "Operator x <= y returns ToNumber(x) <= ToNumber(y), if Type(Primitive(x)) is not String or Type(Primitive(y)) is not String",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between String (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if ("1" <= null !== false) {
  $ERROR('#1: "1" <= null === false');
}

//CHECK#2
if (null <= "1" !== true) {
  $ERROR('#2: null <= "1" === true');
}

//CHECK#3
if (new String("1") <= null !== false) {
  $ERROR('#3: new String("1") <= null === false');
}

//CHECK#4
if (null <= new String("1") !== true) {
  $ERROR('#4: null <= new String("1") === true');
}

 }
});

