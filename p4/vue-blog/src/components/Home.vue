<template>
  <div class="home">
    <div class="hero">
      <img
        class="profile-pic"
        alt="A photo of Gabe Sousa looking b-e-a-utiful"
				src="./../assets/images/gabe.jpg"
      />
      <h1 class="title">Gabe Sousa</h1>
      <h3 class="subtitle">Vue Powered Blog</h3>
      <h2 class="description">
       Hello world! This is a Vue Powered blog modeled after my live VuePress blog. This blog uses Vue Markdown Loader to convert markdown files into blog posts. 
      </h2>
    </div>

    <BlogPostList> </BlogPostList>

  </div>
</template>
<script>
import BlogPostList from "./BlogPostList.vue";

export default {
  name: "Home",
  components: {
		BlogPostList: BlogPostList
  },
  data: function() {
    return {
			BlogPostList,
    };
  }
};

</script>

<style scoped>
.home {
  max-width: 700px;
  margin: auto;
  padding-top: 2rem;
}

.description {
  border: none;
  font-family: Avenir;
  color: #666;
  max-width: 70%;
  font-size: 2rem;
  line-height: 1.4;
  margin: auto;
  text-align: left;
  padding: 0.6rem 0 0.5rem 0;
  font-weight: 400;
}

.profile-pic {
	display: block;
	margin: auto;
	max-width: 120px;
	border-radius: 100%;
}

.title, .subtitle {
	margin: auto;
	text-align: center;
}

.subtitle {
	background: linear-gradient(60deg,#ee0979,#ff6a00);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

}
</style>
