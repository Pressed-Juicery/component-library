<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div :class="$style.calories">Calories per serving {{ nutritionDetails.calories }}</div>

		<div :class="[$style.row, $style.heading]">
			<div>Amount/Serving</div>
			<div>%DV</div>
		</div>

		<div v-for="(fact, parentIndex) in nutritionDetails.facts" :key="parentIndex">
			<div :class="$style.row">
				<div><span :class="$style.heading">{{ fact.label }}</span> {{ fact.amountPerServing }}</div>
				<div>{{ fact.dailyValue }}</div>
			</div>

			<div v-for="(child, childIndex) in (fact.children || [])" :key="childIndex">
				<div :class="$style.row">
					<div :class="$style.subheading">{{ child.label }} {{ child.amountPerServing }}</div>
					<div>{{ child.dailyValue }}</div>
				</div>

				<div :class="$style.row"
					v-for="(grandchild, grandchildIndex) in (child.children || [])"
					:key="grandchildIndex">
					<div :class="$style.tertiaryHeading">{{ grandchild.label }} {{ grandchild.amountPerServing }}</div>
					<div>{{ grandchild.dailyValue }}</div>
				</div>
			</div>
		</div>

		<div :class="$style.vitamins">
			<span :class="$style.vitamin" v-for="(vitamin, index) in nutritionDetails.vitamins" :key="index">
				{{ vitamin.dailyValue }} {{ vitamin.name }}
			</span>
		</div>

		<div :class="$style.dailyValue">
			The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet.
			2,000 calories a day is used for general nutritional advice.
		</div>

		<div v-if="nutritionDetails.ingredients" :class="$style.ingredients">
			<span>Ingredients:</span> {{ nutritionDetails.ingredients }}
		</div>

		<div :class="$style.claims">
			<span
				:class="$style.claim"
				v-for="(claim, index) in nutritionDetails.claims"
				:key="index"
			>{{ claim }}</span>
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
		},
	},
};
</script>

<style module lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

$indentation-spacing: $spacing-06;

.calories {
	margin: $spacing-02 0 $spacing-05;
}

.row {
	display: flex;
	justify-content: space-between;
	padding: $spacing-03 0;
}

.heading {
	@include text-bolder();
}

.subheading {
	text-indent: $indentation-spacing;
}

.tertiaryHeading {
	text-indent: $indentation-spacing * 2;
}

.vitamins,
.claims,
.ingredients {
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

.vitamin,
.claim {
	display: inline-block;

	&:not(:last-child):after {
		content: ' | ';
		white-space: pre;
	}
}

.dailyValue {
	@include text-subtle();
}
</style>
