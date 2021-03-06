Minimal Text Nodes
==================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory for creating minimal text nodes.


## Installation

``` bash
$ npm install minimal-text-node --save
```


## Usage

To create a new text node,

``` javascript
var createTextNode = require( 'minimal-text-node' );

var text = createTextNode();
```

The `text` instance has the following methods...


#### text.content( [content] )

This method is a setter/getter. If no `content` is provided, returns the text `content`. To set the text `content`

``` javascript
text.content( 'beep' );
```

Note: setting new `content` will replace any existing content.


#### text.append( content )

This is a convenience method for appending new `content` to existing content. 

``` javascript
// Inconvenient...
text.content( text.content()+'boop' );

// Convenient...
text.append( 'boop' );
```


#### text.toString()

Serializes the node as a `string`; i.e., returns the text `content`. 

``` javascript
text.toString();
```

This method provides a consistent interface with [minimal elements](https://github.com/element-io/element).


## Examples

``` javascript
var text = createTextNode();

text.content( 'beep' );

for ( var i = 0; i < 10; i++ ) {
	text.append( '!' );
}

console.log( text.toString() );
// Returns 'beep!!!!!!!!!!'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/minimal-text-node.svg
[npm-url]: https://npmjs.org/package/minimal-text-node

[travis-image]: http://img.shields.io/travis/element-io/minimal-text-node/master.svg
[travis-url]: https://travis-ci.org/element-io/minimal-text-node

[coveralls-image]: https://img.shields.io/coveralls/element-io/minimal-text-node/master.svg
[coveralls-url]: https://coveralls.io/r/element-io/minimal-text-node?branch=master

[dependencies-image]: http://img.shields.io/david/element-io/minimal-text-node.svg
[dependencies-url]: https://david-dm.org/element-io/minimal-text-node

[dev-dependencies-image]: http://img.shields.io/david/dev/element-io/minimal-text-node.svg
[dev-dependencies-url]: https://david-dm.org/dev/element-io/minimal-text-node

[github-issues-image]: http://img.shields.io/github/issues/element-io/minimal-text-node.svg
[github-issues-url]: https://github.com/element-io/minimal-text-node/issues
