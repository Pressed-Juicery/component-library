<template>
	<div>

		<div :class="$style.info">
			<div>
				<div :class="$style.label">Order #</div>
				<div :class="$style.infoContent">{{orderDetails.orderNumber}}</div>
			</div>
			<div>
				<div :class="$style.label">Order Date</div>
				<div :class="$style.infoContent">{{date}}</div>
			</div>
			<div>
				<div :class="$style.label">Status</div>
				<div :class="$style.infoContent">{{orderDetails.fulfillmentStatus}}</div>
			</div>
		</div>

		<div :class="$style.block">
			<div :class="$style.label">Fulfillment Method</div>
			<div>{{orderDetails.properties[0].value}}</div>
		</div>

		<div :class="$style.block">
			<div :class="$style.label">Delivery Address</div>
			<address-formatter :class="$style.address" :address="address" />
			<div :class="$style.label">Order Details</div>
			<!-- <checkout-item-card
				v-for="(item, index) in orderDetails.items"
				:key="index"
				:item="item"
			/> -->
			Cannot use CheckoutItemCard without imageUrl from the db.
		</div>

		<div :class="$style.block">
			<div :class="$style.label">Payment</div>
			<div>{{orderDetails.paymentMethod}}</div>
		</div>

		<div :class="$style.block">
			<div :class="$style.label">Order Total</div>
			<div :class="$style.row">
				<span @click="toggleDiscounts">
					Subtotal
					<ArrowDownIcon
						v-if="containsDiscounts"
						:class="[{[$style.downArrowFlipped]: showDiscounts}, $style.downArrow]"
					/>
				</span>
				<span>
					<span v-if="containsDiscounts" :class="$style.savings">${{totalDiscounts}}</span>
					${{orderDetails.subtotal}}
				</span>
			</div>

			<div v-if="showDiscounts" :class="[$style.discounts]">
				<div :class="$style.label">Coupons Applied</div>
				<div
					:class="$style.row"
					v-for="(coupon, index) in orderDetails.discountCoupons"
					:key="index"
				>
					<div>{{ coupon.code }}</div>
					<div :class="$style.savings">${{ coupon.amount }}</div>
				</div>
			</div>

			<div :class="$style.row">
				<div>Shipping/Delivery</div>
				<div>${{orderDetails.fulfillmentPrice}}</div>
			</div>

			<div :class="$style.row">
				<div :class="$style.totalLabel">Total</div>
				<div :class="$style.totalPrice">${{orderDetails.totalPrice}}</div>
			</div>
		</div>

	</div>
</template>

<script>
import AddressFormatter from './address-formatter.vue';
import ArrowDownIcon from './icons/arrow-down-icon.vue';
import CheckoutItemCard from './checkout-item-card.vue';
import { formatMediumDate } from '../utilities/formatters';

export default {
	components: { AddressFormatter, ArrowDownIcon, CheckoutItemCard },
	props: {
		orderDetails: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			showDiscounts: false,
			containsDiscounts: this.orderDetails.discountCoupons.length,
		};
	},
	methods: {
		toggleDiscounts() {
			if (this.containsDiscounts) {
				this.showDiscounts = !this.showDiscounts;
			}
		},
	},
	computed: {
		address() {
			return {
				streetAddress: this.orderDetails.streetAddress,
				extendedAddress: this.orderDetails.extendedAddress,
				locality: this.orderDetails.locality,
				region: this.orderDetails.region,
				postal: this.orderDetails.postal,
				country: this.orderDetails.country,
				phone: this.orderDetails.phone,
			};
		},
		date() {
			return formatMediumDate(this.orderDetails.createdAt);
		},
		totalDiscounts() {
			return this.orderDetails.discountCoupons.reduce((total, coupon) => (total + coupon.amount), 0);
		},
	},
};
</script>

<style lang="scss" module>
	@import '../styles/mixins.scss';
	@import '../styles/variables.scss';

	.info {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: $spacing-07 $spacing-06 $spacing-06 $spacing-06;
		border-bottom: $border-light;
	}

	.block {
		padding: $spacing-06 0 $spacing-06 0;
		border-bottom: $border-light;
		margin: 0 $spacing-06;

		&:last-of-type {
			border-bottom: none;
		}
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: $spacing-03;
	}

	.label {
		@include text-body-small();
		@include text-subtle();
		margin-bottom: $spacing-03;
	}

	// Can this be removed in favor of a parent?
	.infoContent {
		@include text-cta()
	}

	.address {
		@include text-body();
		margin-bottom: $spacing-05;
	}

	.downArrow {
		display: inline;
		width: $spacing-04;
		margin-left: $spacing-03;
	}

	.downArrowFlipped {
		transform: rotate(180deg);
	}

	.discounts {
		padding-left: $spacing-05;
	}

	.savings {
		@include text-subtle();
		@include text-strikethrough();
	}

	.totalLabel {
		@include text-bolder();
	}

	.totalPrice {
		@include text-heading-5();
	}
</style>
