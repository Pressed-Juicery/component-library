<template>
	<div v-if="ingredients && ingredients.length">
		<div :class="$style.heading">Ingredients</div>

		<div :class="$style.ingredients">
			<div :class="$style.ingredient" v-for="(ingredient, index) in ingredients" :key="index">
				<img :class="$style.icon" :src="ingredient.iconUrl" />
				<div :class="$style.name">{{ ingredient.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ingredients: {
			type: Array,
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
	grid-template-columns: repeat(auto-fill, minmax($spacing-11, 1fr));
	grid-gap: $spacing-06 $spacing-04;
}

.ingredient {
	display: flex;
	flex-flow: column;
	align-items: center;
}

.icon {
	height: $spacing-08;
	max-width: $spacing-10;
	margin-bottom: $spacing-03;
}

.name {
	@include text-body-small();
	text-align: center;
}
</style>
