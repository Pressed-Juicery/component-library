<template>
	<div>
		<div>Serving size {{ nutritionDetails.servingSize }}, Servings {{ nutritionDetails.servingsPerContainer }}</div>
		<div>Calories per serving {{ nutritionDetails.calories }}</div>
			<div :class="$style.wrapper">
				<div :class="$style.left">
					<div>Amount/Serving</div>
					<!-- Start column one -->
					<div v-for="fact in nutritionDetails.facts" :key="fact">
						<div>{{ fact.label }} {{ fact.amountPerServing }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="factChild in fact.children" :key="factChild">{{ factChild.label }} {{ factChild.amountPerServing }}</div>
						</template>
					</div>
				</div>

				<div :class="$style.right">
					<div>%DV</div>
					<!-- Start column two -->
					<div v-for="fact in nutritionDetails.facts" :key="fact">
						<div>{{ fact.dailyValue }}</div>
						<template v-if="fact.children.length > 0">
							<div :class="$style.child" v-for="factChild in fact.children" :key="factChild">{{ factChild.dailyValue }}</div>
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

.left, .right {
	flex-grow: 1;
}

// Control for all spacing
.left > div,
.right > div, .child {
	margin: 30px 0;
}

.right {
	text-align: right;
}

.child {
	text-indent: 20px;
}
</style>