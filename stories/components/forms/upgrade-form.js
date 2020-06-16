import UpgradeForm from '../../../components';

export default {
	title: 'Components / Forms / UpgradeForm',
	component: UpgradeForm,
};

export function Overview() {
	return {
		components: { UpgradeForm },
		template: '<upgrade-form />',
	};
}
