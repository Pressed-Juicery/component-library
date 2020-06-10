<template>
<div>
	<div :class='$style.overview'>{{ productInfo.overview }}</div>
	<div :class='$style.wrapper'>
		<template  v-for='(detail, index) in productInfo.details'>
			<div :key='index + 1 * Math.random() * 10'>
				<img :class='$style.icon' :src='detail.iconUrl' alt />
			</div>
			<div :key='index + 1 * Math.random() * 10'>
				<div :class='$style.title'>{{ detail.title }}</div>
				<div>{{ detail.content }}</div>
			</div>
		</template>
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

<style module lang='scss'>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.overview {
	margin-bottom: $spacing-07;
}

.wrapper {
	display: grid;
	grid-template-columns: $spacing-10 1fr;
	grid-column-gap: $spacing-05;
	grid-row-gap: $spacing-07;
}

.wrapper > div:nth-child(odd) {
	display: flex;
	justify-content: center;
}

.icon {
	height: $spacing-08;
}

.title {
	@include text-bolder();
	margin-bottom: $spacing-02;
}
</style>
