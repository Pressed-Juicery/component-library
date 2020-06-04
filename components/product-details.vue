<template>
	<div :class="$style.root">
		<div>{{ details.overview }}</div>
		<div>
			<div :class="$style.gridWrapper" v-for="(detail, index) in details.details" :key="index">
				<div :class="$style.icon">{{ detail.icon }}</div>
				<div :class="$style.detail">
					<div>{{ detail.title }}</div>
					<div>{{ detail.content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			details: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style module lang="scss">
@import "../styles/variables.scss";

.root {
	width: 100%;
}

.gridWrapper {
	padding-top: $spacing-06;
	display: grid;
	grid-template-columns: 1fr 5fr;
}

.icon {
	// Eventually an icon will live here.
	grid-column-start: 1;
}

.detail {
	grid-column-start: 2;
}

</style>
