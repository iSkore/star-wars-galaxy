// https://cartocdn-gusc-d.global.ssl.fastly.net/hbernberg/api/v1/map/hbernberg@a510e439@01784e2bbe478311e1547177a28aaf87:1599948668631/5/attributes/2280

const https             = require( 'https' );
const { promises: fs }  = require( 'fs' );
const { join, resolve } = require( 'path' );

function wait( n ) {
	return new Promise(
		( res ) => setTimeout( () => res(), n )
	);
}

const errors = [];
( async function() {
	const min = 1368;
	const max = 1480; // 2280
	// const max = 1500; // 2280

	for ( let i = min; i < max; i++ ) {
		// const err = [ 1397 ];
		// for ( let i = 0, j = err[ i ]; i < err.length; i++, j = err[ i ] ) {
		await wait( Math.random() * 3000 );
		console.log( i, `${ ~~( ( ( min - ( min - i ) ) / ( max - min ) ) * 1000 ) / 1000 }%` );

		const options = {
			hostname: 'cartocdn-gusc-d.global.ssl.fastly.net',
			port: 443,
			path: `/hbernberg/api/v1/map/hbernberg@a510e439@01784e2bbe478311e1547177a28aaf87:1599948668631/5/attributes/${ i }`,
			method: 'GET'
		};

		const req = https.request( options, ( res ) => {
			res.on( 'data', async ( d ) => {
				const j = JSON.parse( d.toString() );
				if ( j.hasOwnProperty( 'errors' ) || !j.hasOwnProperty( 'planet' ) ) {
					errors.push( i );
				}
				else {
					try {
						await fs.mkdir( resolve( j.grid ) );
					}
					catch {
					}

					let fileName = j.planet.replace( / /g, '-' );
					if ( !fileName || fileName === '-' ) {
						fileName = `Unknown-Celestial-Object-${ j.grid }-${ j.x }-${ j.y }`;
						if ( j.z ) {
							fileName += `-${ j.z }`;
						}

						j.planet = fileName;
					}
					console.log( j.grid, fileName );
					await fs.writeFile( join( j.grid, `${ fileName }.json` ), JSON.stringify( j ) );
				}
			} );
		} );

		req.on( 'error', ( e ) => console.error( e ) );
		req.end();
	}

	console.log( JSON.stringify( errors ) );
} )();
