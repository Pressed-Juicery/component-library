<template>
	<validated-component
		:id="id"
		:label="label"
		:label-helper="labelHelper"
		:error-message="errorMessage"
		:value="model"
		:rules="rules"
		:isEager="isEager"
		ref="validatedComponent"
	>
		<star-rating
			:id="id"
			v-bind="$attrs"
			v-model="model"
			@blur="isEager = true"
			:is-readonly="false"
		/>
	</validated-component>
</template>

<script>
import StarRating from './star-rating';
import ValidatedComponent from './validated-component';
import { getRandom } from '../utilities/get-random';

export default {
	components: { ValidatedComponent, StarRating },

	props: {
		label: String,
		labelHelper: String,
		errorMessage: String,
		rules: Array,
		value: Number,
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
			set(value) { this.$emit('input', value) },
		},
	},

	methods: {
		isValid() {
			return this.$refs.validatedComponent.isValid();
		},
	},
};
</script>
