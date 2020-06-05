<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
		<div :class="$style.gridWrapper" v-for="(fact, index) in nutritionDetails.facts" :key="index">
			<div :class="$style.leftColumn">
				<div>{{ fact.label }} {{ fact.amountPerServing }}</div>
				<div v-if="fact.children.length > 0">
					<div :class="$style.leftColumn" v-for="(fact, index) in fact.children" :key="index">
						<div>
							<div :class="$style.textIndent">{{ fact.label }} {{ fact.amountPerServing }}</div>
						</div>
					</div>
				</div>
			</div>
			<div :class="$style.rightColumn">
				<div>{{ fact.dailyValue }}</div>
				<div v-if="fact.children.length > 0">
					<div v-for="(fact, index) in fact.children" :key="index">
						<div :class="$style.rightColumn">
							<div>{{ fact.dailyValue }}</div>
						</div>
					</div>
				</div>
			</div>
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
.gridWrapper {
	display: grid;
	grid-template-areas:
		"leftColumn rightColumn";
}

.textIndent {
	text-indent: 15px;
}

.leftColumn {
	grid-area: leftColumn;
}

.rightColumn {
	grid-area: rightColumn;
	text-align: right;
}
</style>