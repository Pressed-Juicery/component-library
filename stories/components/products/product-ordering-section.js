import ProductOrderingSection from '../../../components/product-ordering-section';
import { productData } from '../../../demo-data/product.data';

export default {
	title: 'Components / Products / ProductOrderingSection',
	component: ProductOrderingSection,
};

export function Overview() {
	return {
		components: { ProductOrderingSection },
		template: `
			<product-ordering-section
				:isVip="isVip"
				:product="product"
				:selected-variant="selectedVariant"
				@variant-change="variant => this.selectedVariant = variant"
			>
				<a href="#">Learn More</a>
			</product-ordering-section>
		`,
		data() {
			return {
				isVip: false,
				product: productData,
				selectedVariant: null,
			};
		},
		created() {
			this.selectedVariant = this.product.variants[0];
		},
	};
}

export function WithSaleItems() { // eslint-disable-line max-lines-per-function
	return {
		components: { ProductOrderingSection },
		template: `
			<product-ordering-section
				:isVip="isVip"
				:product="product"
				:selected-variant="selectedVariant"
				@variant-change="variant => this.selectedVariant = variant"
			>
				<a href="#">Learn More</a>
			</product-ordering-section>
		`,
		data() {
			const discountRate = 0.5;
			const product = JSON.parse(JSON.stringify(productData));

			product.variants.forEach(variant => {
				// eslint-disable-next-line no-param-reassign
				variant.memberSalePrice = variant.memberPrice * discountRate;
				// eslint-disable-next-line no-param-reassign
				variant.nonMemberSalePrice = variant.nonMemberPrice * discountRate;
			});

			return {
				isVip: false,
				selectedVariant: null,
				product,
			};
		},
		created() {
			this.selectedVariant = this.product.variants[0];
		},
	};
}

export function VipPricing() {
	return {
		components: { ProductOrderingSection },
		template: `
			<product-ordering-section
				:isVip="isVip"
				:product="product"
				:selected-variant="selectedVariant"
				@variant-change="variant => this.selectedVariant = variant"
			>
				<a href="#">Learn More</a>
			</product-ordering-section>
		`,
		data() {
			return {
				isVip: true,
				product: productData,
				selectedVariant: null,
			};
		},
		created() {
			this.selectedVariant = this.product.variants[0];
		},
	};
}
