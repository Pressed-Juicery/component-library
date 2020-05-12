import './spacing.scss';

export default {
	title: 'Style Guide / Spacing',
};

// eslint-disable-next-line max-lines-per-function
export function Overview() {
	return {
		template: `
			<table class="spacing-table">
				<thead>
					<tr>
						<th>Variable Name</th>
						<th>Size</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="size in sizes">
						<td>$spacing-{{ size }}</td>
						<td class="spacing-table__size"></td>
						<td><div :class="getBoxClass(size)"></div></td>
					</tr>
				</tbody>
			</table>
		`,
		data() {
			return {
				sizes: ['12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01'],
			};
		},
		methods: {
			getBoxClass(size) {
				return `spacing-table__box spacing-table__box-${size}`;
			},
		},
		mounted() {
			const boxes = this.$el.querySelectorAll('.spacing-table__box');

			boxes.forEach(box => {
				const width = box.offsetWidth;
				const sizeNode = box.closest('tr').querySelector('.spacing-table__size');

				sizeNode.innerText = `${width}px`;
			});
		},
	};
}
