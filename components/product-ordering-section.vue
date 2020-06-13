<template>
	<div>
		<div :class="$style.productName">{{ product.name }}</div>
		<div :class="$style.imageArea">
			<slot/>
		</div>

		<div :class="[{[$style.informationCta]: !isVip, [$style.information]: isVip}]">
			<div :class="$style.price">
				${{ isVip
					? product.variants[currentVariant].memberPrice
					: product.variants[currentVariant].nonMemberPrice
				}}
			</div>
			<div :class="$style.calories">{{ product.variants[currentVariant].calories }} cal</div>
		</div>

		<div v-if="!isVip" :class="$style.cta">
			<div>
				Just ${{ product.variants[currentVariant].memberPrice }} for our VIP Members
			</div>
			<a :class="$style.learnMore" href="https://pressedjuicery.com/">Learn More</a>
		</div>

		<div v-if="product.variants.length > 1" :class="$style.dropdown">
			<select :class="$style.variant" v-model="currentVariant">
				<option
					v-for="(variant, index) in product.variants"
					:value="index"
					:key="index"
				>{{ variant.name }}</option>
			</select>
		</div>

		<div :class="$style.actionsGroup">
			<input
			:class="$style.quantity"
				type="number"
				v-model="quantity"
				min="0"
				oninput="validity.valid||(value='');"
			/>
			<button
				:class="$style.addToCartButton"
				:disabled="isDisabled"
				@click="addedToCart"
			>add to cart</button>
		</div>
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
		},
	},
	data() {
		return {
			currentVariant: 0,
			quantity: 1,
		};
	},
	computed: {
		isDisabled() {
			return this.quantity < 1;
		},
	},
	methods: {
		addedToCart() {
			const cartItem = {
				variantId: this.product.variants[this.currentVariant].id,
				quantity: Number(this.quantity),
			};

			this.$emit('addedToCart', cartItem);
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.productName {
	@include text-heading-4();
}

.imageArea {
	height: 344px;
	margin-bottom: $spacing-05;
}

.information,
.informationCta {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cta,
.information {
	margin-bottom: $spacing-06;
}

.informationCta,
.variant,
.quantity,
.productName {
	margin-bottom: $spacing-03;
}

.learnMore {
	@include text-body-small();
	border-bottom: 1px solid #000;
}

.price {
	@include text-heading-5();
}

.actionsGroup {
	display: grid;
	grid-template-columns: 88px 1fr;
	grid-column-gap: $spacing-03;
}

.variant {
	text-indent: $spacing-06;
	background: none;
	background-position-x: calc(100% - 24px);
}

.dropdown {
	position: relative;
}

.dropdown::before {
	content: "\2303";
	color: $gray-30;
	position: absolute;
	right: $spacing-07;
	margin-top: $spacing-05;
}

.variant,
.quantity,
.addToCartButton {
	height: $spacing-09;
}

.variant,
.quantity {
	background-color: #ffffff;
	border-radius: $spacing-02;
	border-color: transparent;
}

.quantity,
.quantity::-webkit-inner-spin-button,
.quantity::-webkit-outer-spin-button {
	-webkit-appearance: none;
	text-align: center;
}

</style>
