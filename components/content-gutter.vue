<template>
	<div class="content-gutter" :style="{ backgroundColor }">
		<div class="content-gutter__container">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		backgroundColor: String,
	}
}
</script>

<style lang="scss">
@import '../styles/variables';

.content-gutter__container {
	max-width: $max-width-laptop-large;
	margin: 0 auto;
}
</style>
