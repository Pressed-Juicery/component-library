<template>
	<div :class="$style.root">
		<div :class="$style.inputWrapper">
			<input placeholder="Discount Code" :class="$style.input" v-model="discountCode"/>
			<button
				:class="$style.button"
				:disabled="!discountCode"
				@click="submit"
			>
			Apply
			</button>
		</div>
		<div v-if="discounts" :class="$style.discountWrapper">
			<div v-for="discount in discounts" :class="$style.discount" :key="discount.id">
				<discount-tag :class="$style.discountTag" />
				<div :class="$style.code">{{ discount.code }}</div>
				<close-icon :class="$style.close" @click.native="$emit('remove', discount)"/>
			</div>
		</div>
	</div>
</template>

<script>
import CloseIcon from './icons/close-icon';
import DiscountTag from './icons/discount-tag';

export default {
	components: { DiscountTag, CloseIcon },
	props: {
		discounts: {
			type: Array,
		},
	},
	data() {
		return {
			discountCode: null,
		};
	},
	methods: {
		submit() {
			this.$emit('submit', this.discountCode);
			this.discountCode = null;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	.root {
		margin-bottom: $spacing-07;
	}

	.inputWrapper {
		display: flex;
		margin-bottom: $spacing-03;
	}

	.discountWrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.discount {
		display: flex;
		align-items: center;
		padding: $spacing-03 $spacing-04;
		margin: $spacing-02;
		background-color: $beige;
		border-radius: $border-radius;
	}

	.discount:hover {
		opacity: .8;
	}

	.discountTag {
		height: 16px;
		width: 17px;
	}

	.code {
		margin: 0 $spacing-03;
	}

	.close {
		cursor: pointer;
		width: 11px;
		height: 12px;
	}

	.input {
		margin-right: $spacing-03;
	}

	.button {
		@include button-tertiary();
		flex-shrink: 0;
	}
</style>
