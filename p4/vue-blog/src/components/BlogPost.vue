<template>
  <div class="blog">
    <router-link to="/" tag="a" class="return">Return Home</router-link>
		<ReadCount> </ReadCount>
    <router-view></router-view>
    <router-link to="/" tag="a" class="return">Return Home</router-link>
  </div>
</template>

<script>
import { posts } from "./../data/PostList.js";
import ReadCount from "./ReadCount.vue";
export default {
  name: "BlogPost",
  components: {
    ReadCount: ReadCount
  },
  data: function() {
    return {
      posts: posts,
      ReadCount
    };
  },
  methods: {
    viewCount: function() {
      this.$store.commit("updateBlogCount", 1);
    }
  },
  beforeMount() {
		this.viewCount()
	}
};
</script>

<style>
textarea {
  width: 100%;
  height: 150px;

  border: 3px solid #f05888;
  border-radius: 5px;
  padding: 2rem;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
}

.blog {
  max-width: 680px;
  margin: auto;
  padding-top: 4rem;
}

.blog p {
  line-height: 2;
  font-size: 2rem;
  color: #555;
}

.blog img {
  max-width: 600px;
  width: 90%;
  display: block;
  margin: auto;
}

.return {
  color: #aaa;
  text-decoration: none;
  letter-spacing: 2px;
  transition: all ease-in-out 0.2s;
}

.return:hover {
  letter-spacing: 1px;
  color: #2aad81;
}

code {
  display: block;
  border-radius: 15px;
  padding: 2rem;
  background: #162032;
  color: #ddd;
}
</style>
