<template>
	<div class="breadcrumbs">
		<span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
			<span :class="getBreadcrumbClass(index, breadcrumbs)" @click="$emit('select', breadcrumb)">
				{{ breadcrumb.name }}
			</span>
			<span v-if="index < breadcrumbs.length - 1" class="breadcrumbs__breadcrumb-divider"> / </span>
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
			return index < breadcrumbs.length - 1 ? 'breadcrumbs--inactive' : 'breadcrumbs--active';
		},
	},
};
</script>

<style scoped lang="scss">
	@import '../styles/mixins';

	.breadcrumbs--inactive {
		@include text-subtle();
	}

	.breadcrumbs--active {
		@include text-bold();
	}

	.breadcrumbs__breadcrumb-divider {
		@include text-subtle();
	}
</style>
