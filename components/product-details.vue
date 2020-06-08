<template>
<div :class="$style.root">
	<div :class="$style.overview">{{ productInfo.overview }}</div>
	<div>
		<div :class="$style.gridWrapper" v-for="(detail, index) in productInfo.details" :key="index">
			<div :class="$style.leftColumn">
				<img :class="$style.icon" :src="detail.iconUrl" alt />
			</div>
			<div :class="$style.rightColumn">
				<div :class="$style.title">{{ detail.title }}</div>
				<div>{{ detail.content }}</div>
			</div>
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

<style module lang='scss'>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.root {
	width: 100%;
}

.overview,
.gridWrapper {
	margin-bottom: $spacing-07;
}

.gridWrapper {
	display: grid;
	grid-template-columns: 1fr 5fr;
	grid-column-gap: $spacing-05;
}

.leftColumn {
	display: flex;
	justify-content: center;
	grid-column-start: 1;
}

.rightColumn {
	grid-column-start: 2;
}

.icon {
	height: $spacing-08;
	width: 100%;
}

.title {
	@include text-heading-6();
	@include text-bolder();
}
</style>
