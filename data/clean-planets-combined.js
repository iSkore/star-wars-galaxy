'use strict';

const fs = require( 'fs' );

let planetsCombined = JSON.parse( fs.readFileSync( './planets-combined.geojson', 'utf-8' ) );

( async function() {
	let i                    = 0;
	planetsCombined.features = planetsCombined.features.map(
		( data ) => {
			delete data.properties.cartodb_id;
			delete data.properties.objectid;
			delete data.properties.uid;
			delete data.properties.link;
			delete data.properties.z;
			delete data.properties.name0;
			delete data.properties.name1;
			delete data.properties.name2;
			delete data.properties.lat;
			delete data.properties.long;
			delete data.properties.planet_link;
			delete data.properties.region_link;
			delete data.properties.sector_link;
			delete data.properties.system_link;
			delete data.properties.cregion_link;

			if ( !data.properties.planet ) {
				data.properties.planet = data.properties.name;
			}

			delete data.properties.name;

			if ( data.properties.ref ) {
				console.log( data.properties.planet, data.properties.ref );
			}
			if ( data.properties.status ) {
				console.log( data.properties.planet, data.properties.status );
			}

			delete data.properties.ref;
			delete data.properties.status;

			data.properties.id = ++i;

			return data;
		}
	);

	fs.writeFileSync( 'planets-combined-cleaned.geojson', JSON.stringify( planetsCombined ) );
} )();
