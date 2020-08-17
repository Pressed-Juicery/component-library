<template>
	<div v-if="current">
		<div :class="$style.productName">{{ current.name }}</div>
		<img
			:class="$style.image"
			:src="current.imageUrl"
			:alt="current.name"
		>

		<div :class="[{[$style.informationCta]: !isVip}, $style.information]">
			<div :class="$style.price">
				{{price | currency}}
			</div>
			{{current.nutritionSummary && current.nutritionSummary.calories}}
		</div>

		<div :class="$style.cta" v-if="showCta">
			<div>
				Just {{ current.memberPrice | currency }} for our VIP Members
			</div>
			<a :class="$style.learnMore" href="https://pressedjuicery.com/">
				Learn More
			</a>
		</div>

		<div :class="$style.actionsGroup">
			<validated-select
				v-if="options.length"
				:class="$style.variant"
				:options="options"
				:value="current"
				@input="selected"
			/>
			<input
				:class="$style.quantity"
				type="number"
				v-model="quantity"
				min="1"
			/>
			<button :class="$style.addToCartButton" @click="addToCart">
				Add to cart
			</button>
		</div>
	</div>
</template>

<script>
import ValidatedSelect from './validated-select.vue';
import { formatCurrency } from '../utilities/formatters.js';

export default {
	components: { ValidatedSelect },
	props: {
		isVip: {
			type: Boolean,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
		current: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			quantity: 1,
		};
	},
	computed: {
		showCta() {
			return !this.isVip
				&& this.current.memberPrice
				!== this.current.nonMemberPrice;
		},
		price() {
			return this.isVip
				? this.current.memberPrice
				: this.current.nonMemberPrice;
		},
	},
	methods: {
		addToCart() {
			const cartItem = {
				variantId: this.current.id,
				quantity: Number(this.quantity),
			};

			this.$emit('addToCart', cartItem);
		},

		selected(value) {
			this.$emit('variant-change', value);
		},
	},
	filters: {
		currency(value) {
			return formatCurrency(value);
		},
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

	.information {
		display: flex;
		justify-content: space-between;
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

	.actionsGroup {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: $spacing-03;
	}

	.variant {
		// Needed to reset the validated-component margin-bottom of 24px
		margin-bottom: 0;
		grid-column: span 2;
	}

	.quantity {
		width: 88px;
		text-align: center;
	}

	.addToCartButton,
	.quantity {
		height: $spacing-09;
	}
</style>
