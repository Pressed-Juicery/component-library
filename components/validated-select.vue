<template>
	<label class="validated-select">
		{{ label }}
		<select class="validated-select__select" v-model="model">
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.name }}
			</option>
		</select>
	</label>
</template>

<script>
	export default {
		props: {
			label: String,
			placeholder: String,
			options: Array,
			selectedItem: String,
		},

		model: {
			prop: 'selectedItem',
			event: 'input',
		},

		computed: {
			model: {
				get() { return this.selectedItem },
				set(value) { this.$emit('input', value) },
			},
		},
	}
</script>

<style scoped lang="scss">
	.validated-select__select {
		display: block;
	}
</style>
