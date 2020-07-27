import ConfirmationDialogTemplate from '../../../components/confirmation-dialog-template';

export default {
	title: 'Components / Basic / ConfirmationDialogTemplate',
	component: ConfirmationDialogTemplate,
};

export function Overview() {
	return {
		components: { ConfirmationDialogTemplate },
		template: `
			<confirmation-dialog-template
				title="Confirmation Dialog Template"
				cancel-button-text="Disagree"
				confirm-button-text="Agree"
				@cancel="() => {}"
				@confirm="() => {}"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. <a style="text-decoration: underline;" href="#">Click Here</a>
			</confirmation-dialog-template>
		`,
	};
}
