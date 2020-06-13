<template>
	<div>
		<div :class="$style.productName">{{ product.name }}</div>
		<div :class="$style.images"></div>
		<div :class="$style.information">
			<div
				:class="$style.price"
			>${{ isVip 
				? product.variants[currentVariant].memberPrice 
				: product.variants[currentVariant].nonMemberPrice 
			}}</div>
			<div :class="$style.calories">{{ product.variants[currentVariant].calories }} cal</div>
		</div>
		<select :class="$style.variant" v-model="currentVariant">
			<option
				v-for="(variant, index) in product.variants"
				:value="index"
				:key="index"
			>{{ variant.name }}</option>
		</select>
		<div :class="$style.actionGroup">
			<input :class="$style.quantity" type="number" v-model="quantity" min="0" oninput="validity.valid||(value='');" />
			<button :class="$style.addToCartButton" :disabled="isDisabled" @click="addedToCart">add to cart</button>
		</div>
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
		},
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
		},
	},
	methods: {
		addedToCart() {
			let cartItem = {
				variantId: this.product.variants[this.currentVariant].id,
				quantity: Number(this.quantity),
			};
			this.$emit("addedToCart", cartItem);
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.productName {
	@include text-heading-4();
	margin-bottom: $spacing-03;
}

.information {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: $spacing-06;
}

.images {
	height: 344px;
	margin-bottom: $spacing-07;
}

.price {
	@include text-heading-5();
}

.actionGroup {
	display: grid;
	grid-template-columns: 88px 1fr;
	grid-column-gap: $spacing-03;
}

.variant {
	text-indent: $spacing-06;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_up.png) no-repeat right;
	background-position-x: calc(100% - 24px);
}

.variant,
.quantity,
.addToCartButton {
	height: $spacing-09;
}

.variant,
.quantity {
	background-color: #ffffff;
	border-radius: $spacing-04;
	border-color: transparent;
	margin-bottom: $spacing-03;
}

.quantity,
.quantity::-webkit-inner-spin-button,
.quantity::-webkit-outer-spin-button {
	-webkit-appearance: none;
	text-align: center;
}

</style>