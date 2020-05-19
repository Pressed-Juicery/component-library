<template>
	<div :class="$style.root">
		<slot />
	</div>
</template>

<style module lang="scss">
@import '../styles/variables';

.root {
	padding: $spacing-04;
	border-radius: $border-radius;
	background-color: $beige;
}
</style>
