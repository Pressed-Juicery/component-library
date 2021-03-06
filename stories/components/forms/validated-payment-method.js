import ValidatedForm from '../../../components/validated-form';
import ValidatedPaymentMethod from '../../../components/validated-payment-method';
import { config } from '../../../config';

export default {
	title: 'Components / Forms / ValidatedPaymentMethod',
	component: ValidatedPaymentMethod,
};

export function Overview() {
	return {
		components: { ValidatedPaymentMethod },
		template: `
			<validated-payment-method
				:braintree-tokenization-key="braintreeTokenizationKey"
				:show-save-checkbox="true"
			/>
		`,

		data() { return { braintreeTokenizationKey: config.braintreeTokenizationKey } },
	};
}

export function InValidatedForm() {
	return {
		components: { ValidatedForm, ValidatedPaymentMethod },
		template: `
			<validated-form>
				<validated-payment-method
					:braintree-tokenization-key="braintreeTokenizationKey"
					:show-save-checkbox="true"
					@change="paymentMethod => result = paymentMethod"
				/>

				<button type="submit">Submit</button>

				<p>Result: {{ result }}</p>
			</validated-form>
		`,

		data() { return { braintreeTokenizationKey: config.braintreeTokenizationKey, result: null } },
	};
}
