'use strict';

const fs    = require( 'fs' );
const https = require( 'https' );
const turf  = require( '@turf/turf' );

const planets     = JSON.parse( fs.readFileSync( './original/planets.geojson', 'utf-8' ) );
const planets_new = JSON.parse( fs.readFileSync( './original/planets_new.geojson', 'utf-8' ) );
const cregion     = JSON.parse( fs.readFileSync( './original/cregion.geojson', 'utf-8' ) );

function request( name ) {
	name = name.replace( / /g, '%20' );
	return new Promise(
		( resolve, reject ) => {
			const opts = {
				hostname: 'starwars.fandom.com',
				port: 443,
				path: `/api.php?action=query&prop=revisions&titles=${ name }&rvprop=content&format=json`,
				method: 'GET'
			};

			let data  = '';
			const req = https.request( opts, ( res ) => {
				res.on( 'data', ( d ) => data += d );
				res.on( 'end', () => resolve( JSON.parse( data ) ) );
			} );

			req.on( 'error', ( e ) => reject( e ) );
			req.end();
		}
	);
}

function extract( data, text = '' ) {
	let result = '';

	if ( !data.query ) {
		return result;
	}

	const pageKey = Object.keys( data.query.pages );
	const rx      = new RegExp( `\\|${ text }=\\[\\[([^\\]{2}]+)\\]{2}` );
	console.log( pageKey );
	for ( let i = 0; i < pageKey.length; i++ ) {
		const revisions = data.query.pages[ pageKey[ i ] ].revisions;

		if ( !revisions ) {
			continue;
		}

		for ( let j = 0; j < revisions.length; j++ ) {
			const exec = rx.exec( revisions[ j ][ '*' ] );
			result     = exec ? exec[ 1 ] : '';
		}
	}

	if ( /\//.test( result ) ) {
		result = result.split( '/' ).shift();
	}

	return result;
}

( async function() {
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
			console.log( item.properties.cartodb_id, item.properties.name );

			const wikiData        = await request( item.properties.name );
			const wikiDataLegends = await request( `${ item.properties.name }/Legends` );

			data.properties.planet = item.properties.name;

			data.properties.region = item.properties.region ||
				extract( wikiData, 'region' ) ||
				extract( wikiDataLegends, 'region' );

			data.properties.sector = item.properties.sector ||
				extract( wikiData, 'sector' ) ||
				extract( wikiDataLegends, 'sector' );

			data.properties.system = item.properties.system ||
				extract( wikiData, 'system' ) ||
				extract( wikiDataLegends, 'system' );

			for ( let i = 0; i < cregion.features.length; i++ ) {
				if (
					turf.booleanWithin(
						turf.point( data.geometry.coordinates ),
						turf.polygon( cregion.features[ i ].geometry.coordinates[ 0 ] )
					)
				) {
					data.properties.cregion = cregion.features[ i ].properties.cregion;
				}
			}

			delete data.properties.cartodb_id;
			delete data.properties.objectid;
			delete data.properties.link;
			delete data.properties.z;
			delete data.properties.name0;
			delete data.properties.name1;
			delete data.properties.name2;
			delete data.properties.lat;
			delete data.properties.long;
			delete data.properties.planet_link;
			delete data.properties.region_link;
			delete data.properties.system_link;
			delete data.properties.cregion_link;

			console.log( data );

			// data.properties.planet_link  = data.properties.planet_link ?
			// 	data.properties.planet_link.replace( 'http://starwars.wikia.com/wiki/', '' ) : '';

			planets_new.features.push( data );
		}
	}

	fs.writeFileSync( 'planets-combined.geojson', JSON.stringify( planets_new ) );
} )();
