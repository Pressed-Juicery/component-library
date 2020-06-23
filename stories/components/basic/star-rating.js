import StarRating from '../../../components/star-rating';

export default {
	title: 'Components / Basic / StarRating',
	component: StarRating,
};

export function Overview() {
	return {
		components: { StarRating },
		template: '<star-rating :rating="rating" :disabled="disabled"/>',
		data() {
			return {
				rating: 3,
				disabled: false,
			};
		},
	};
}
