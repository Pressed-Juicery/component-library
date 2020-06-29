<template>
	<div :class="[$style.root, {[$style.isOpen]: isOpen}]">
		<div :class="$style.overlay" @click="close"></div>

		<div :class="$style.drawer">
			<div :class="$style.drawerHeader" @click="close">
				<div>{{ title }}</div>
				<ArrowDown :class="$style.icon" />
			</div>

			<div :class="$style.drawerContent">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
import ArrowDown from './icons/arrow-down-icon';
import { preventBodyScrolling } from '../utilities/prevent-body-scrolling';

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
			require: true,
		},
	},
	components: { ArrowDown },
	methods: {
		close() {
			this.$emit('close');
		},

	},
	created() {
		preventBodyScrolling(this.isOpen);
	},
	watch: {
		isOpen() {
			preventBodyScrolling(this.isOpen);
		},
	},
};
</script>

<style module lang="scss">
	@import "../styles/variables";
	@import "../styles/mixins";

	.root,
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.overlay {
		z-index: 1;
		background-color: $gray-90;
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.isOpen .overlay {
		opacity: 0.2;
		pointer-events: auto;
	}

	.drawer {
		position: absolute;
		display: flex;
		justify-content: center;
		flex-flow: column;
		bottom: 0;
		left: 0;
		width: 100%;
		transform: translateY(110%);
		transition: .5s ease transform;
		background-color: $white;
		border-radius: $spacing-05 $spacing-05 0 0;
		box-shadow: 0 1px 15px -8px rgba(0, 0, 0, 0.5);
	}

	.isOpen .drawer {
		transform: translateY(0%);
	}

	.drawerHeader {
		cursor: pointer;
		padding: $spacing-06 $spacing-07;
		display: grid;
		grid-template-columns: 1fr $spacing-04;
		grid-column-gap: $spacing-06;
		align-items: center;
		box-shadow: 0 7px 10px -8px rgba(226, 226, 226, 0.5);
		@include text-cta();
	}

	.drawer {
		z-index: 1;
	}

	.icon {
		width: $spacing-04;
	}

	.drawerContent {
		padding: $spacing-05 $spacing-07 $spacing-07 $spacing-07;
	}
</style>
