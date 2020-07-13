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

			<validated-star-rating
				type="text"
				label="Rating"
				v-model="rating"
				:rules="descriptionRules"
			/>

			<button type="submit">save</button>

			</validated-form>
		`,
		data() {
			return {
				rating: 0,
				descriptionRules: [{
					validator: isTruthy,
					message: 'Please enter a rating.',
				}],
			};
		},
	};
}
