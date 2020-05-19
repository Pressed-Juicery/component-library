<template>
	<div>
		<span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
			<span :class="$style.breadcrumb" @click="$emit('select', breadcrumb)">{{ breadcrumb.name }}</span>
			<span v-if="index < breadcrumbs.length - 1" :class="$style.divider"> / </span>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		breadcrumbs: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.breadcrumb {
		@include text-subtle();
		cursor: pointer;

		&:last-of-type {
			@include text-bold();
			color: initial;
		}
	}

	.divider {
		@include text-subtle();
	}
</style>
