# Installation
```
$ npm init
$ npm install mocha --save-dev
$ npm install chai --save-dev
```

TDD vs BDD

# Test-Driven Development

If we were to unpack the definition of TDD a bit more, we’d see that it is usually broken up into five different stages:

1. First the developer writes some tests.
2. The developer then runs those tests and (obviously) they fail because none of those features are actually implemented.
3. Next the developer actually implements those tests in code.
4. If the developer writes his code well, then the in next stage he will see his tests pass.
5. The developer can then refactor his code, add comments, clean it up, as he wishes because the developer knows that if the new code breaks something, then the tests will alert him by failing.

``` Javascript

    suite ('#factorial()', function (){
        test('equals 1 for sets of zero length', function (){
            assert.equal(1, factorial(0));
        });
    });
```
# Behavior-Driven Development

``` Javascript
 factorial(0).should.equal(1);

```

## TDD vs BDD

The choice between TDD and BDD is a complicated one. It depends on if there is an appropriate testing framework for your given target language, what your coworkers are comfortable with, and sometimes other factors.

Some argue that BDD is always better than TDD because it has the possibility of eliminating issues that might arise when using TDD.

The key to BDD is that it might prevent issues; it isn’t guaranteed to. Issues like poor code organization, bad design practices, etc. will still persist. You’ll just have a lower likely hood of writing bad tests and thus have more robust features.
