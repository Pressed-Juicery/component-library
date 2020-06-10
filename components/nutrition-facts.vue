<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>

		<div :class="[$style.titles, $style.row]">
			<div :class="$style.heading">Amount/Serving</div>
			<div :class="[$style.heading]">%DV</div>
		</div>
		<div v-for="fact in nutritionDetails.facts" :key="fact.label">
			<div :class="$style.row">
				<div><span :class="$style.heading">{{ fact.label }}</span> {{ fact.amountPerServing }}</div>
				<div>{{ fact.dailyValue }}</div>
			</div>
			<div :class="$style.row" v-if="fact.children.length > 0" v-for="child in fact.children">
				<div :class="$style.subheading">{{ child.label }} {{ child.amountPerServing }}</div>
				<div>{{ child.dailyValue }}</div>
			</div>
		</div>

		<section :class="$style.information">
			<div>
				<span
					:class="$style.vitamin"
					v-for="(vitamin) in nutritionDetails.vitamins"
					:key="vitamin.label"
				>
					{{ vitamin.value }} {{ vitamin.label }}
				</span>
			</div>
			<div :class="$style.dailyValue">
				The % Daily Value tells you how much a nutrient in a serving of
				food contributes to a daily diet. 2,000 calories a day
				is used for general nutritional advice.
			</div>
			<div>
				<span :class="$style.claim" v-for="(claim) in nutritionDetails.claims" :key="claim">{{ claim }}</span>
			</div>
			<div>
				<span :class="$style.warnings" v-for='(warning) in nutritionDetails.warnings' :key="warning">{{ warning }}</span>
			</div>
		</section>
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
};
</script>

<style module lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.titles {
	margin-top: $spacing-05;
}

.row {
	display: flex;
	justify-content: space-between;
}

.titles,
.row {
	padding: $spacing-03 0;
	border-bottom: $border;
}

.subheading {
	margin: 0;
	grid-column: 1;
	text-indent: $spacing-06;
}

.heading {
	@include text-bolder();
}

.information div:nth-child(odd) {
	margin-top: $spacing-05;
}
.information div:nth-child(even) {
	margin-top: $spacing-03;
}

.vitamin,
.warnings {
	@include text-body-small();
}

.vitamin:not(:first-child):before,
.claim:not(:first-child):before {
	content: '|';
	margin: 0 $spacing-01;
}

.dailyValue {
	@include text-subtle();
}

.claim {
	@include text-body();
}

.warnings {
	display: block;
}
</style>
