import ProductReviewForm from '../../../components/product-review-form.vue';

export default {
	title: 'Components / Forms / ProductReviewForm',
	component: ProductReviewForm,
};

export function Overview() {
	return {
		components: { ProductReviewForm },
		template: '<product-review-form />',
	};
}
