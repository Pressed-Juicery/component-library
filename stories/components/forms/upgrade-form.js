import UpgradeForm from '../../../components/upgrade-form';

export default {
	title: 'Components / Forms / UpgradeForm',
	component: UpgradeForm,
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		components: { UpgradeForm },
		template: `
			<div>
				<upgrade-form
					:selectedAmount="selectedAmount"
					:reloadAmounts="reloadAmounts"
					@change="handlePaymentMethodChange">
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
			},
		},
		computed: {
			reloadAmounts() {
				// eslint-disable-next-line no-magic-numbers
				return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(value => {
					return { name: value, value };
				});
			},
		},
	};
}
