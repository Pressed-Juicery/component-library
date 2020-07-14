import ValidatedTextarea from '../../../components/validated-textarea';
import { isNotEmpty } from '../../../utilities/validators';

export default {
	title: 'Components / Forms / ValidatedTextarea',
	component: ValidatedTextarea,
};

export function Overview() {
	return {
		components: { ValidatedTextarea },
		template: `
			<validated-textarea
				type="text"
				label="Description"
				v-model="description"
				:rules="descriptionRules"
			/>
		`,
		data() {
			return {
				description: null,
				descriptionRules: [{
					validator: isNotEmpty,
					message: 'Description is required.',
				}],
			};
		},
	};
}
