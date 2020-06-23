import GuestInformationForm from '../../../components/guest-information-form';

export default {
	title: 'Components / Forms / GuestInformationForm',
	component: GuestInformationForm,
};

export function Overview() {
	return {
		components: { GuestInformationForm },
		template: `
			<div>
				<guest-information-form buttonText="Submit" @add-guest="data => guest = data" />
				<div v-if="guest">Guest: {{ guest }}</div>
			</div>
		`,

		data() { return { guest: null } },
	};
}

export function PrePopulated() {
	return {
		components: { GuestInformationForm },
		template: `
			<div>
				<guest-information-form buttonText="Submit" :guest="guest" @add-guest="data => guest = data" />
				<div v-if="guest">Guest: {{ guest }}</div>
			</div>
		`,

		data() { return { guest: { name: 'Test Guest', phone: '1231231234', email: 'testguest@example.com' } } },
	};
}
