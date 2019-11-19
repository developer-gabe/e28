<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
import {postlist} from './data/PostList.js'


export default {
	name: 'app',
	components: {
	},
	data: function() {
	return {
		postlist: postlist

}
	}
	}
</script>

<style lang='scss'>
@import './assets/css/main.scss';
</style>
