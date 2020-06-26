<template>
	<div>
		<div :class="$style.heading">Ingredients</div>

		<div :class="$style.ingredients">
			<div :class="$style.ingredient" v-for="(ingredient, index) in ingredients" :key="index">
				<img :class="$style.icon" :src="ingredient.iconUrl" :alt="ingredient.title">
				<div :class="$style.ingredientTitle">{{ ingredient.title }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ingredients: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/mixins";
@import "../styles/variables";

.heading {
	@include text-cta-small();
	margin-bottom: $spacing-06;
}

.ingredients {
	display: grid;
	grid-template-columns: repeat(4, 25%);
	grid-row-gap: $spacing-06;
	align-content: center;
}

.ingredient {
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 0 $spacing-02;
}

.icon {
	height: $spacing-08;
	margin-bottom: $spacing-03;
	max-width: $spacing-10;
}

.ingredientTitle {
	@include text-body-small();
	text-align: center;
}
</style>
