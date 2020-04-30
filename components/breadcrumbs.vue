<template>
	<div>
		<span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
			<span :class="getBreadcrumbClass(index, breadcrumbs)" @click="$emit('select', breadcrumb)">
				{{ breadcrumb.name }}
			</span>
			<span v-if="index < breadcrumbs.length-1" class="breadcrumbs__breadcrumb-divider"> / </span>
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

	methods: {
		getBreadcrumbClass(index, breadcrumbs) {
			return index < breadcrumbs.length - 1
				? 'breadcrumbs__breadcrumb--gray'
				: 'breadcrumbs__breadcrumb--bold';
		},
	},
};
</script>

<style scoped lang="scss">
	.breadcrumbs__breadcrumb--gray {

	}

	.breadcrumbs__breadcrumb--bold {
	}

	.breadcrumbs__breadcrumb-divider {
		color: $color-text-gray;
	}
</style>
