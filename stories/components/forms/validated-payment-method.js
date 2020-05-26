import ValidatedForm from '../../../components/validated-form';
import ValidatedPaymentMethod from '../../../components/validated-payment-method';
import { config } from '../../../constants/config';

export default {
	title: 'Components / Forms / ValidatedPaymentMethod',
	component: ValidatedPaymentMethod,
};

export function Overview() {
	return {
		components: { ValidatedPaymentMethod },
		template: '<validated-payment-method :braintree-tokenization-key="braintreeTokenizationKey" />',

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
					@change="nonce => result = nonce"
				/>

				<button type="submit">Submit</button>

				<p>Result: {{ result }}</p>
			</validated-form>
		`,

		data() { return { braintreeTokenizationKey: config.braintreeTokenizationKey, result: null } },
	};
}
