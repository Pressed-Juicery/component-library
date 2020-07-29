<template>
	<div>
		<div :class="$style.productName">{{ currentVariant.name }}</div>
		<img
			:class="$style.image"
			:src="currentVariant.imageUrl"
			:alt="currentVariant.name"
		>

		<div :class="[{[$style.informationCta]: !isVip}, $style.information]">
			<div :class="$style.price">
				${{price}}
			</div>
		</div>

		<div :class="$style.cta" v-if="showCta">
			<div>
				Just ${{ currentVariant.memberPrice }} for our VIP Members
			</div>
			<a :class="$style.learnMore" href="https://pressedjuicery.com/">
				Learn More
			</a>
		</div>

		<div :class="$style.actionsGroup">
			<validated-select
				:class="$style.variant"
				v-if="product.variants.length > 1"
				v-model="currentVariant"
				:options="variants"
			/>
			<validated-input
				:class="$style.quantity"
				type="number"
				v-model="quantity"
				min="1"
			/>
			<button :class="$style.addToCartButton" @click="addToCart">
				Add to Cart
			</button>
		</div>
	</div>
</template>

<script>
import ValidatedInput from './validated-input.vue';
import ValidatedSelect from './validated-select.vue';

export default {
	components: { ValidatedInput, ValidatedSelect },
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
			currentVariant: null,
			quantity: 1,
		};
	},
	computed: {
		variants() {
			return this.product.variants.map(variant => {
				return {
					name: variant.name,
					value: variant,
				};
			});
		},
		showCta() {
			return !this.isVip
				&& this.currentVariant.memberPrice
				!== this.currentVariant.nonMemberPrice;
		},
		price() {
			return this.isVip
				? this.currentVariant.memberPrice
				: this.currentVariant.nonMemberPrice;
		},
	},
	methods: {
		addToCart() {
			const cartItem = {
				variantId: this.currentVariant.id,
				quantity: Number(this.quantity),
			};

			this.$emit('addedToCart', cartItem);
		},
	},
	created() {
		this.currentVariant = this.variants[0].value;
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.productName {
		@include text-heading-4();
	}

	.image {
		width: 100%;
	}

	.cta,
	.information {
		margin-bottom: $spacing-06;
	}

	.productName {
		margin-bottom: $spacing-05;
	}

	.learnMore {
		@include text-body-small();
		text-decoration: underline;
	}

	.price {
		@include text-heading-5();
	}

	// Needed to reset the validated-input's margin-bottom of 24px
	.variant,
	.quantity {
		margin-bottom: 0;
	}

	.actionsGroup {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: $spacing-03;
	}

	.variant {
		grid-column: span 2;
	}

	.quantity {
		width: 88px;
	}

	.addToCartButton {
		height: $spacing-08;
	}
</style>
