// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-95-1
description: >
    Object.defineProperty - 'Attributes' is an Error object that uses
    Object's [[Get]] method to access the 'configurable' property
    (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Error.prototype.configurable = true;
            var errObj = new Error();

            Object.defineProperty(obj, "property", errObj);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Error.prototype.configurable;
        }
    }
runTestCase(testcase);