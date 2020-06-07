<template>
	<div :class="$style.root">
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
		<div :class="$style.wrapper">
			<div :class="$style.leftColumn">
				<div :class="[$style.bolder, $style.columnTitle]">Amount/Serving</div>
				<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
					<div :class="$style.spacing">
						<span :class="$style.bolder">{{ fact.label }}</span>
						{{ fact.amountPerServing }}
					</div>
					<template v-if="fact.children.length > 0">
						<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
							<div :class="$style.spacing">{{ factChild.label }} {{ factChild.amountPerServing }}</div>
						</div>
					</template>
				</div>
			</div>
			<div :class="$style.rightColumn">
				<div :class="[$style.bolder, $style.columnTitle]">%DV</div>
				<!-- Start column two -->
				<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
					<div :class="$style.spacing">{{ fact.dailyValue === null ? '\0' : fact.dailyValue }}</div>
					<template v-if="fact.children.length > 0">
						<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
							<div
								:class="$style.spacing"
							>{{ factChild.dailyValue === null ? '\0' : factChild.dailyValue }}</div>
						</div>
					</template>
				</div>
			</div>
		</div>
		<section :class="$style.information">
			<div>
				<span
					:class="$style.vitamins"
					v-for="(vitamin, index) in nutritionDetails.vitamins"
					:key="index"
				>{{ vitamin.value }} {{ vitamin.label }}</span>
			</div>
			<div>
				<span
					:class="$style.dailyValue"
				>The % Daily Value tells you how much nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutritional advice.</span>
			</div>
			<div>
				<span
					:class="$style.claims"
					v-for="(claim, index) in nutritionDetails.claims"
					:key="index"
				>{{ claim }}</span>
			</div>
			<div>
				<span
					:class="$style.warnings"
					v-for="(warning, index) in nutritionDetails.warnings"
					:key="index"
				>{{ warning }}</span>
			</div>
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

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.wrapper {
	display: flex;
	justify-content: space-around;
	flex-flow: row;
	align-items: stretch;
}

.columnTitle,
.spacing {
	border-bottom: $spacing-01 solid $gray-20;
}

.columnTitle {
	padding-bottom: $spacing-05;
}

.leftColumn,
.rightColumn {
	flex-grow: 1;
	margin-top: $spacing-05;
}

.rightColumn {
	text-align: right;
}

.child {
	text-indent: $spacing-06;
}

.spacing {
	padding: $spacing-05 0;
}

.bolder {
	@include text-bolder();
	line-height: 0;
}

.information div:nth-child(odd) {
	margin-top: $spacing-05;
}
.information div:nth-child(even) {
	margin-top: $spacing-03;
}

.vitamins:not(:first-child):before,
.claims:not(:first-child):before {
	content: " | ";
}

.dailyValue {
	@include text-subtle();
}

.claims {
	@include text-heading-6();
}

.warnings {
	@include text-cta-small();
	display: block;
	line-height: $spacing-06;
}
</style>