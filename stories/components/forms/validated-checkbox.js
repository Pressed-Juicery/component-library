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
				<validated-checkbox :value="isChecked" v-model="isChecked" />
				<div>isChecked: {{ isChecked }}</div>
			</div>
		`,

		data() {
			return {
				checkboxId: 'checkboxId',
				isChecked: false,
			};
		},
	};
}

// eslint-disable-next-line max-lines-per-function
export function UsingLabels() {
	return {
		components: { ValidatedCheckbox },
		template: `
			<div>
				<div>
					<label>
						<validated-checkbox :value="isChecked1" v-model="isChecked1" />
						This <code>label</code> wraps the <code>checkbox</code>. Checked: <b>{{ isChecked1 }}</b>
					</label>
				</div>

				<div>
					<validated-checkbox :id="checkboxId" :value="isChecked2" v-model="isChecked2" />
					<label :for="checkboxId">
						This <code>label</code> uses <code>id</code> and <code>for</code> attributes to
						connect the <code>label</code> to the <code>checkbox</code>. Checked: <b>{{ isChecked2 }}</b>
					</label>
				</div>

				<div>
					<validated-checkbox :value="isChecked3" v-model="isChecked3" />
					<label>
						This <code>label</code> is not connected to the <code>checkbox</code>.
						Checked: <b>{{ isChecked3 }}</b>
					</label>
				</div>
			</div>
		`,

		data() {
			return {
				checkboxId: 'checkbox-2',
				isChecked1: false,
				isChecked2: false,
				isChecked3: false,
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
					<validated-checkbox :id="checkboxId"
					                    :value="isSelected"
					                    v-model="isSelected"
					                    :rules="stateRules" />
				</div>

				<button type="submit" style="marginTop:20px;">Submit</button>
			</validated-form>
		`,

		data() {
			return {
				checkboxId: 'checkboxWithValidation',
				isSelected: false,
				stateRules: [{
					validator: isTruthy,
					message: 'Item must be selected.',
				}],
			};
		},
	};
}
