<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
		<div :class="$style.titles">
			<div :class="[$style.bolder]">Amount/Serving</div>
			<div :class="[$style.bolder, $style.right]">%DV</div>
		</div>
		<!-- Start Row -->
		<dl :class="$style.wrapper">
			<template v-for="(fact, index) in nutritionDetails.facts">
				<dt :class="$style.descTitle" :key="index * Math.random() * 10">
					<span :class="$style.bolder">{{ fact.label }}</span>
					{{ fact.amountPerServing }}
				</dt>
				<dd
					:class="$style.right"
					:key="index * Math.random() * 10"
				>{{ fact.dailyValue === null ? '\0' : fact.dailyValue }}</dd>
				<template v-if="fact.children.length > 0">
					<template v-for="(factChild, index) in fact.children">
						<dd
							:class="$style.left"
							:key="index * Math.random() * 10"
						>{{ factChild.label }} {{ factChild.amountPerServing }}</dd>
						<dd
							:class="$style.right"
							:key="index * Math.random() * 10"
						>{{ factChild.dailyValue === null ? '\0' : factChild.dailyValue }}</dd>
					</template>
				</template>
			</template>
		</dl>
		<section :class="$style.information">
				<div
					:class="$style.vitamins"
					v-for="(vitamin, index) in nutritionDetails.vitamins"
					:key="index * Math.random() * 10"
				>{{ vitamin.value }} {{ vitamin.label }}</div>
				<div :class="$style.dailyValue">
					The % Daily Value tells you how much nutrient in a serving of
					food contributes to a daily diet. 2,000 calories a day
					is used for general nutritional advice.
				</div>
				<div
					:class="$style.claims"
					v-for="(claim, index) in nutritionDetails.claims"
					:key="index * Math.random() * 10"
				>{{ claim }}</div>
				<div
					:class="$style.warnings"
					v-for="(warning, index) in nutritionDetails.warnings"
					:key="index * Math.random() * 10"
				>{{ warning }}</div>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		nutritionDetails: {
			type: Object,
			required: true
		}
	}
};
</script>

<style module lang='scss'>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.wrapper, .titles {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

dl.wrapper {
	margin: 0;
}

.titles {
	margin-top: $spacing-05;
}

.titles, dl.wrapper > * {
	padding: $spacing-03 0;
	border-bottom: $border;
}

.left {
	grid-column: 1;
	text-indent: $spacing-06;
	margin: 0;
}

.right {
	grid-column: 2;
	text-align: right;
	margin: 0;
}

.bolder {
	@include text-bolder();
}

.information div:nth-child(odd) {
	margin-top: $spacing-05;
}
.information div:nth-child(even) {
	margin-top: $spacing-03;
}

.vitamins,
.warnings {
	@include text-body-small();
}

.vitamins:not(:first-of-type):before,
.claims:not(:first-of-type):before {
	content: " | ";
}

.dailyValue {
	display: inline-block;
	@include text-subtle();
}

.vitamins {
	display: inline-block;
}

.claims {
	display: inline-block;
	@include text-body();
}

.warnings {
	display: block;
	line-height: $spacing-03;
}
</style>
