<template>
	<validated-form :id="id" @submit="$emit('submit', review)">
		<validated-star-rating
			v-model="review.rating"
			:rules="starRules"
		/>
		<validated-input
			label="Title"
			v-model="review.title"
			:rules="basicRules"
		/>
		<validated-textarea
			:class="$style.description"
			label="Description"
			v-model="review.description"
			:rules="basicRules"
		/>
	</validated-form>
</template>

<script>
import { isNotEmpty, isTruthy } from '../utilities/validators.js';
import ValidatedForm from './validated-form.vue';
import ValidatedInput from './validated-input.vue';
import ValidatedStarRating from './validated-star-rating.vue';
import ValidatedTextarea from './validated-textarea.vue';

export default {
	components: { ValidatedForm, ValidatedInput, ValidatedTextarea, ValidatedStarRating },

	props: {
		id: String,
	},

	data() {
		return {
			review: {
				rating: null,
				title: null,
				description: null,
			},
			basicRules: [
				{
					validator: isNotEmpty,
					message: 'Cannot be empty.',
				},
			],
			starRules: [
				{
					validator: isTruthy,
					message: 'Please provide rating',
				},
			],
		};
	},
};
</script>

<style lang="scss" module>
	.description {
		height: 165px;
	}
</style>
