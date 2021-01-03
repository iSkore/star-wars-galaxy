<template>
	<v-app>
		<Toolbar/>
		<v-main>
			<v-container fluid ma-0 pa-0>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex';

import Toolbar from '@/components/Toolbar';

export default {
	name: 'App',
	components: {
		Toolbar
	},
	data() {
		return {
			drawer: null
		};
	},
	beforeCreate() {
		this.$installAxios();
		this.$installLogger();
	},
	async mounted() {
		await this.getConfig();
	},
	methods: {
		...mapActions( [ 'getConfig' ] )
	}
};
</script>

<style>
html, body {
	overflow: hidden;
}
</style>
