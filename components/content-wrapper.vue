<template>
	<div class="content-wrapper" :style="{ backgroundColor }">
		<div class="content-wrapper__container">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		backgroundColor: String,
	},
};
</script>

<style lang="scss">
@import '../styles/variables';

.content-wrapper__container {
	max-width: $max-width-laptop-large;
	margin: 0 auto;
	padding: 0 $spacing-04;
}
</style>
