<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
			selected: 1
    };
	},
	computed: {
		readCount: function() {
			return this.$store.state.blogViewCount
		},
    currentRouteName() {
        return this.$route.path;
    }
	}
};
</script>

<style lang="scss">
@import "./assets/css/main.scss";
</style>
