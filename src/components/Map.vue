<template>
	<vl-map
		class="ol-map"
		:load-tiles-while-animating="true"
		:load-tiles-while-interacting="true"
	>
		<vl-view
			:zoom.sync="zoom"
			:center.sync="center"
			:rotation.sync="rotation"
		>
		</vl-view>

		<vl-layer-vector>
			<vl-source-vector
				url="/data/grid.geojson"
				:wrap-x="false"
			/>
		</vl-layer-vector>

		<vl-layer-vector>
			<vl-source-vector
				url="/data/hyperspace-lanes.gpkg"
				:wrap-x="false"
			/>
		</vl-layer-vector>

		<!--		<vl-layer-vector>-->
		<!--			<vl-source-vector-->
		<!--				url="/data/cregion.geojson"-->
		<!--				:wrap-x="false"-->
		<!--			/>-->
		<!--		</vl-layer-vector>-->

		<vl-layer-vector>
			<vl-source-vector
				url="/data/region.geojson"
				:wrap-x="false"
			/>
		</vl-layer-vector>

		<!--		<vl-layer-vector>-->
		<!--			<vl-source-vector-->
		<!--				url="/data/sectors.geojson"-->
		<!--				:wrap-x="false"-->
		<!--			/>-->
		<!--		</vl-layer-vector>-->
		<!--		<vl-layer-vector>-->
		<!--			<vl-source-vector-->
		<!--				url="/data/hyperspace-lanes.geojson"-->
		<!--				:wrap-x="false"-->
		<!--			/>-->
		<!--		</vl-layer-vector>-->
		<!--		<vl-layer-vector>-->
		<!--			<vl-source-vector-->
		<!--				url="/data/planets.geojson"-->
		<!--				:wrap-x="false"-->
		<!--			/>-->
		<!--		</vl-layer-vector>-->
	</vl-map>
</template>

<script>
import 'ol/ol.css';

import Map     from 'ol/Map';
import View    from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';

export default {
	name: 'Map',
	data() {
		return {
			zoom: 2,
			center: [ 0, 0 ],
			rotation: 0
		};
	}
};
</script>

<style>
.ol-map {
	height: calc(100vh - 24px);
	width: 100vw;
}
</style>
