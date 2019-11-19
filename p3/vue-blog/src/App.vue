<template>
  <div id="app">
		<Home> </Home>
  </div>
</template>

<script>
import {site} from './site.js'
import Home from './components/Home.vue'

export default {
	name: 'app',
	components: {
		'Home': Home
	},
	data: function() {
	return {
		site: site,
}
	}
	}
</script>

<style lang='scss'>
@import './assets/css/main.scss';
</style>
