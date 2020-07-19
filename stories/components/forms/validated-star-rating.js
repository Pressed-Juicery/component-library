import ValidatedForm from '../../../components/validated-form';
import ValidatedStarRating from '../../../components/validated-star-rating';
import { isTruthy } from '../../../utilities/validators';

export default {
	title: 'Components / Forms / ValidatedStarRating',
	component: ValidatedStarRating,
};

export function Overview() {
	return {
		components: { ValidatedStarRating, ValidatedForm },
		template: `
			<validated-form>
				<validated-star-rating label="Rating" v-model="rating" :rules="starRules" />
				<button type="submit">Save</button>
			</validated-form>
		`,
		data() {
			return {
				rating: 0,
				starRules: [{
					validator: isTruthy,
					message: 'Please enter a rating.',
				}],
			};
		},
	};
}
