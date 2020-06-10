<template>
	<div>
		<div :class="$style.overview">{{ productInfo.overview }}</div>
		<div :class="$style.row" v-for="(detail, index) in productInfo.details" :key="index">
			<div :class="$style.iconWrapper">
				<img :class="$style.icon" :src="detail.iconUrl" alt />
			</div>
			<div>
				<div :class="$style.title">{{ detail.title }}</div>
				<div>{{ detail.content }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		productInfo: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables.scss";
	@import "../styles/mixins.scss";

	.overview {
		margin-bottom: $spacing-07;
	}

	.row {
		display: flex;
		margin-bottom: $spacing-07;
	}

	.iconWrapper {
		flex-shrink: 0;
		text-align: center;
		width: $spacing-10;
		margin-right: $spacing-05;
	}

	.icon {
		height: $spacing-08;
	}

	.title {
		@include text-bolder();
		margin-bottom: $spacing-02;
	}
</style>
