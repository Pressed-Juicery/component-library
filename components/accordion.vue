<template>
	<div :class="[$style.root, { [$style.isOpen]: isOpen }]">
		<div :class="$style.title" @click="toggle">
			<div>{{ title }}</div>
			<div :class="$style.accordionIcon">
				{{ isOpen ? '-' : '+' }}
			</div>
		</div>
		<div v-if="isOpen" :class="$style.slot">
			<slot />
		</div>
	</div>
</template>

<script>

export default {
	name: 'accordion',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/variables';
	@import '../styles/mixins';

	$accordion-padding: $spacing-06;

	.root {
		border-bottom: $border;
	}

	.title {
		padding: $accordion-padding 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		@include text-cta-small();
	}

	.icon {
		flex-shrink: 0;
		width: $spacing-05;
		fill: $border-color;
		margin-left: $spacing-06;
	}

	.slot {
		padding: 0 $accordion-padding $accordion-padding;
	}

	.accordionIcon {
		color: $gray-30;
		font-size: 20px;
	}
</style>
