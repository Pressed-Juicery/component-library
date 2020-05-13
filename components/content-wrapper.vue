<template>
	<div class="content-wrapper">
		<div class="content-wrapper__content">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../styles/variables';

.content-wrapper__content {
	max-width: $max-width-laptop-large;
	margin: 0 auto;
	padding: 0 $spacing-04;
}
</style>
