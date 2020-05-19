<template>
	<div :class="$style.root">
		<div :class="$style.contentWrapper">
			<div>
				<img v-if="icon" :class="$style.icon" :src="icon" />
				<div :class="$style.title">{{ title }}</div>
				<div :class="$style.text" v-html="description" />
			</div>
		</div>
		<img :class="$style.image" :src="img" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: String,
	},
};
</script>

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.root {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: $spacing-10;
	padding: $spacing-09;
}

.contentWrapper {
	display: flex;
	align-items: center;
}

.icon {
	margin-bottom: $spacing-07;
}

.title {
	@include text-heading-4;
	margin-bottom: $spacing-03;
}

.image {
	width: 100%;
}

@media (max-width: $max-width-tablet) {
	.media-row {
		grid-template-columns: 1fr;
		grid-gap: $spacing-07;
	}
}
</style>
