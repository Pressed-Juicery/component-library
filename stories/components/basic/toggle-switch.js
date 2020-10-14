import ToggleSwitch from '../../../components/toggle-switch';

export default {
	title: 'Components / Basic / ToggleSwitch',
	component: ToggleSwitch,
};

export function Overview() {
	return {
		components: { ToggleSwitch },
		template: '<toggle-switch :isOn="isOn" @change="isOn = !isOn"/>',
		data() {
			return {
				isOn: false,
			};
		},
	};
}

export function Disabled() {
	return {
		components: { ToggleSwitch },
		template: '<toggle-switch :isOn="isOn" @change="isOn = !isOn" :isDisabled="isDisabled"/>',
		data() {
			return {
				isOn: false,
				isDisabled: true,
			};
		},
	};
}
