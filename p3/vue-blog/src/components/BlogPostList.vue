<template>
  <div>
    <ul id="blog-post-list">
      <li v-for="post in posts" v-bind:key="post.id">
				<BlogPostPreview />
			</li>
    </ul>
  </div>
</template>

<script>
import BlogPostPreview from './BlogPostPreview.vue'
import {postlist} from '../data/PostList.js'

export default {
	name: "BlostPostList",
	components: {
		BlogPostPreview
	},
  data: function() {
    return {
      posts: postlist
    };
  }
};
</script>

<style scoped>
.blog-list {
  padding: 0;
  margin: 0;
}

.blog-list__item {
  list-style-type: none;
  margin: 0.5rem 0;
}

.blog-list__tags {
  margin-bottom: 15px;
}

.button--pagination {
  background-color: #32c8cf;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
  background-color: #fff;
  border: 1px solid #32c8cf;
  border-radius: 4px;
  color: #32c8cf;
}

.clear-filter-btn {
  align-self: center;
  margin-left: 20px;
}

.filtered-heading {
  display: flex;
}

.pagination {
  text-align: center;
}

.see-all {
  display: block;
  letter-spacing: 2px;
  font-size: 0.7rem;
  font-family: sans-serif;
  font-weight: 300;
  transition: all ease-in-out 0.4s;
  background: linear-gradient(60deg, #ee0979, #ff6a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.see-all a {
  padding: 0.5rem;
  border: 1px solid #ee0979;
  border-radius: 5px;
}

.see-all:hover {
  letter-spacing: 1px;
}
</style>
