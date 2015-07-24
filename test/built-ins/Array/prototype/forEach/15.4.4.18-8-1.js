// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-1
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  var callCnt = 0;
  function cb(){callCnt++}
  var i = [].forEach(cb);
  if (callCnt === 0) {
    return true;
  }
 }
runTestCase(testcase);