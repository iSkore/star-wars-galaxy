'use strict';

const fs = require( 'fs' );

const geoData = 'planets';
const data    = JSON.parse( fs.readFileSync( `./${ geoData }-reprojected.geojson`, 'utf-8' ) );

const x = [];
const y = [];

( async function() {
	data.features = data.features.forEach(
		( data ) => {
			x.push( data.geometry.coordinates[ 0 ] );
			y.push( data.geometry.coordinates[ 1 ] );
		}
	);

	console.log( {
		xMin: Math.min( ...x ),
		xMax: Math.max( ...x ),
		yMin: Math.min( ...y ),
		yMax: Math.max( ...y )
	} );
} )();
