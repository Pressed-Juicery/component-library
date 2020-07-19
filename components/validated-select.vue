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
		<select :id="id" v-model="model" @change="isEager = true">
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.name }}
			</option>
		</select>
	</validated-component>
</template>

<script>
import ValidatedComponent from './validated-component';
import { getRandom } from '../utilities/get-random';

export default {
	components: { ValidatedComponent },
	props: {
		label: String,
		labelHelper: String,
		errorMessage: String,
		rules: Array,
		value: null,
		options: {
			type: Array,
			required: true,
		},
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
