<template>
	<validated-form @submit="handleSubmit">

		<validated-component :value="review.rating" :rules="starRules">
			<star-rating :is-readonly="false" v-model="review.rating" />
		</validated-component>

		<validated-input label="Title" v-model="review.title" :rules="basicRules" />

		<validated-component label="Description" :value="review.description" :rules="basicRules" :isEager="isEager">
			<textarea v-model="review.description" :class="$style.description" @blur="isEager = true"></textarea>
		</validated-component>

		<button type="submit" name="button">save</button>
	</validated-form>
</template>

<script>
import { isNotEmpty, isTruthy } from '../utilities/validators.js';
import ValidatedForm from "./validated-form.vue";
import ValidatedInput from "./validated-input.vue";
import ValidatedComponent from './validated-component.vue';
import StarRating from "./star-rating.vue";

export default {
	components: { StarRating, ValidatedForm, ValidatedInput, ValidatedComponent },
	data() {
		return {
			review: {
				rating: 0,
				title: '',
				description: '',
			},
			isEager: false,
			basicRules: [
				{
					validator: isNotEmpty,
					message: "Cannot be empty."
				}
			],
			starRules: [
				{
					validator: isTruthy,
					message: "Please provide rating"
				}
			]
		}
	},
	methods: {
		handleSubmit(value) {
			console.log(value)
		}
	}
}
</script>

<style lang="scss" module>
@import "../styles/mixins.scss";

.description {
	resize: none;
	height: 165px;
}
</style>
