<template>
	<div>
		<div :class="$style.productName">{{ product.name }}</div>
		<div :class="$style.information">
			<div
				:class="$style.price"
			>${{ isVip ? product.variants[currentVariant].memberPrice : product.variants[currentVariant].nonMemberPrice }}</div>
			<div :class="$style.calories">{{ product.variants[currentVariant].calories }} cal</div>
		</div>
		<select v-model="currentVariant">
			<option
				v-for="(variant, index) in product.variants"
				:value="index"
				:key="index"
			>{{ variant.name }}</option>
		</select>
		<input type="number" v-model="quantity" min="0" oninput="validity.valid||(value='');" />
		<button :disabled="isDisabled" @click="addedToCart">add to cart</button>
	</div>
</template>

<script>
export default {
	props: {
		isVip: {
			type: Boolean,
			required: true
		},
		product: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			currentVariant: 0,
			quantity: 1
		};
	},
	computed: {
		isDisabled() {
			return this.quantity < 1 ? true : false;
		}
	},
	methods: {
		addedToCart() {
			let cartItem = {
				variantId: this.product.variants[this.currentVariant].id,
				quantity: Number(this.quantity)
			};
			this.$emit("addedToCart", cartItem);
		}
	}
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.productName {
	@include text-heading-4();
}

.information {
	display: flex;
}

.information {
	justify-content: space-between;
}

.price {
	@include text-heading-5();
}
</style>