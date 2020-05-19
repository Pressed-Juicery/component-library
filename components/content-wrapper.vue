<template>
	<div>
		<div :class="$style.content">
			<slot />
		</div>
	</div>
</template>

<style module lang="scss">
@import '../styles/variables';

.content {
	max-width: $max-width-laptop-large;
	margin: 0 auto;
	padding: 0 $spacing-04;
}
</style>
