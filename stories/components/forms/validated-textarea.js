import ValidatedTextarea from '../../../components/validated-textarea';
import { isNotEmpty } from '../../../utilities/validators';

export default {
	title: 'Components / Forms / ValidatedTextarea',
	component: ValidatedTextarea,
};

export function Overview() {
	return {
		components: { ValidatedTextarea },
		template: '<validated-textarea label="Description" v-model="description" :rules="rules" />',
		data() {
			return {
				description: null,
				rules: [{
					validator: isNotEmpty,
					message: 'Description is required.',
				}],
			};
		},
	};
}
