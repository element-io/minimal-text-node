
var createTextNode = require( './../lib' );

// Create a new text node:
var text = createTextNode();

text.content( 'beep' );

for ( var i = 0; i < 10; i++ ) {
	text.append( '!' );
}

console.log( text.toString() );
// Returns 'beep!!!!!!!!!!'