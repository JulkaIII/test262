// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-28
description: >
    Array.prototype.lastIndexOf - side effects produced by step 1 are
    visible when an exception occurs
includes: [runTestCase.js]
---*/

function testcase() {

        var stepFiveOccurs = false;
        var fromIndex = {
            valueOf: function () {
                stepFiveOccurs = true;
                return 0;
            }
        };

        try {
            Array.prototype.lastIndexOf.call(undefined, undefined, fromIndex);
            return false;
        } catch (e) {
            return (e instanceof TypeError) && !stepFiveOccurs;
        }
    }
runTestCase(testcase);