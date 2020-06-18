<template>
	<div>
		<div :class="$style.sectionTitle">Cleanse Guide</div>

		<div :class="$style.cleanse" v-for="(cleanse, index) in cleanseGuide" :key="index">

			<div :class="$style.title">{{ cleanse.timeOfDay }} | {{ cleanse.juice }}</div>
			<div :class="$style.content">{{ cleanse.description }}</div>
			<a :class="$style.learnMore" :href="cleanse.learnMoreUrl">Learn More</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cleanseGuide: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style module lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.sectionTitle {
	margin-bottom: $spacing-07;
}

.cleanse {
	margin-bottom: $spacing-06;
}

.title {
	@include text-cta-small();
	margin-bottom: $spacing-03;
}

.content {
	margin-bottom: $spacing-02;
}

.learnMore {
	border-bottom: 1px solid black;
}

.sectionTitle,
.learnMore {
	@include text-body-small();
}
</style>
