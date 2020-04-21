<template>
	<div class="card">
		<slot />
	</div>
</template>

<style scoped lang="scss">
@import '../styles/variables';

.card {
	padding: $spacing-04;
	border-radius: $border-radius;
	background-color: $beige;
}
</style>
