<template>
	<div :class="$style.root">
		<div :class="$style.row">
			<img :class="$style.icon" :src="vipPerks.iconUrl" alt="">
			<div :class="$style.title">{{ vipPerks.title }}</div>
		</div>
		<div :class="$style.message">{{ vipPerks.message }}</div>
	</div>
</template>

<script>
export default {
	props: {
		vipPerks: {
			type: Object,
			required: true,
		},
	},

};
</script>

<style lang='scss' module>
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	$icon-size: $spacing-06;

	.root {
		background-color: $beige;
		border-radius: $border-radius;
		padding: $spacing-05;
	}

	.row {
		display: flex;
		align-items: center;
		margin-bottom: $spacing-03;
	}

	.icon {
		width: $icon-size;
		height: $icon-size;
	}

	.title {
		@include text-bolder();
		@include text-uppercase();
		margin-left: $spacing-03;
	}
</style>
