import QrCode from '../../../components/qr-code';

export default {
	title: 'Components / Basic / QrCode',
	component: QrCode,
};

export function Overview() {
	return {
		components: { QrCode },
		template: '<qr-code code="1234567890" />',
	};
}
