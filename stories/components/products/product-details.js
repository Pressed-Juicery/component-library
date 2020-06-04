import ProductDetails from '../../../components/product-details.vue'

export default {
	title: 'Components / Products / ProductDetails',
	component: ProductDetails,
};

export function Overview() {
	return {
		components: { ProductDetails },
		template: '<product-details :details="details" />',
		data() {
			return {
					details: {
						overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique velit doloremque? Provident, dicta fuga!",
						details: [
							{ 
								icon: "some/icon",
								title: "Lorem ipsum dolor sit amet.",
								content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perspiciatis pariatur ad quaerat explicabo consequuntur sunt officia, quos aliquid molestiae veniam doloribus architecto sit labore?"
							},
							{ 
								icon: "some/icon",
								title: "Lorem ipsum dolor sit amet.",
								content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perspiciatis pariatur ad quaerat explicabo consequuntur sunt officia, quos aliquid molestiae veniam doloribus architecto sit labore?"
							},
							{ 
								icon: "some/icon",
								title: "Lorem ipsum dolor sit amet.",
								content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perspiciatis pariatur ad quaerat explicabo consequuntur sunt officia, quos aliquid molestiae veniam doloribus architecto sit labore?"
							},
						]
					}
				}
			}
	}
}
