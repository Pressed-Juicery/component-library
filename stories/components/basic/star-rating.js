import StarRating from '../../../components/star-rating';

export default {
	title: 'Components / Basic / StarRating',
	component: StarRating,
};

export function Overview() {
	return {
		components: { StarRating },
		template: '<star-rating :rating="rating" :is-readonly="false" @change="value => rating = value"/>',
		data() {
			return { rating: 3 };
		},
	};
}

export function Readonly() {
	return {
		components: { StarRating },
		template: '<star-rating :rating="3.68" :is-readonly="true"/>',
	};
}
