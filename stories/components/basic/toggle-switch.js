import ToggleSwitch from '../../../components/toggle-switch';

export default {
	title: 'Components / Basic / ToggleSwitch',
	component: ToggleSwitch,
};

export function Overview() {
	return {
		components: { ToggleSwitch },
		template: '<toggle-switch :isOn="isOn" @change="handleToggle"/>',
		data() {
			return {
				isOn: false,
			};
		},
		methods: {
			handleToggle() {
				this.isOn = !this.isOn;
				console.log('Toggled'); // eslint-disable-line no-console
			},
		},
	};
}

export function Disabled() {
	return {
		components: { ToggleSwitch },
		template: '<toggle-switch :isOn="isOn" @change="handleToggle" :isDisabled="isDisabled"/>',
		data() {
			return {
				isOn: false,
				isDisabled: true,
			};
		},
		methods: {
			handleToggle() {
				this.isOn = !this.isOn;
				console.log('Toggled'); // eslint-disable-line no-console
			},
		},
	};
}
