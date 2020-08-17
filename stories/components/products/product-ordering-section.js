import ProductOrderingSection from '../../../components/product-ordering-section';

export default {
	title: 'Components / Products / ProductOrderingSection',
	component: ProductOrderingSection,
};

export function Overview() { // eslint-disable-line max-lines-per-function
	return {
		components: { ProductOrderingSection },
		template: `
			<product-ordering-section
				:isVip="isVip"
				:options="options"
				:selected-variant="selectedVariant"
				@variant-change="variant => this.selectedVariant = variant"
			/>
		`,
		data() { // eslint-disable-line max-lines-per-function
			return {
				isVip: false,
				selectedVariant: null,
				options: [{
					name: 'Matcha Frozen Mini - Single',
					value: {
						name: 'Matcha Frozen Mini - Single',
						nonMemberPrice: 5,
						memberPrice: 4.5,
						nonMemberSalePrice: null,
						memberSalePrice: null,
						shortDescription: `
							At only 190 calories per cup, this frozen dessert is made from simple ingredients like
							coconut cream, almonds, and matcha with no refined sugars, this decadent treat is a
							plant-based delight and the perfect portion size for an after-dinner treat.
							(Some say better than ice cream!)
						`,
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Frozenmini_front_matcha_1440x1440_c08848fa-50f4-4d8d-9370-9c851c0100b2.png?v=1597174401',
						ingredients: [],
						nutritionSummary: { calories: 200 },
					},
				}, {
					name: 'Matcha Frozen Mini - 6 Count',
					value: {
						name: 'Matcha Frozen Mini - 6 Count',
						nonMemberPrice: 30,
						memberPrice: 25,
						nonMemberSalePrice: null,
						memberSalePrice: null,
						shortDescription: `
							At only 190 calories per cup, this frozen dessert is made from simple ingredients like
							coconut cream, almonds, and matcha with no refined sugars, this decadent treat is a
							plant-based delight and the perfect portion size for an after-dinner treat.
							(Some say better than ice cream!)
						`,
						imageUrl: 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/Frozenmini_6pack__front_matcha_1440x1440_3f4cb9ab-348e-4429-886c-0037ee29de53.png?v=1597168136',
						ingredients: [],
						nutritionSummary: { calories: 200 },
					},
				}],
			};
		},
		created() {
			this.selectedVariant = this.options[0].value;
		},
	};
}

export function SaleItems() { // eslint-disable-line max-lines-per-function
	return {
		components: { ProductOrderingSection },
		template: `<product-ordering-section
						:isVip="isVip"
						:options="options"
						:current="current"
						@selected="doSomething"
					><a href="/">Learn More</a></product-ordering-section>`,
		data() { // eslint-disable-line max-lines-per-function
			return {
				isVip: true,
				current: null,
				options: [
					{
						name: 'Celery Juice - Single',
						value: {
							name: 'Celery Juice - Single',
							nonMemberPrice: 6.5,
							memberPrice: 5,
							nonMemberSalePrice: 6.0,
							memberSalePrice: 4.5,
							shortDescription: `Try our natural
								celery juice as an alternative to a
								morning coffee. It packed with 15
								vitamins & minerals and helps flush
								out toxins, lower blood pressure.`,
							imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/Celery.png?v=1563907503',
							ingredients: [],
							nutritionSummary: null,
						},
					},
					{
						name: 'Celery Juice - 6 Pack',
						value: {
							name: 'Celery Juice - Single',
							nonMemberPrice: 30,
							memberPrice: 20,
							nonMemberSalePrice: 25,
							memberSalePrice: 15,
							shortDescription: `Try our natural
								celery juice as an alternative to a
								morning coffee. It packed with 15
								vitamins & minerals and helps flush
								out toxins, lower blood pressure.`,
							imageUrl: 'https://cdn.shopify.com/s/files/1/0022/5601/1299/products/Celery.png?v=1563907503',
							ingredients: [],
							nutritionSummary: null,
						},
					},
				],
			};
		},
		methods: {
			doSomething(value) {
				this.current = value;
			},
		},
		created() {
			this.current = this.options[0].value;
		},
	};
}
