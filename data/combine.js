'use strict';

const fs = require( 'fs' );

const planets     = JSON.parse( fs.readFileSync( './planets.geojson', 'utf-8' ) );
const planets_new = JSON.parse( fs.readFileSync( './planets_new.geojson', 'utf-8' ) );

const final = {
	type: 'FeatureCollection',
	name: 'planets',
	features: []
};

for ( let i = 0; i < planets.features.length; i++ ) {
	const item = planets.features[ i ];
	const find = planets_new.features.find(
		( f ) => {
			if ( f.properties.x === item.properties.x && f.properties.y === item.properties.y ) {
				return f;
			}
		}
	);

	let data = {};

	if ( !find ) {
		
		data = item;
		console.log( item.properties.cartodb_id, item.properties.name, item.properties.link );

		item.properties.planet      = item.properties.name;
		item.properties.planet_link = item.properties.planet ?
			`${ item.properties.planet.replace( / /g, '_' ) }` : '';
		item.properties.region_link = item.properties.region ?
			`${ item.properties.region.replace( / /g, '_' ) }` : '';
		item.properties.sector_link = item.properties.sector ?
			`${ item.properties.sector.replace( / /g, '_' ) }` : '';

		// item.properties.system       = 'Prakith system';
		// item.properties.system_link  = 'https://starwars.fandom.com/wiki/Prakith_system';
		// item.properties.cregion      = 'The Interior';
		// item.properties.cregion_link = 'https://starwars.fandom.com/wiki/The_Interior';
	}
	else {
		data = find;
	}

	delete data.properties.cartodb_id;
	delete data.properties.objectid;
	delete data.properties.z;
	delete data.properties.name0;
	delete data.properties.name1;
	delete data.properties.name2;
	delete data.properties.lat;
	delete data.properties.long;

	data.properties.planet_link  = data.properties.planet_link ?
		data.properties.planet_link.replace( 'http://starwars.wikia.com/wiki/', '' ) : '';
	data.properties.region_link  = data.properties.region_link ?
		data.properties.region_link.replace( 'http://starwars.wikia.com/wiki/', '' ) : '';
	data.properties.system_link  = data.properties.system_link ?
		data.properties.system_link.replace( 'http://starwars.wikia.com/wiki/', '' ) : '';
	data.properties.cregion_link = data.properties.cregion_link ?
		data.properties.cregion_link.replace( 'http://starwars.wikia.com/wiki/', '' ) : '';


	if ( !find ) {
		final.features.push( data );
	}
	// console.log( find );
	// console.log( item );
}

console.log( JSON.stringify( final ) );
