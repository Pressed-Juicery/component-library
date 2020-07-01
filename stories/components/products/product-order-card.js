import ProductOrderCard from '../../../components/product-order-card';

export default {
	component: ProductOrderCard,
	title: 'Components / Products / Product Order Card',
};

const mixins = {
	methods: {
		updateQuantity(mutation) {
			if (mutation === 'increment') {
				this.quantity++;
			} else if (mutation === 'decrement') {
				this.quantity--;
			}
		},
	},
};

const products = [

	// Default
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: null,
		memberPrice: 5.00,
		memberDiscountPrice: null,
	},

	// No Discounts, Prices are the same
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 20.00,
		nonMemberDiscountPrice: null,
		memberPrice: 20.00,
		memberDiscountPrice: null,
	},

	// Non-member discount
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: 6.00,
		memberPrice: 5.00,
		memberDiscountPrice: null,
	},

	// Non-member discount, Prices are the same
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: 5.00,
		memberPrice: 5.00,
		memberDiscountPrice: null,
	},

	// Non-member discount, member discount
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: 5.00,
		memberPrice: 5.00,
		memberDiscountPrice: 4.00,
	},

	// Non-member discount, member discount, Prices are the same
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: 4.00,
		memberPrice: 5.00,
		memberDiscountPrice: 4.00,
	},

	// Member Discount
	{
		title: 'Sample Juice Product',
		imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
		nonMemberPrice: 6.75,
		nonMemberDiscountPrice: null,
		memberPrice: 5.00,
		memberDiscountPrice: 4.00,
	},
];

export function Overview() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[0],
				quantity: 0,
			};
		},
	};
}

export function NoDiscountsSamePrice() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[1],
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscount() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[2],
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountSamePrice() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[3], // eslint-disable-line no-magic-numbers
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountAndMemberDiscount() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[4], // eslint-disable-line no-magic-numbers
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountAndMemberDiscountSamePrice() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[5], // eslint-disable-line no-magic-numbers
				quantity: 0,
			};
		},
	};
}

export function MemberDiscount() {
	return {
		components: { ProductOrderCard },
		mixins: [mixins],
		template: '<product-order-card :product="sampleProduct" :quantity="quantity" @updateQuantity="updateQuantity"/>', // eslint-disable-line
		data() {
			return {
				sampleProduct: products[6], // eslint-disable-line no-magic-numbers
				quantity: 0,
			};
		},
	};
}
