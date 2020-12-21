import ProgressBar from '../../../components/progress-bar';

export default {
	title: 'Components / Basic / ProgressBar',
	component: ProgressBar,
};

export function Overview() {
	return {
		components: { ProgressBar },
		template: `
			<progress-bar :goal="goal" :current="current"/>
		`,

		data() {
			return {
				goal: 100,
				current: 50,
			};
		},
	};
}
