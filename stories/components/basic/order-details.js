import OrderDetails from '../../../components/order-details';

export default {
	component: OrderDetails,
	title: 'Components / Basic / OrderDetails',
};

const orderDetails = {
	id: '2055993131051',
	orderNumber: '#2530',
	totalPrice: 39.23,
	subtotal: 34.5,
	discountCoupons: [],
	paymentMethod: 'MEMBERSHIP',
	fulfillmentStatus: 'unfulfilled',
	fulfillmentPrice: 4.73,
	streetAddress: '8714 Santa Monica Boulevard',
	extendedAddress: '',
	locality: 'West Hollywood',
	region: 'CA',
	postal: '90069',
	country: 'US',
	phone: '5593468920',
	deliveryInstructions: null,
	createdAt: '2020-04-10T19:39:00.000Z',
	updatedAt: '2020-04-10T19:39:11.000Z',
	properties: [
		{
			name: 'shop-id',
			value: '78add406-d2ae-4137-afbd-4913a8f2dee4',
		},
		{
			name: 'pickup-time',
			value: '2020-04-11T17:00:51.725Z',
		},
		{
			name: 'shop-name',
			value: 'Century City',
		},
	],
	items: [
		{
			name: 'Cleanse 1 ',
			quantity: 1,
			price: 34.5,
		},
		{
			name: 'Cleanse 3 ',
			quantity: 1,
			price: 34.5,
		},
	],
};

export function Overview() {
	return {
		components: { OrderDetails },
		template: `
			<order-details :orderDetails="orderDetails" />
		`,
		data() {
			return {
				orderDetails,
			};
		},
		created() {
			if (orderDetails.discountCoupons.length) {
				orderDetails.discountCoupons = [];
			}
		},
	};
}

export function WithDiscounts() {
	return {
		components: { OrderDetails },
		template: `
			<order-details :orderDetails="orderDetails" />
		`,
		data() {
			return {
				orderDetails,
			};
		},
		created() {
			const discounts = [{
				type: 'fixed_amount',
				amount: 30,
				code: 'BA100-F5NPRJ',
			}, {
				type: 'fixed_amount',
				amount: 10,
				code: 'BA100-F5NPRJ',
			}];

			orderDetails.discountCoupons = discounts;
		},
	};
}
