<template>
	<div>
		<p data-test="read" id="read">You've viewed {{this.$store.state.blogViewCount}} posts so far </p>
	</div>
</template>

<script>
export default {
		name: "ReadCount",
}
</script>

<style scoped>
#read {
	max-width: 100%;
	margin: auto;
	font-size: 1.2rem;
	color: #bbb;
	transition: all ease-in-out .2s;
}

#read:hover {
	color: #2aad81;
}
</style>