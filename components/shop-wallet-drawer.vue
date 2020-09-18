<template>
	<collapsible-drawer
		:isOpen="isOpen"
		@close="close"
	>
		<template #custom-header>
			<pressed-points-circle :class="$style.logo"/>
		</template>

	</collapsible-drawer>
</template>

<script>
import CollapsibleDrawer from './collapsible-drawer';
import PressedPointsCircle from './icons/pressed-points-circle';

export default {
	components: {
		CollapsibleDrawer,
		PressedPointsCircle,
	},

}
</script>

<style>
<style module lang="scss">
	@import "../styles/mixins";
	.logo {
		position: relative;
		display: block;
		top: (-$logoOffset);
		height: 66px;
		width: 66px;
		margin: 0 auto (-$logoOffset + $spacing-05);
		opacity: 0;
		transition: opacity .5s ease;
	}

</style>
