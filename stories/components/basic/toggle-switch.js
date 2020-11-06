import ToggleSwitch from '../../../components/toggle-switch';

export default {
	title: 'Components / Basic / ToggleSwitch',
	component: ToggleSwitch,
};

export function Overview() {
	return {
		components: { ToggleSwitch },
		template: '<toggle-switch :isOn="isOn" @toggle="isOn = !isOn" />',
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
		template: `
			<div>
				<toggle-switch style="margin-bottom: 16px" :isOn="true" :isDisabled="true" />
				<toggle-switch :isOn="false" :isDisabled="true" />
			</div>
		`,
	};
}
