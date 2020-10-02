<template>
	<div
		:class="[[isOn ? $style.switchOn : $style.switch], {[$style.disabled]: isDisabled}]"
		@click="!isDisabled && $emit('change')"
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

	.switch,
	.switchOn {
		position: relative;
		width: 58px;
		height: $switch-size;
		border-radius: $switch-size;
		background-color: $gray-20;
		cursor: pointer;
	}

	.disabled {
		filter: opacity(50%);
		cursor: not-allowed;
	}

	.switchOn,
	.innerDot {
		background-color: $color-primary;
	}

	$dot-absolute-positioning: 2px;
	$dot-size: 26px;

	.innerDot,
	.innerDotOn {
		top: $dot-absolute-positioning;
		position: absolute;
		border-radius: 50%;
		height: $dot-size;
		width:$dot-size;
	}

	.innerDot {
		left: $dot-absolute-positioning;
	}

	.innerDotOn {
		right: $dot-absolute-positioning;
		background-color: $white;
	}
</style>
