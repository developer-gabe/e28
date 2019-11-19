<script>
export default {
    name: 'BlogPostPreview',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.item.frontmatter.date)
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            } 

            return dateFormat.toLocaleDateString('en-US', options)
        }
    }
}
</script>

<template>
	<section>
        <router-link class="button blog-post__button" :to="item.path"><h3 class="blog-post__title">{{ item.frontmatter.title }}</h3></router-link>
        <p class="blog-post__description"v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>
				<time>{{ formatPublishDate }}</time> <span id="seperator_dot">·</span>
        <p class="reading-time" v-if="item.readingTime">{{ item.readingTime.text }}</p>
      
    </section>
</template>

<style scoped>

time, .reading-time {
	display: inline-block;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: .8rem;
		color: #666;
}

#seperator_dot {
	color: #888;
}

h3.blog-post__title {
	margin-bottom: 0;
	font-weight: 500;
	font-size: 1rem;
}

li.blog-list__item p {
	margin: 0;
}

.blog-post__button {
	display: inline-block;
}

.blog-post__title {
	margin-top: 0.5rem;
}

.blog-post__description {
	margin-bottom: 1rem;
	font-family: "Helvetica Neue", Helvetica;
	font-weight: 300;
	color: #666;
	font-size: .9rem;
}
  .button.blog-post__button {
		display: block;
		font-family: sans-serif;
		font-weight: 300;
    transition: all ease-in-out 0.4s;
    color: #ff4966 !important;
		letter-spacing: .2px;
		border-radius: 0px;
  }

  .button.blog-post__button:hover {
		letter-spacing: 0px;
  }

.button {
	border-radius: 4px;
	font-size: 0.8rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.tag-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-bottom: 25px;
}

.tag-list__item {
    margin-left: 10px;
}

.tag-list__item:first-child {
    margin-left: 0;
}

.tag-list__btn {
    padding: 5px;
    font-size: 0.9rem;
    background-color: #fff;
}

</style>
