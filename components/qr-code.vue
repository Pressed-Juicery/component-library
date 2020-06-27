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
					light: '#0000', // transparent background
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
