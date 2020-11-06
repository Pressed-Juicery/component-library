import ValidatedCheckbox from '../../../components/validated-checkbox';
import ValidatedForm from '../../../components/validated-form';
import { isTruthy } from '../../../utilities/validators';

export default {
	title: 'Components / Forms / ValidatedCheckbox',
	component: ValidatedCheckbox,
};

export function Overview() {
	return {
		components: { ValidatedCheckbox },
		template: `
			<div>
				<validated-checkbox v-model="isChecked" label="Label" />
				<div>isChecked: {{ isChecked }}</div>
			</div>
		`,

		data() {
			return {
				isChecked: true,
			};
		},
	};
}

export function Validation() {
	return {
		components: { ValidatedCheckbox, ValidatedForm },
		template: `
			<validated-form>
				<div>
					<validated-checkbox
						label="Checking this box is required"
						:rules="stateRules"
						v-model="isSelected"
					/>
				</div>

				<button type="submit">Submit</button>
			</validated-form>
		`,

		data() {
			return {
				isSelected: false,
				stateRules: [{
					validator: isTruthy,
					message: 'Item must be selected.',
				}],
			};
		},
	};
}

export function LongLabel() {
	return {
		components: { ValidatedCheckbox, ValidatedForm },
		template: '<validated-checkbox :label="label" v-model="isSelected" />',

		data() {
			return {
				isSelected: false,
				label: `
					You acknowledge and agree that your membership will renew automatically
					each month beginning on the date you register. You will be charged automatically
					every month for your membership. The monthly charge of ten dollars (US $10.00) or greater
					if chosen will be automatically charged to the debit or credit card provided
					on the same date every month until you cancel your membership.
					To cancel your membership. go to the MY ACCOUNT section of our website
					or you can also email us at info@pressedjuicery.com or call us toll-free
					at 888.44.JUICE (888.445.8423).
				`,
			};
		},
	};
}
