import ValidatedForm from '../components/validated-form';
import ValidatedPaymentMethod from '../components/validated-payment-method';

export default {
	title: 'ValidatedPaymentMethod',
	components: 'ValidatedPaymentMethod',
};

export function Overview() {
	return {
		components: { ValidatedForm, ValidatedPaymentMethod },
		template: `
			<validated-form>
				<validated-payment-method :braintree-tokenization-key="braintreeTokenizationKey"
				                          @change="nonce => result = nonce" />
				
				<button style="margin-top:20px" type="submit">SUBMIT</button>
				
				<p>Result: {{ result }}</p>
			</validated-form>
		`,

		data() { return { braintreeTokenizationKey: 'sandbox_x6kjt36z_3cr8bsrh82p5jrcp', result: null } },
	};
}
