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
				@selected="doSomething"
			/>
		`,
		data() {
			return {
				isVip: false,
				current: null,
				options: [
					{
						name: 'Celery Juice - Single',
						value: {
							name: 'Celery Juice - Single',
							nonMemberPrice: 6.5,
							memberPrice: 5,
							nonMemberSalePrice: null,
							memberSalePrice: null,
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
							nonMemberSalePrice: null,
							memberSalePrice: null,
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
