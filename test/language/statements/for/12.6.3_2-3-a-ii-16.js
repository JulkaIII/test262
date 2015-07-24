// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 12.6.3; 
    The production 
    IterationStatement : for ( var VariableDeclarationListNoIn ; Expressionopt ; Expressionopt ) Statement
    is evaluated as follows:
es5id: 12.6.3_2-3-a-ii-16
description: >
    The for Statement - (normal, V, empty) will be returned when first
    Expression is a number (value is -0)
includes: [runTestCase.js]
---*/

function testcase() {
        var count = 0;
        for (var i = 0; -0;) {
            count++;
        }
        return count === 0;
    }
runTestCase(testcase);