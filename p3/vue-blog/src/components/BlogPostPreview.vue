<template>
  <section>
    <p class="blog-post__description" v-if="item.frontmatter.excerpt">
      {{ postlist.description }}
    </p>
    <time>{{ formatPublishDate }}</time> <span id="seperator_dot">·</span>
  </section>
</template>

<script>
import {postlist} from '../data/PostList.js'

export default {
    name: 'BlogPostPreview',
    props: ["post"],
		data: function() {
    return {
      posts: {postlist}
    };
}
}
</script>

<style scoped></style>
