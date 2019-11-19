<template>
<div class="blog">
	<section v-if="sfc = true">
	<SFC />
	</section>
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
			article: null,
			sfc: false,
			cssgrid: false
		}
	}
}
</script>

<style scoped>

</style>