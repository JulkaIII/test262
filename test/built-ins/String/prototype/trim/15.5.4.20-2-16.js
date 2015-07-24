// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-16
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to string (value is 1e+21)
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call(1e+21) === "1e+21";
    }
runTestCase(testcase);