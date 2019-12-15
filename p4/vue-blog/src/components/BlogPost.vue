<template>
<div class="blog">
<router-link to="/" tag="a" class="return">Return Home</router-link>
<router-view></router-view>
<router-link to="/" tag="a" class="return">Return Home</router-link>
</div>
</template>

<script>
import {posts} from './../data/PostList.js'
export default {
	name: "BlogPost",
  data: function() {
    return {
			posts: posts,
    };
  }
};
</script>


<style>

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
	transition: all ease-in-out .2s;
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