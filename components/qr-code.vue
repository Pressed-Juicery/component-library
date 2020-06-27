<template>
	<div> <!-- This wrapper protects the `img` from styles that may affect the aspect ratio -->
		<img :class="$style.qrCode" :src="src" alt="qr code" />
	</div>
</template>

<script>
import QRCode from 'qrcode';

export default {
	props: {
		code: {
			type: String,
			required: true,
		},
		background: {
			type: String,
			default: '#fff',
		},
	},

	data() {
		return {
			src: null,
		};
	},

	created() {
		this.generateQR(this.code);
	},

	methods: {
		async generateQR(text) {
			this.src = await QRCode.toDataURL(text, {
				type: 'image/png',
				scale: 32,
				margin: 0,
				color: {
					dark: '#000',
					light: this.background,
				},
			});
		},
	},
};
</script>

<style module lang="scss">
	.qrCode {
		width: 100%;
		height: auto;
	}
</style>
