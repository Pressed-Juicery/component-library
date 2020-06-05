<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
			<div :class="$style.wrapper">
				<div :class="$style.leftColumn">
					<div>Amount/Serving</div>
					<!-- Start column one -->
					<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
						<div :class="$style.spacing">{{ fact.label }} {{ fact.amountPerServing }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
								<div :class="$style.spacing">{{ factChild.label }} {{ factChild.amountPerServing }}</div>
							</div>
						</template>
					</div>
				</div>
				<div :class="$style.rightColumn">
					<div>%DV</div>
					<!-- Start column two -->
					<div v-for="(fact, index) in nutritionDetails.facts" :key="index">
						<div :class="$style.spacing">{{ fact.dailyValue === null ? '\0' : fact.dailyValue }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="(factChild, index) in fact.children" :key="index">
								<!-- TODO if this is null it looks aweful -->
								<div :class="$style.spacing">{{ factChild.dailyValue === null ? '\0' : factChild.dailyValue }}</div>
							</div>
						</template>
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
.wrapper {
	display: flex;
	justify-content: space-around;
	flex-flow: row;
	align-items: stretch;
}

.leftColumn, .rightColumn {
	flex-grow: 1;
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
	// background-color: #00ffff80;
	border-bottom: 1px solid silver;
}
</style>