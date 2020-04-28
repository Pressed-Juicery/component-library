<template>
	<div :class="['quantity-selector', {'quantity-selector--expanded': quantity }]">
		<div v-if="quantity" class="quantity-selector__button" @click="updateQuantity('decrement')">-</div>
		<div v-if="quantity" class="quantity-selector__quantity">{{ quantity }}</div>
		<div class="quantity-selector__button" @click="updateQuantity('increment')">+</div>
	</div>
</template>

<script>
export default {
	props: {
		quantity: Number,
	},

	methods: {
		updateQuantity(mutation) {
			this.$emit('updateQuantity', mutation);
		},
	},
};
</script>

<style lang="scss">
@import '../styles/variables';

$selectorButtonColor: $gray-50;
$selectorBorderColor: $gray-30;

.quantity-selector {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid $selectorBorderColor;
	padding: $spacing-04;
	border-radius: 100%;
}

.quantity-selector--expanded {
	justify-content: space-between;
	border-radius: 30px;
}

.quantity-selector__quantity {
	font-size: $font-size-05;
	padding: 0 $spacing-06;
}

.quantity-selector__button{
	color: $selectorButtonColor;
	font-weight: $font-weight-bold;
	font-size: $font-size-08;
	height: $spacing-07;
	width: $spacing-07;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	user-select: none;
	cursor: pointer;
}
</style>
