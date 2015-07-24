// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-25
description: >
    Array.prototype.reduceRight - Function Object can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objFunction = function () { };
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objFunction;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objFunction) === true && accessed;
    }
runTestCase(testcase);