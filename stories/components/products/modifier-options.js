import ModifierOptions from '../../../components/modifier-options';

export default {
	title: 'Components / Products / ModifierOptions',
	component: ModifierOptions,
};

export function Overview() {
	return {
		components: { ModifierOptions },
		template: '<modifier-options />',
	};
}
