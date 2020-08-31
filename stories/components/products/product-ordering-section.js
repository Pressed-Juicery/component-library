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

export function WithAddons() { // eslint-disable-line max-lines-per-function
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
				selectedVariant: null,
				product: JSON.parse(JSON.stringify(productData)),
			};
		},
		created() {
			this.selectedVariant = this.product.variants[0];
			this.product.addonGroup = {
				name: 'Enhance your cleanse',
				addons: [{
					name: 'Addon 1',
					variantIds: ['1', '2', '3'],
					price: 5.00,
					displayPrice: '$5.00/day',
				}, {
					name: 'Addon 2',
					variantIds: ['1', '2', '3'],
					price: 5.00,
					displayPrice: '$5.00/day',
				}, {
					name: 'Addon 3',
					variantIds: ['1', '2', '3'],
					price: 5.00,
					displayPrice: '$5.00/day',
				}],
			};
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
export function WithModifiers() { // eslint-disable-line max-lines-per-function
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
				product: JSON.parse(JSON.stringify(productData)),
				selectedVariant: null,
			};
		},
		created() { // eslint-disable-line max-lines-per-function
			this.product.toppingModifiers = {
				groupName: 'toppings',
				maximumCount: 3,
				modifierGroups: [{
					name: 'TOPPINGS',
					modifiers: [{
						name: 'Chocolate Chips',
						description: 'Vegan, Gluten Free, Non-GMO',
					},
					{
						name: 'Chocolate Chip Cookie Crumble',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Dark Chocolate Crispy Quinoa Gems',
						description: 'Vegan, Gluten Free, Non-GMO',
					},
					{
						name: 'Granola',
						description: 'Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Vegan Gummy Bears',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Marshmallows',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Praline Pecan Pieces',
						description: 'Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Sea Salt',
						description: 'Vegan, Gluten Free, Non-GMO',
					},
					{
						name: 'Shredded Coconut',
						description: 'Vegan, Gluten Free, Kosher',
					},
					{
						name: 'Sliced Almonds',
						description: 'Vegan, Gluten Free, Kosher',
					},
					{
						name: 'Sprinkles',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					}],
				},
				{
					name: 'FRESH FRUITS',
					modifiers: [{
						name: 'Fresh Blueberries',
						description: 'Vegan, Gluten Free',
					},
					{
						name: 'Fresh Strawberries',
						description: 'Vegan, Gluten Free',
					}],
				},
				{
					name: 'SAUCES',
					modifiers: [{
						name: 'Almond Butter',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					},
					{
						name: 'Chocolate Drizzle',
						description: 'Gluten Free, Kosher',
					},
					{
						name: 'Granola Butter',
						description: 'Vegan, Gluten Free',
					},
					{
						name: 'Honey',
						description: 'Gluten Free',
					},
					{
						name: 'Raspberry Puree',
						description: 'Vegan, Gluten Free, Non-GMO, Kosher',
					}],
				}],
			};

			this.selectedVariant = this.product.variants[0];
		},
	};
}
