import UpgradeForm from '../../../components/upgrade-form';

export default {
	title: 'Components / Forms / UpgradeForm',
	component: UpgradeForm,
};

export function Overview() {
	return {
		components: { UpgradeForm },
		template: `
			<div>
				<upgrade-form :selectedAmount="selectedAmount" :reloadAmounts="reloadAmounts" @change="handlePaymentMethodChange">
					<button type="submit">submit</button>
				</upgrade-form>
				<p>data:
				<code>{{ data }}</code>
				</p>
			</div>
		`,
		data() {
			return {
				selectedAmount: null,
				data: null,
			};
		},
		methods: {
			handlePaymentMethodChange(data) {
				this.data = data;
			}
		},
		computed: {
			reloadAmounts(){
				return Array.from(Array(10), (_, i) => {
					const reloadAmount = (i + 1) * 10;
					return {
						name: reloadAmount,
						value: reloadAmount,
					};
				});
			},
		},
	};
}
