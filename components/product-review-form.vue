<template>
	<validated-form :id="id" @submit="$emit('submit', review)">
		<validated-star-rating label="Rating" v-model="review.rating" :rules="starRules" />
		<validated-input
			type="text"
			label="Title"
			v-model="review.title"
			:rules="titleRules"
		/>
		<validated-textarea label="Description" v-model="review.description" :rules="descriptionRules" rows="4" />
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
		review: {
			type: Object,
			default: function () { return {} },
		},
	},

	data() {
		return {
			starRules: [{
				validator: isTruthy,
				message: 'Please provide a rating.',
			}],
			titleRules: [{
				validator: isNotEmpty,
				message: 'Please enter a title for your review.',
			}],
			descriptionRules: [{
				validator: isNotEmpty,
				message: 'Please add your review.',
			}],
		};
	},
};
</script>
