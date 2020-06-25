<template>
	<div>
		<img v-if="src" :src="src" alt="qr code" />
	</div>
</template>

<script>
import QRCode from "qrcode";

export default {
	props : {
		code : String,
	},

	data() {
		return {
			src : null,
		};
	},

	created() {
		this.generateQR(this.code);
	},

	methods : {
		async generateQR(text) {
			this.src = await QRCode.toDataURL(text, { type: 'image/png' });
		},
	},
}
</script>
