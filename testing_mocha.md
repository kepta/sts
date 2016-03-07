# Installation Guide
To start working with Mocha follow the steps:

### 1. Installation

#### 1.1 Get Mocha

Install with npm

    $ npm install -g mocha

#### 1.2 Get Chai

Package is available through npm

    $  npm install chai

### 2. Getting started

    $ npm install -g mocha

    $ mkdir test

    $ $EDITOR test/test.js


### 3. Examples

####  a. assert(expression, message)
  Write your own test expressions

    assert('foo' !== 'bar', 'foo is not bar');

    assert(Array.isArray([]), 'empty arrays are arrays');

#### b. .isOk(object, [message])
Asserts that object is truthy.



    assert.isNotOk('everything', 'this will fail');

    assert.isNotOk(false, 'this will pass');

#### c. .typeOf(value, name, [message])
Asserts that value’s type is name, as determined by Object.prototype.toString.


    assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');

    assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');

    assert.typeOf('tea', 'string', 'we have a string');

    assert.typeOf(/tea/, 'regexp', 'we have a regular expression');

    assert.typeOf(null, 'null', 'we have a null');

    assert.typeOf(undefined, 'undefined', 'we have an undefined');
