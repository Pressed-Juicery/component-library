<template>
	<validated-form :id="id" @submit="$emit('submit', review)">
		<validated-star-rating v-model="review.rating" :rules="starRules" />
		<validated-input label="Title" v-model="review.title" :rules="basicRules" />
		<validated-textarea
			:class="$style.description"
			label="Description"
			v-model="review.description"
			:rules="basicRules"
		/>
	</validated-form>
</template>

<script>
import { isNotEmpty, isTruthy } from '../utilities/validators';
import ValidatedForm from './validated-form';
import ValidatedInput from './validated-input';
import ValidatedStarRating from './validated-star-rating';
import ValidatedTextarea from './validated-textarea';

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
