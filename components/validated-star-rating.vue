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
		<star-rating
			:class="$style.validatedStarRating"
			:id="id"
			v-bind="$attrs"
			v-model="model"
			@blur="isEager = true"
			:is-readonly="false"
		/>
	</validated-component>
</template>

<script>
import StarRating from './star-rating.vue';
import ValidatedComponent from './validated-component.vue';
import { getRandom } from '../utilities/get-random.js';

export default {

	components: { ValidatedComponent, StarRating },

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

<style lang="scss" module>
.validatedTextarea {
	resize: none;
}
</style>
