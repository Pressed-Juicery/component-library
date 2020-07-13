<template>
	<validated-component
		class="validated-textarea"
		:id="id"
		:label="label"
		:label-helper="labelHelper"
		:error-message="errorMessage"
		:value="model"
		:rules="rules"
		:isEager="isEager"
		ref="validatedComponent"
	>
		<textarea
			:id="id"
			v-bind="$attrs"
			v-model="model"
			@blur="isEager = true"
		/>
	</validated-component>
</template>

<script>
import ValidatedComponent from './validated-component.vue';
import { getRandom } from '../utilities/get-random.js';

export default {
	components: { ValidatedComponent },
	props: {
		label: String,
		labelHelper: String,
		errorMessage: String,
		rules: Array,
		value: null,
	},
	data() {
		return {
			id: getRandom(),
			isEager: false,
		};
	},
	computed: {
		model: {
			get() { return this.value },
			set(value) { this.$emit('change', value) },
		},
	},
};
</script>

<style lang="scss" module>
.root {

}
</style>
