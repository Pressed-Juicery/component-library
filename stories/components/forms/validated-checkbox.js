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
