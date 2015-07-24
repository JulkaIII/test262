// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-i-29
description: >
    Array.prototype.reduceRight applied to Function object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        var obj = function (a, b, c) {
            return a + b + c;
        };
        obj[0] = 0;
        obj[1] = 1;
        obj[2] = 2;
        obj[3] = 3;

        Array.prototype.reduceRight.call(obj, callbackfn, initialValue);
        return testResult;
    }
runTestCase(testcase);