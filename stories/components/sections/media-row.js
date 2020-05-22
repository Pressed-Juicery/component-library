import './media-row.scss';
import MediaRow from '../../../components/media-row';
import { mediaRowData } from '../../../demo-data/media-row.data';

export default {
	component: MediaRow,
	title: 'Sections / MediaRow',
};

export function Overview() {
	return {
		components: { MediaRow },
		template: `
			<MediaRow
				class="media-row-overview"
				:img="img"
				:alt="alt"
				:title="title"
				:icon="icon"
				:description="description"
			/>
		`,
		data: () => mediaRowData,
	};
}
