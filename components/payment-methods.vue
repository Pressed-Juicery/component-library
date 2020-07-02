<template>
	<div>
		<card :class="$style.paymentMethod" v-for="(method, index) in paymentMethods" :key="index">
			<div :class="$style.content" @click="select(index)">
				<div :class="$style.paymentInfo">
					<payment-method-icon :class="$style.icon" :type="method.vendor" />
					{{ method.identifier }}
				</div>
				<div>
					<div :class="$style.editLink" @click.stop="edit(index)">Edit</div>
				</div>
			</div>
		</card>
	</div>
</template>

<script>
import Card from './card';
import PaymentMethodIcon from './payment-method-icon';

export default {
	components: { PaymentMethodIcon, Card },

	props: {
		paymentMethods: {
			type: Array,
			required: true,
		},
	},

	methods: {
		edit(index) {
			this.$emit('edit', this.paymentMethods[index]);
		},
		select(index) {
			this.$emit('select', this.paymentMethods[index]);
		},
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';
	@import '../styles/variables';

	.content,
	.paymentInfo {
		display: flex;
		align-items: center;
	}

	.paymentMethod {
		margin-bottom: $spacing-03;
	}

	.content {
		justify-content: space-between;
		padding: 0 $spacing-06 0 $spacing-04;
	}

	.paymentInfo {
		flex-flow: row;
	}

	.icon {
		line-height: 0;
		width: $spacing-08;
		margin-right: $spacing-03;
	}

	.editLink {
		@include text-body-small();
		border-bottom: 1px solid black;
		cursor: pointer;
	}
</style>
