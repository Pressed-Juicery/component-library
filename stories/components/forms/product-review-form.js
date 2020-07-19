import ProductReviewForm from '../../../components/product-review-form.vue';

export default {
	title: 'Components / Forms / ProductReviewForm',
	component: ProductReviewForm,
};

export function Overview() {
	return {
		components: { ProductReviewForm },
		template: `
			<div>
				<product-review-form id="review-form" />
				<button form="review-form" type="submit">Submit</button>
			</div>
		`,
	};
}
