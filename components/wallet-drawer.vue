<template>
	<div>

	</div>
</template>

<script>
import QrCode from './qr-code';

export default {
	components: { QrCode },

	props: {
		wallet: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style module lang="scss">

</style>
