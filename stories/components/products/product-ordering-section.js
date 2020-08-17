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
				:current="current"
				@variant-change="doSomething"
			/>
		`,
		data() {
			return {
				isVip: false,
				current: null,
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
						nutritionSummary: null,
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
						nutritionSummary: null,
					},
				}],
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
