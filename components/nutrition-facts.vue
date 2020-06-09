<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
		<div :class="$style.titles">
			<div :class="[$style.bolder]">Amount/Serving</div>
			<div :class="[$style.bolder, $style.right]">%DV</div>
		</div>
		<dl :class="$style.wrapper">
			<template v-for="(fact, index) in nutritionDetails.facts">
				<dt :key="fact.label">
					<span :class="$style.bolder">{{ fact.label }}</span>
					{{ fact.amountPerServing }}
				</dt>
				<dd
					:class="$style.right"
					:key="index + 1 * Math.random() * 10"
				>{{ fact.dailyValue === null ? "\0" : fact.dailyValue }}</dd>
				<template v-if="fact.children.length > 0">
					<template v-for="(child, index) in fact.children">
						<dd
							:class="$style.left"
							:key="child.label"
						>
							{{ child.label }} {{ child.amountPerServing }}
						</dd>
						<dd
							:class="$style.right"
							:key="index + 1 * Math.random() * 10"
						>
							{{ child.dailyValue === null ? "\0" : child.dailyValue }}
						</dd>
					</template>
				</template>
			</template>
		</dl>
		<section :class="$style.information">
			<div>
				<template v-for="(vitamin) in nutritionDetails.vitamins">
					<span
						:class="$style.vitamins"
						:key="vitamin.label"
					>
						{{ vitamin.value }} {{ vitamin.label }}
					</span>
				</template>
			</div>
			<div :class="$style.dailyValue">
				The % Daily Value tells you how much nutrient in a serving of
				food contributes to a daily diet. 2,000 calories a day
				is used for general nutritional advice.
			</div>
			<div>
				<template v-for="(claim) in nutritionDetails.claims">
					<span :class="$style.claims" :key="claim">{{ claim }}</span>
				</template>
			</div>
			<div>
				<template v-for="(warning) in nutritionDetails.warnings">
					<span :class="$style.warnings" :key="warning">{{ warning }}</span>
				</template>
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

.wrapper,
.titles {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

dl.wrapper {
	margin: 0;
}

.titles {
	margin-top: $spacing-05;
}

.titles,
dl.wrapper > * {
	padding: $spacing-03 0;
	border-bottom: $border;
}

.left, .right {
	margin: 0;
}

.left {
	grid-column: 1;
	text-indent: $spacing-06;
}

.right {
	grid-column: 2;
	text-align: right;
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

.vitamins:not(:first-child):before,
.claims:not(:first-child):before {
	content: '|';
	margin: 0 $spacing-01;
}

.dailyValue {
	@include text-subtle();
}

.claims {
	@include text-body();
}

.warnings {
	display: block;
}
</style>
