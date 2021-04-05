import ProductCard from '../../../components/product-card';

export default {
	component: ProductCard,
	title: 'Components / Products / ProductCard',
};

const methods = {
	onChange({ product, quantity }) {
		this.quantity = quantity;
		console.log(product); // eslint-disable-line no-console
	},
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { ProductCard },
		template: `
			<product-card
				:product="sampleProduct"
				:quantity="quantity"
				@change="onChange"
				@click="onClick"
			/>
		`,
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					regularPrice: 6.75,
					exclusivePrice: 5.00,
				},
				quantity: 0,
			};
		},
		methods: {
			...methods,
			onClick(product) {
				console.log(`Clicked "${product.name}" product-card`); // eslint-disable-line no-console
			},
		},
	};
}

export function PredefinedQuantityWithLongProductName() {
	return {
		components: { ProductCard },
		template: '<product-card :product="sampleProduct" :quantity="quantity" @change="onChange"/>',
		data() {
			return {
				sampleProduct: {
					name: 'This is a very very very very very very very long product name',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					regularPrice: 6.75,
					exclusivePrice: 5.00,
				},
				quantity: 5,
			};
		},
		methods,
	};
}

export function SamePriceWithLearnMore() {
	return {
		components: { ProductCard },
		template: `
			<product-card
				:product="sampleProduct"
				:quantity="quantity"
				:showLearnMoreButton="true"
				@change="onChange"
			/>
		`,
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					regularPrice: 20.00,
					exclusivePrice: 20.00,
				},
				quantity: 0,
			};
		},
		methods,
	};
}

export function NullVIPPrice() {
	return {
		components: { ProductCard },
		template: `
			<product-card
				:product="sampleProduct"
				:quantity="quantity"
				@change="onChange"
			/>
		`,
		data() {
			return {
				sampleProduct: {
					name: 'Sample Juice Product',
					imageUrl: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/test/bragg-greens.png',
					regularPrice: 20.00,
					exclusivePrice: null,
				},
				quantity: 0,
			};
		},
		methods,
	};
}
