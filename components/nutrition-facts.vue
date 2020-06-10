<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div :class="$style.calories">Calories per serving {{ nutritionDetails.calories }}</div>

		<div :class="[$style.row, $style.heading]">
			<div>Amount/Serving</div>
			<div>%DV</div>
		</div>
		<div v-for="fact in nutritionDetails.facts" :key="fact.label">
			<div :class="$style.row">
				<div><span :class="$style.heading">{{ fact.label }}</span> {{ fact.amountPerServing }}</div>
				<div>{{ fact.dailyValue }}</div>
			</div>
			<div v-if="fact.children" :class="$style.row" v-for="child in fact.children">
				<div :class="$style.subheading">{{ child.label }} {{ child.amountPerServing }}</div>
				<div>{{ child.dailyValue }}</div>
			</div>
		</div>

		<div :class="$style.vitamins">
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

		<div :class="$style.claims">
			<span :class="$style.claim" v-for="(claim) in nutritionDetails.claims" :key="claim">{{ claim }}</span>
		</div>

		<div :class="$style.warnings" v-for='(warning) in nutritionDetails.warnings' :key="warning">{{ warning }}</div>
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

.calories {
	margin-bottom: $spacing-05;
}

.row {
	display: flex;
	justify-content: space-between;
}

.row {
	padding: $spacing-03 0;
	border-bottom: $border;
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

.claims {
	@include text-body();
}
</style>
