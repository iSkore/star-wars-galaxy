'use strict';

const fs = require( 'fs' );

const geoData = 'sectors';
const data    = JSON.parse( fs.readFileSync( `./${ geoData }.geojson`, 'utf-8' ) );

( async function() {
	let i         = 0;
	data.features = data.features.map(
		( data ) => {
			data.properties.id   = ++i;
			data.properties.id   = data.properties.sid;
			data.properties.name = data.properties.sector;
			delete data.properties.sector;
			delete data.properties.cartodb_id;
			delete data.properties.sid;
			delete data.properties.name_web;
			delete data.properties.link;
			delete data.properties.created_at;
			delete data.properties.updated_at;
			return data;
		}
	);

	fs.writeFileSync( `${ geoData }-clean.geojson`, JSON.stringify( data ) );
} )();

// SECTOR
//  "sector": "Itopol",
//  "name_web": "Itopol_sector",
//  "link": "http://starwars.wikia.com/wiki/Itopol_sector",

/**
 * SECTOR CLEAN
 * data.properties.id = ++i;
 * data.properties.id = data.properties.sid;
 * delete data.properties.cartodb_id;
 * delete data.properties.sid;
 * delete data.properties.name_web;
 * delete data.properties.link;
 * delete data.properties.created_at;
 * delete data.properties.updated_at;
 * return data;
 */

// REGION
//  "name_web": "Deep_Core",
//  "link": "http://starwars.wikia.com/wiki/Deep_Core",
//  "region": "Deep Core"

/**
 * REGION CLEAN
 * data.properties.id   = ++i;
 * data.properties.name = data.properties.region;
 * delete data.properties.region;
 * delete data.properties.cartodb_id;
 * delete data.properties.rid;
 * delete data.properties.name_web;
 * delete data.properties.link;
 * return data;
 */

// HYPERSPACE-LANES
//  "link": "http://starwars.wikia.com/wiki/Byss_Run",
//  "name_web": "Byss_Run",
/**
 * HYPERSPACE-LANES
 * data.properties.id   = ++i;
 * data.properties.zm   = data.properties.zoom_level;
 * delete data.properties.zoom_level;
 * data.properties.name = data.properties.hyperspace;
 * delete data.properties.hyperspace;
 * delete data.properties.cartodb_id;
 * delete data.properties.hid;
 * delete data.properties.name_web;
 * delete data.properties.link;
 * return data;
 */

// CREGION
/**
 * CREGION
 * data.properties.id   = ++i;
 * data.properties.zm   = data.properties.cregion_zm;
 * data.properties.name = data.properties.cregion;
 * data.properties.area = data.properties.shape_area;
 * delete data.properties.shape_area;
 * data.properties.length = data.properties.shape_leng;
 * delete data.properties.shape_leng;
 * delete data.properties.cartodb_id;
 * delete data.properties.objectid;
 * delete data.properties.cregion;
 * delete data.properties.cregion_li;
 * delete data.properties.cregion_zm;
 * return data;
 */

/**
 * GRID
 * data.properties.id   = ++i;
 * data.properties.name = data.properties.grid;
 * delete data.properties.grid;
 * delete data.properties.cartodb_id;
 * delete data.properties.created_at;
 * delete data.properties.updated_at;
 * return data;
 */
