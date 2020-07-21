import MenuDialogTemplate from '../../../components/menu-dialog-template.vue';

export default {
	title: 'Components / Basic / MenuDialogTemplate',
	component: MenuDialogTemplate,
};

export function Overview() {
	return {
		components: { MenuDialogTemplate },
		template: `
			<div>
				<menu-dialog-template heading="Menu Dialog Template" :menu-items="menuItems" @close="close" />
				<div>Action: {{ action }}</div>
			</div>
		`,

		data() {
			return {
				menuItems: [
					{ label: 'First Action' , action: this.makeOne },
					{ label: 'Second Action', action: this.makeTwo },
					{ label: 'Third Action', action: this.makeThree },
				],
				action: null,
			};
		},

		methods: {
			makeOne() { this.action = 'one' },
			makeTwo() { this.action = 'two' },
			makeThree() { this.action = 'three' },
			close() { this.action = 'closing...'},
		},
	};
}

export function NoHeading() {
	return {
		components: { MenuDialogTemplate },
		template: `
			<div>
				<menu-dialog-template :menu-items="menuItems" @close="close" />
				<div>Action: {{ action }}</div>
			</div>
		`,

		data() {
			return {
				menuItems: [
					{ label: 'First Action' , action: this.makeOne },
					{ label: 'Second Action', action: this.makeTwo },
					{ label: 'Third Action', action: this.makeThree },
				],
				action: null,
			};
		},

		methods: {
			makeOne() { this.action = 'one' },
			makeTwo() { this.action = 'two' },
			makeThree() { this.action = 'three' },
			close() { this.action = 'closing...'},
		},
	};
}

