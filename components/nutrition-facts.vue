<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div :class="$style.calories">Calories per serving {{ nutritionDetails.calories }}</div>

		<div :class="[$style.row, $style.heading]">
			<div>Amount/Serving</div>
			<div>%DV</div>
		</div>
		<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
			<div :class="$style.row">
				<div><span :class="$style.heading">{{ fact.label }}</span> {{ fact.amountPerServing }}</div>
				<div>{{ fact.dailyValue }}</div>
			</div>
			<div v-if="fact.children" :class="$style.row" v-for="(child, index) in fact.children" :key="index">
				<div :class="$style.subheading">{{ child.label }} {{ child.amountPerServing }}</div>
				<div>{{ child.dailyValue }}</div>
			</div>
		</div>

		<div :class="$style.vitamins">
			<span :class="$style.vitamin" v-for="(vitamin, index) in nutritionDetails.vitamins" :key="index">
				{{ vitamin.value }} {{ vitamin.label }}
			</span>
		</div>

		<div :class="$style.dailyValue">
			The % Daily Value tells you how much a nutrient in a serving of
			food contributes to a daily diet. 2,000 calories a day
			is used for general nutritional advice.
		</div>

		<div :class="$style.claims">
			<span :class="$style.claim" v-for="(claim, index) in nutritionDetails.claims" :key="index">{{ claim }}</span>
		</div>

		<div :class="$style.warnings">{{ warning }}</div>
	</div>
</template>

<script>
export default {
	props: {
		nutritionDetails: {
			type: Object,
			required: true,
		},
	},
	computed: {
		warning() {
			return (this.nutritionDetails.warnings || []).join(' ');
		}
	}
};
</script>

<style module lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.calories {
	margin-bottom: $spacing-05;
}

.row {
	display: flex;
	justify-content: space-between;
	padding: $spacing-03 0;
	border-bottom: $border-light;
}

.heading {
	@include text-bolder();
}

.subheading {
	text-indent: $spacing-06;
}

.vitamins,
.claims {
	margin-top: $spacing-05;
}

.dailyValue,
.warnings {
	margin-top: $spacing-03;
}

.vitamins,
.dailyValue,
.warnings {
	@include text-body-small();
}

.vitamin:not(:first-child):before,
.claim:not(:first-child):before {
	content: ' | ';
}

.dailyValue {
	@include text-subtle();
}
</style>
