<template>
<div class="blog">
	<SFC />
	<CSSGrid />
</div>
</template>

<script>
import SFC from "@/posts/SFC.md";
import CSSGrid from "@/posts/CSS-grid.md";

export default {
	name: 'BlogPost',
	components:{SFC, CSSGrid},
	data: function() {
		return {
			article: null
		}
	}
}
</script>

<style scoped>

</style>