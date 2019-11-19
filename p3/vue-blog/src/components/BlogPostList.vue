<template>
  <div>
    <ul id="blog-list">
      <li v-for="post in posts" v-bind:key="post.id" class="blog-list__item">
			<section>
			<router-link :to='post.link'> <h1 class="blog-list__title">{{post.title}}</h1></router-link>
			<p class="">{{post.exceprt}} </p>
			<p>{{post.date}}</p>
			</section>
			</li>
    </ul>
  </div>
</template>

<script>
import {posts} from "./../data/PostList.js"

export default {
	name: "BlostPostList",
	props: ["post"],
	components: {
	},
  data: function() {
    return {
			posts: posts,
    };
  }
};
</script>

<style scoped>
#blog-list {
  padding: 0;
  margin: 0;
}

.blog-list__item {
  list-style-type: none;
  margin: 0.5rem 0;
}

a {
	text-decoration: none;
}
.blog-list__title {
	color: #ff4966;
	transition: color ease-in-out .2s;
}
.blog-list__title:hover {
	color: #4dc7a0;
}
</style>
