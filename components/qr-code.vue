<template>
	<div>
		<img :class="$style.largeQrCode" v-if="largeQrSrc" :src="largeQrSrc" alt="qr code" />
		<img :class="$style.smallQrCode" v-if="smallQrSrc" :src="smallQrSrc" alt="qr code" />
	</div>
</template>

<script>
import QRCode from "qrcode";

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
			src : null,
			largeQrSrc : null,
			smallQrSrc : null,
		};
	},

	created() {
		this.generateQR(this.code);
	},

	methods: {
		async generateQR(text) {
			const color = {
				dark: "#000",
				light: this.background,
			};

			this.smallQrSrc = await QRCode.toDataURL(text, { color, margin: 0, width: 130, type: 'image/png' });
			this.largeQrSrc = await QRCode.toDataURL(text, { color, margin: 0, width: 167, type: 'image/png' });
		},
	},
}
</script>

<style module lang="scss">
	.largeQrCode {
		display: block;
	}

	.smallQrCode {
		display: none;
	}

	@media (max-width: 420px) {
		.largeQrCode {
			display: none;
			margin-left: auto;
		}

		.smallQrCode {
			display: block;
			margin-left: auto;
		}
	}
</style>
