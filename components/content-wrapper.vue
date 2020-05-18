<template>
	<div :style="{ backgroundColor, color }">
		<div :class="[$style.content, { [$style.isSmall]: isSmall }]">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isSmall: Boolean,
		backgroundColor: String,
		color: String,
	},
};
</script>

<style module lang="scss">
@import '../styles/variables';

$content-padding: $spacing-06;
$padding-offset: $content-padding * 2;

.content {
	max-width: 1248 + $padding-offset;
	padding: 0 $content-padding;
	margin: 0 auto;
}

.isSmall {
	max-width: 1024 + $padding-offset;
}
</style>
