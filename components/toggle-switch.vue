<template>
	<div
		:class="[$style.switch, { [$style.switchOn]: isOn, [$style.disabled]: isDisabled }]"
		@click="!isDisabled && $emit('toggle')"
	>
		<div :class="isOn ? $style.innerDotOn : $style.innerDot" />
	</div>
</template>

<script>
export default {
	props: {
		isOn: {
			type: Boolean,
			required: true,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/variables';

	$switch-size: $spacing-07;
	$dot-margin: 3px;
	$dot-size: 26px;

	.switch {
		position: relative;
		width: 58px;
		height: $switch-size;
		border-radius: $switch-size;
		background: $gray-40;
		cursor: pointer;
	}

	.switchOn {
		background: $color-primary;
	}

	.disabled {
		background: $gray-20;
		cursor: not-allowed;
	}

	.innerDot,
	.innerDotOn {
		top: $dot-margin;
		position: absolute;
		border-radius: 50%;
		height: $dot-size;
		width:$dot-size;
		background: $white;
	}

	.innerDot {
		left: $dot-margin;
	}

	.innerDotOn {
		right: $dot-margin;
	}
</style>
