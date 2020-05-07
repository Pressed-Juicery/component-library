import MediaRow from '../components/media-row';

export default {
	component: MediaRow,
	title: 'MediaRow',
};

export function Overview() {
	return {
		components: { MediaRow },
		template: `
      <MediaRow></MediaRow>
		`,
		data() {
			return {
			};
		},
	};
}
