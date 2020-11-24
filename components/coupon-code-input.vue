<template>
	<div :class="$style.root">
		<div :class="$style.inputWrapper">
			<input
				type="text"
				placeholder="Discount Code"
				:class="$style.input"
				@keydown.enter="submit"
				v-model="couponCode"
			/>
			<button
				:class="$style.button"
				:disabled="!couponCode"
				@click="submit"
			>
			Apply
			</button>
		</div>
		<div :class="$style.error">{{ error }}</div>
		<div v-if="coupons" :class="$style.couponWrapper">
			<div v-for="coupon in coupons" :class="$style.coupon" :key="coupon.id">
				<coupon-tag :class="$style.couponTag" />
				<div :class="$style.code">{{ coupon.code }}</div>
				<close-icon :class="$style.remove" @click.native="$emit('remove', coupon)"/>
			</div>
		</div>
	</div>
</template>

<script>
import CloseIcon from './icons/close-icon';
import CouponTag from './icons/coupon-tag';

export default {
	components: { CouponTag, CloseIcon },
	props: {
		coupons: {
			type: Array,
		},
		error: {
			type: String,
		},
	},
	data() {
		return {
			couponCode: null,
		};
	},
	methods: {
		submit() {
			this.$emit('submit', this.couponCode);
			this.couponCode = null;
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	$coupon-spacing: $spacing-03;

	.root {
		margin-bottom: $spacing-05;
	}

	.inputWrapper {
		display: flex;
	}

	.input {
		margin-right: $spacing-03;
	}

	.button {
		@include button-tertiary();
		flex-shrink: 0;
	}

	.error {
		margin-bottom: $spacing-03;
		color: $color-danger;
	}

	.couponWrapper {
		display: flex;
		flex-wrap: wrap;
		margin-right: (-$coupon-spacing);
	}

	.coupon {
		display: flex;
		align-items: center;
		padding: $spacing-03 $spacing-05;
		margin-right: $coupon-spacing;
		background-color: $beige;
		border-radius: $border-radius;
	}

	.couponTag {
		height: 16px;
		width: 17px;
	}

	.code {
		margin: 0 $spacing-03;
	}

	.remove {
		cursor: pointer;
		width: 11px;
		height: 12px;
	}
</style>
