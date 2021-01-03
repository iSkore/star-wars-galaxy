'use strict';

const fs = require( 'fs' );

const geoData = 'planets';
const data    = JSON.parse( fs.readFileSync( `./${ geoData }.geojson`, 'utf-8' ) );

( async function() {
	data.features = data.features.map(
		( data ) => {
			if ( !data.geometry ) {
				console.log( data );
			}
			else {
				data.geometry.coordinates[ 0 ] = data.properties.x;
				data.geometry.coordinates[ 1 ] = data.properties.y;
			}

			return data;
		}
	);

	data.features = data.features.filter(
		( data ) => {
			return data.geometry;
		}
	);

	fs.writeFileSync( `${ geoData }-reprojected.geojson`, JSON.stringify( data ) );
} )();
