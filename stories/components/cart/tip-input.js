import TipInput from '../../../components/tip-input.vue';

export default {
	title: 'Components / Cart / TipInput',
	component: TipInput,
};

export function Overview() {
	return {
		components: { TipInput },
		template: `
			<div>
				<tip-input :subtotal="subtotal" @change="handleChange">
					<div style="font-weight: bolder">Tip Your Associate</div>
				</tip-input>
				Sample showing the current tip value: {{ tip }}
			</div>
		`,
		data() {
			return {
				subtotal: 27.00,
				tip: null,
			};
		},
		methods: {
			handleChange(value) {
				this.tip = value;
			},
		},
	};
}
