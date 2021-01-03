<template>
	<v-sheet
		id="ol-map"
	>
	</v-sheet>
</template>

<script>
import 'ol/ol.css';

import Map          from 'ol/Map';
import View         from 'ol/View';
import GeoJSON      from 'ol/format/GeoJSON';
import SourceVector from 'ol/source/Vector';
import LayerVector  from 'ol/layer/Vector';

import Projection        from 'ol/proj/Projection';
import { addProjection } from 'ol/proj';

export default {
	name: 'Map',
	data() {
		return {};
	},
	mounted() {
		addProjection(
			new Projection( {
				code: 'EPSG:3263827', // EPSG trash compactor
				extent: [ -815.269, -1174.904, 1005.095, 809.383 ]
			} )
		);

		const vectorLayer = new LayerVector( {
			source: new SourceVector( {
				format: new GeoJSON(),
				// url: '/data/cregion.geojson',
				url: '/data/planets-reprojected.geojson',
				wrapDateLine: false,
				wrapX: false,
				noWrap: true
			} )
		} );

		const map = new Map( {
			target: 'ol-map',
			layers: [ vectorLayer ],
			view: new View( {
				center: [ 0, 0 ],
				// extent: [ -180, -90, 180, 90 ],
				// extent: [ -1000, -1000, 1000, 1000 ],
				enableRotation: true,
				rotation: 0,
				zoom: 0,
				constrainResolution: false,
				showFullExtent: true,
				projection: 'EPSG:3263827'
			} )
		} );
	}
};
</script>

<style>
#ol-map {
	height: calc(100vh - 24px);
	width: 100vw;
}
</style>
