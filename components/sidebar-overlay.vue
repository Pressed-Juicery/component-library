<template>
	<div :class="$style.overlay">
		<div :class="$style.sidebar">

		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.overlay {
		position: relative;
		height: 100vh;
		width: 100%;
		z-index: -1;
		background-color: rgba(0, 0, 0, 0.25);
		opacity: 0.55;
	}

	.sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		width: 350px;
		background-color: $beige;
	}

</style>
