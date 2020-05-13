import RadioButton from '../../../components/radio-button';

export default {
	title: 'Components / Forms / RadioButton',
	component: RadioButton,
};

export function Overview() {
	return {
		components: { RadioButton },
		data() { return { selectedItem: null } },
		template: '<radio-button :value="0" v-model="selectedItem"/>',
	};
}

export function UsingLabels() {
	return {
		components: { RadioButton },
		data() { return { selectedItem: 0 } },
		template: `
			<div>
				<div>
					<label>
						<radio-button :value="1" v-model="selectedItem"/>
						This <code>label</code> wraps the <code>radio-button</code>.
					</label>
				</div>

				<div>
					<radio-button id="radio-button-2" :value="2" v-model="selectedItem"/>
					<label for="radio-button-2">
						This <code>label</code> uses <code>id</code> and <code>for</code> attributes to
						connect the <code>label</code> to the <code>radio-button</code>.
					</label>
				</div>

				<div>
					<radio-button :value="3" v-model="selectedItem"/>
					<label>This <code>label</code> is not connected to the <code>radio-button</code>.</label>
				</div>
			</div>
		`,
	};
}
