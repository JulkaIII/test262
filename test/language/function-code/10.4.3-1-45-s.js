// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-45-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration with a strict
    directive prologue defined within a FunctionDeclaration)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
function f1() {
    function f() {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===fnGlobalObject());
}
return f1();
}
runTestCase(testcase);