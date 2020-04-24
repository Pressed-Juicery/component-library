<template>
	<div class="button-bar__bar">
		<button-bar-button v-for="(content, index) in contents"
		                   :key="index"
		                   :isSelected="selectedButton === content"
		                   @select="selectedButton = content">
			<slot :content="content"/>
		</button-bar-button>
	</div>
</template>

<script>
import ButtonBarButton from './button-bar-button';

export default {
	components: { ButtonBarButton },

	props: {
		contents: {
			type: Array,
			required: true,
		},
		selectedItem: {
			default: null,
		},
	},

	computed: {
		selectedButton: {
			get() { return this.selectedItem },
			set(value) { this.$emit('select-item', value) },
		},
	},
};
</script>

<style scoped lang="scss">
	.button-bar__bar {
		display: flex;
	}
</style>
