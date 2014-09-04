// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Text class:
	Text = require( 'minimal-text-class' ),

	// Module to be tested:
	createText = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'minimal-text-node', function tests() {
	'use strict';

	// TESTS //

	it( 'should export a function', function test() {
		expect( createText ).to.be.a( 'function' );
	});

	it( 'should create a new Text instance', function test() {
		var text = createText();
		assert.ok( text instanceof Text );
	});

});