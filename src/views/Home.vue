<template>
	<v-row class="grey lighten-3 pa-0 ma-0">
		<v-col
			cols="12"
			sm="12"
			class="pa-0 ma-0"
		>
			<v-sheet>
				<MapOl/>
			</v-sheet>
		</v-col>
	</v-row>
</template>

<script>
import MapOl from '@/components/MapOl';

export default {
	name: 'Home',
	components: { MapOl }
};
</script>
