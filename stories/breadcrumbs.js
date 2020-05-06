import Breadcrumbs from '../components/breadcrumbs';

export default {
	title: 'Breadcrumbs',
	component: Breadcrumbs,
};

export function Overview() {
	return {
		components: { Breadcrumbs },
		template: `
			<div>
				<breadcrumbs :breadcrumbs="breadcrumbs" @select="breadcrumb => selectedBreadcrumb = breadcrumb" />
				<p v-if="selectedBreadcrumb">Selected breadcrumb: {{ selectedBreadcrumb.name }}</p>
			</div>
		`,

		data() {
			return {
				breadcrumbs: [{
					name: 'Back To Shop',
				},
				{
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

export function OneBreadcrumb() {
	return {
		components: { Breadcrumbs },
		template: `
			<div>
				<breadcrumbs :breadcrumbs="breadcrumbs" @select="breadcrumb => selectedBreadcrumb = breadcrumb" />
				<p v-if="selectedBreadcrumb">Selected breadcrumb: {{ selectedBreadcrumb.name }}</p>
			</div>
		`,

		data() {
			return {
				breadcrumbs: [{
					name: 'Back To Shop',
				}],
				selectedBreadcrumb: null,
			};
		},
	};
}
