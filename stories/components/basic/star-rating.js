import StarRating from '../../../components/star-rating';

export default {
	title: 'Components / Basic / StarRating',
	component: StarRating,
};

export function Overview() {
	return {
		components: { StarRating },
		template: '<star-rating :rating="rating" :isDisabled="isDisabled" @change="value => rating = value"/>',
		data() {
			return {
				rating: 3,
				isDisabled: false,
			};
		},
	};
}

export function Readonly() {
	return {
		components: { StarRating },
		template: '<star-rating :rating="4.25" :isDisabled="true"/>',
	};
}
