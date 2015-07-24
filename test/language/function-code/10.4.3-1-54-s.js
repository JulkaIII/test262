// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-54-s
description: >
    checking 'this' (Literal getter)
includes: [runTestCase.js]
---*/

function testcase() {
var o = { get foo() { return this; } }
return o.foo===o;
}
runTestCase(testcase);