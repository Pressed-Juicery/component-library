import ProductCard from '../../../components/product-card';

export default {
	component: ProductCard,
	title: 'Components / Products / ProductCard',
};

const methods = {
	change(productQuantity) {
		// eslint-disable-next-line no-console
		console.log(`captured "change" event: ${productQuantity.quantity} x ${productQuantity.product.name}`);
	},
};

export function Overview() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: null,
					memberPrice: 5.00,
					memberDiscountPrice: null,
				},
				quantity: 0,
			};
		},
	};
}

export function PredefinedQuantity() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: null,
					memberPrice: 5.00,
					memberDiscountPrice: null,
				},
				quantity: 5,
			};
		},
	};
}

export function NoDiscountsSamePrice() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 20.00,
					nonMemberDiscountPrice: null,
					memberPrice: 20.00,
					memberDiscountPrice: null,
				},
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscount() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: 6.00,
					memberPrice: 5.00,
					memberDiscountPrice: null,
				},
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountSamePrice() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: 5.00,
					memberPrice: 5.00,
					memberDiscountPrice: null,
				},
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountAndMemberDiscount() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: 5.00,
					memberPrice: 5.00,
					memberDiscountPrice: 4.00,
				},
				quantity: 0,
			};
		},
	};
}

export function NonMemberDiscountAndMemberDiscountSamePrice() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: 4.00,
					memberPrice: 5.00,
					memberDiscountPrice: 4.00,
				},
				quantity: 0,
			};
		},
	};
}

export function MemberDiscount() {
	return {
		components: { ProductCard },
		methods,
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="change"/>',
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					nonMemberPrice: 6.75,
					nonMemberDiscountPrice: null,
					memberPrice: 5.00,
					memberDiscountPrice: 4.00,
				},
				quantity: 0,
			};
		},
	};
}
