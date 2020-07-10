import ProductReviewForm from '../../../components/product-review-form.vue';

export default {
	title: 'Components / Products / ProductReviewForm',
	component: ProductReviewForm,
};

export function Overview() {
	return {
		components: { ProductReviewForm },
		template: '<product-review-form />',
	};
}
