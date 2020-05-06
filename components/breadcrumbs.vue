<template>
	<div class="breadcrumbs">
		<span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
			<span class="breadcrumbs__breadcrumb" @click="$emit('select', breadcrumb)">
				{{ breadcrumb.name }}
			</span>
			<span v-if="index < breadcrumbs.length - 1" class="breadcrumbs__divider"> / </span>
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

<style scoped lang="scss">
	@import '../styles/mixins';

	.breadcrumbs__breadcrumb {
		@include text-subtle();
		cursor: pointer;

		&:last-of-type {
			@include text-bold();
			color: initial;
		}
	}

	.breadcrumbs__divider {
		@include text-subtle();
	}
</style>
