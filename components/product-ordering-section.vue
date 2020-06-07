<template>
	<div :class='$style.root'>
		<h3>Hello</h3>
		<div :class="$style.wrapper">
			<!-- Photo grid goes here -->
			<div class='leftColumn'>
				${{ product.variants[0].nonMemberPrice }}
				<span :class="$style.modifierPricing">(+${{ product.availableModifiers[0].price }} Toppings)</span>
			</div>
			<div class='rightColumn'>
				{{ product.variants[0].calories }} cal
			</div>
		</div>
		<!-- This section will likely will depend on the product -->
		<select>
			<option value="Size 1">Size 1</option>
			<option value="Size 2">Size 2</option>
			<option value="Size 3">Size 3</option>
		</select>
		<select>
			<option value="Size 1">Size 1</option>
			<option value="Size 2">Size 2</option>
			<option value="Size 3">Size 3</option>
		</select>
		<!-- Selected Options array printed here I assume? -->
		<!-- Button group -->
		<button class="button--secondary">1</button>
		<button>Add to Cart</button>
	</div>
</template>

<script>
	export default {
		props: {
			isVip: {
				type: Boolean,
				required: true,
			},
			product: {
				type: Object,
				required: true,
			}
		},
		addedToCart(item) {
			this.$emit("addedToCart", item)
		}
	}
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.root {
	background-color: $beige;
}

.wrapper {
	display: flex;
	justify-content: space-between;
	flex-flow: row;
	align-items: stretch;
}

.leftColumn {
	flex-grow: 1;
}

.rightColumn {
	flex-grow: 1;
}

.modifierPricing {
	color: $beige-dark;
	margin-left: 10px;
}

</style>