import ProductCard from '../components/product-card';

export default {
	title: 'ProductCard',
	component: ProductCard,
};

export function Overview() {
	return {
		components: { ProductCard },
    template: `
      <div>
        <product-card />
      </div>
		`,
	};
}
