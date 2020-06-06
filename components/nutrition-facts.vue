<template>
	<div :class="$style.root">
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
			<div :class="$style.wrapper">
				<div :class="$style.leftColumn">
					<div :class="$style.bolder">Amount/Serving</div>
					<!-- Start column one -->
					<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
						<div :class="$style.spacing"><span :class="$style.bolder">{{ fact.label }}</span> {{ fact.amountPerServing }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
								<div :class="$style.spacing">{{ factChild.label }} {{ factChild.amountPerServing }}</div>
							</div>
						</template>
					</div>
				</div>
				<div :class="$style.rightColumn">
					<div :class="$style.bolder">%DV</div>
					<!-- Start column two -->
					<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
						<div :class="$style.spacing">{{ fact.dailyValue === null ? '\0' : fact.dailyValue }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
								<div :class="$style.spacing">{{ factChild.dailyValue === null ? '\0' : factChild.dailyValue }}</div>
							</div>
						</template>
					</div>
				</div>
			</div>
		<!-- End table -->
		<div>
			<!-- TODO Find a way to render this as a string with spaces and lines between. -->
			<span v-for="(vitamin, index) in nutritionDetails.vitamins" :key="index">
				<span :class="$style.vitamin"> {{ vitamin.value }} {{ vitamin.label }} </span>
			</span>
			<p>The % Daily Value tells you how much nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutritional advice.</p>
			<span v-for="(claim, index) in nutritionDetails.claims" :key="index">
				<span :class="$style.claims"> {{ claim }} </span>
			</span>
			<span v-for="(warning, index) in nutritionDetails.warnings" :key="index">
				<span :class="$style.warning"> {{ warning }} </span>
			</span>
		</div>
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

.leftColumn, .rightColumn {
	flex-grow: 1;
	margin-top: 20px;
}


.rightColumn {
	text-align: right;
}

.child {
	text-indent: 20px;
}

// Control for all spacing
.spacing {
	padding: 10px 0;
	margin: 10px 0;
	// background-color: #00ffff80;
	border-bottom: 1px solid silver;
}
.bolder {
	@include text-bolder();
	line-height: 0;
}

// Figure out a way to get this to render with the bars in between but not on last.
.vitamin::after, .claims::after {
	content: " | "
}

.vitamin {
	@include text-bold();
}

.claims {
	@include text-heading-6()
}
</style>