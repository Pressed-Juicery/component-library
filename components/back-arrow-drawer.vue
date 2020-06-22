<template>
	<div :class="$style.root">
		<div :class="$style.header">
			<back-arrow-icon :class="$style.backButton" @click.native="$emit('close')" />
			<slot name="header-item" />
		</div>

		<slot name="main-content"/>
	</div>
</template>

<script>
import BackArrowIcon from './icons/back-arrow-icon';

export default {
	components: { BackArrowIcon },
};
</script>

<style module lang="scss">
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	$icon-size: $spacing-06;

	.root {
		margin: $spacing-06 $spacing-07;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: $spacing-06;
	}

	.backButton {
		height: $icon-size;
		width: $icon-size;
		cursor: pointer;
	}
</style>
