<template>
	<div :class="[$style.root, {[$style.isEmpty]: !value}]">
		<input placeholder="Discount Code" :class="$style.input" v-model="value"/>
		<button :class="$style.button">Apply</button>
	</div>
</template>

<script>
// import ValidatedInput from './validated-input';

export default {
	// components: { ValidatedInput },
	props: {
		placeholder: {
			type: String,
		},
	},
	data(){
		return {
			value: '',
		};
	},
};
</script>

<style module lang="scss">
	@import '../styles/buttons';

	.root {
		display: flex;
		align-items: center;
	}

	.root.isEmpty .button{
		background-color: $gray-30;
		color: $gray-100;
	}

	.input {
		margin-right: $spacing-03;
	}

	.input::placeholder {
		color: $gray-30;
	}

</style>
