'use strict';

const https             = require( 'https' );
const { promises: fs }  = require( 'fs' );
const { join, resolve } = require( 'path' );

function wait( n ) {
	return new Promise(
		( res ) => setTimeout( () => res(), n )
	);
}

( async function() {
	const missing = [
		'Foerost', 'Kidiet_Olgo', 'Corann', 'Kuat', 'Jatir', 'Raithal', 'Neimoidia', 'Balmorra', 'Sanjin', 'Abridon',
		'Absit', 'Skustell_Cluster', 'Verdanth', 'Syned', 'Drexel', 'Nedij', 'Trigalis', 'Excarga', 'Uran', 'Kamar',
		'Fibuli', 'Spintir', 'Begeren', 'Kalsunor', 'Yutusk', 'Thosa', 'Arcan', 'Rhen_Var', 'Isiring', 'Noonar',
		'Pallaxides', 'Wayland', 'Glom_Tho', 'Mimban', 'Quas_Killam', 'Nazzri', 'Adin', 'Boordii', 'Tierfon', 'Attahox',
		'Soun', 'Fennesa', 'Vanik_system', 'Bogden', 'Myrkr', 'Abraxas', 'Asmeru_Anomaly', 'Gonmore', 'Qiilura',
		'Thoran', 'Nigel', 'Roldalna', 'Seltos', 'Tholatin', 'Torolis', 'Kalee', 'Marquarra', 'Drongar', 'Eadu',
		'Canon', 'Ajan_Kloss'
	];

	for ( let i = 0; i < missing.length - missing.length + 1; i++ ) {
		await wait( Math.random() * 3000 );

		const options = {
			hostname: 'starwars.fandom.com',
			port: 443,
			path: `/api.php?action=query&prop=revisions&titles=${ missing[ i ] }&rvprop=content&format=json`,
			method: 'GET'
		};

		const req = https.request( options, ( res ) => {
			let data = '';
			res.on( 'data', ( d ) => {
				data += d.toString();
			} );

			res.on( 'end', () => {
				console.log( JSON.stringify( JSON.parse( data ), null, 4 ) );
			} );
		} );

		req.on( 'error', ( e ) => console.error( e ) );
		req.end();
	}
} )();
