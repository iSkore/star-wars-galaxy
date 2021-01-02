'use strict';

const fs              = require( 'fs' );
const cregion         = JSON.parse( fs.readFileSync( './cregion.geojson', 'utf-8' ) );
const grid            = JSON.parse( fs.readFileSync( './grid.geojson', 'utf-8' ) );
const hyperspaceLanes = JSON.parse( fs.readFileSync( './hyperspace-lanes.geojson', 'utf-8' ) );
const region          = JSON.parse( fs.readFileSync( './region.geojson', 'utf-8' ) );
const sectors         = JSON.parse( fs.readFileSync( './sectors.geojson', 'utf-8' ) );
const turf            = require( '@turf/turf' );

// for ( let i = 0; i < cregion.features.length; i++ ) {
// 	const geojson    = turf.multiPolygon( cregion.features[ i ].geometry.coordinates );
// 	const options    = { tolerance: 0.01, highQuality: false, mutate: true };
// 	const simplified = turf.simplify( geojson, options );
// 	console.log( simplified );
// 	cregion.features[ i ].geometry = simplified.geometry;
//
// 	fs.writeFileSync( './cregion-compressed.geojson', JSON.stringify( cregion ) );
// }

function compress( fname, data ) {
	const simplified = turf.simplify( data, { tolerance: 0.01, highQuality: false, mutate: true } );
	console.log( simplified );
	fs.writeFileSync( `./${ fname }-compressed.geojson`, JSON.stringify( data ) );
}

compress( 'cregion', cregion );
compress( 'grid', grid );
compress( 'hyperspaceLanes', hyperspaceLanes );
compress( 'region', region );
compress( 'sectors', sectors );
