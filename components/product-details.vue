<template>
	<div>
		<div v-if="productDescription && productDescription.overview"
			:class="$style.overview">
			{{ productDescription.overview }}
		</div>
		<div v-if="showDetails">
			<div :class="$style.row" v-for="(detail, index) in productDescription.details" :key="index">
				<div :class="$style.iconWrapper">
					<img :class="$style.icon" :src="detail.iconUrl" alt />
				</div>
				<div>
					<div :class="$style.title">{{ detail.title }}</div>
					<div>{{ detail.description }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		productDescription: {
			type: Object,
			required: true,
		},
	},
	computed: {
		showDetails() {
			return this.productDescription
				&& this.productDescription.details
				&& this.productDescription.details.length === 3; // eslint-disable-line no-magic-numbers
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
		max-width: $spacing-08;
	}

	.title {
		@include text-bolder();
		margin-bottom: $spacing-02;
	}
</style>
