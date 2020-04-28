import Breadcrumbs from '../components/breadcrumbs';

export default {
	title: 'Breadcrumbs',
	component: Breadcrumbs,
};

export function Overview() {
	return {
		components: { Breadcrumbs },
		template: `
			<div style="margin:20px">
				<breadcrumbs :breadcrumbs="breadcrumbs" @select="breadcrumb => selectedBreadcrumb = breadcrumb" />
				<p v-if="selectedBreadcrumb">Selected Breadcrumb: {{ selectedBreadcrumb.name }}</p>
			</div>
		`,

		data() {
			return {
				breadcrumbs: [{
					name: 'Fulfillment Method',
				},
				{
					name: 'Payment Method',
				},
				{
					name: 'Review',
				}],
				selectedBreadcrumb: null,
			};
		},
	};
}
