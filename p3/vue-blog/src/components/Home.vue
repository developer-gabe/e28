<template>
  <div class="home">
    <div class="hero">
      <img class="profile-pic" alt="A photo of Gabe Sousa looking b-e-a-utiful" />
      <h1 class="title"></h1>
      <h3 class="subtitle"></h3>
      <h2
        class="description"
      >These bespectacled eyes see things. These trap-beat loving ears hear things. This Brazilian born, Bay State raised soul feels things - and I turn it all into immersive digital art.</h2>
    </div>

    <BlogPostList
      :pages="3"
      :page-size="3"
			:start-page="null">
    </BlogPostList>
  </div>
</template>
<script>
import BlogPostList from './BlogPostList.vue'
	
export default {
	name: 'Home',
	components: {
		BlogPostList: BlogPostList
	},
	data: function() {
		return {
			BlogPostList
		}
	}
	
}
</script>

<style scoped>

</style>

