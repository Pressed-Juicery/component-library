<template>
	<div :class="[$style.overlay, {[$style.isActive]: active}]" @click.self="$emit('close')">
		<div :class="$style.sidebar">
			<div :class="[$style.sidebarNavigation, {[$style.noBackButton] : !shouldShowBackButton}]">

				<svg v-if="shouldShowBackButton" :class="$style.backButton" @click="$emit('back')"
				version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g id="Web-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Web---Pressed-Points" transform="translate(-850.000000, -50.000000)" stroke="#000000">
							<g id="back-button" transform="translate(850.000000, 50.000000)">
								<circle id="Oval" stroke-width="1.5" cx="11.5" cy="11.5" r="10.75"></circle>
								<g id="Group" stroke-width="1" fill-rule="evenodd"
								transform="translate(8.000000, 6.000000)"
								stroke-linecap="round" stroke-linejoin="round">
									<line x1="-1.08357767e-13"
									y1="5.07467221"
									x2="5.07467221"
									y2="0" id="Path" stroke-width="2"></line>
									<line x1="0.00172051948"
									y1="5.07725299"
									x2="5.07639273"
									y2="10.1519252" id="Path" stroke-width="2"></line>
								</g>
							</g>
						</g>
					</g>
				</svg>

				<svg :class="$style.closeButton" @click="$emit('close')"
				version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g id="Web-"
					stroke="none"
					stroke-width="1"
					fill-rule="evenodd"
					stroke-linecap="round"
					stroke-linejoin="round">
						<g id="Web---Pressed-Points"
						transform="translate(-1206.000000, -55.000000)"
						stroke="#000000" stroke-width="2">
							<g id="Group-7" transform="translate(1206.000000, 56.000000)">
								<line x1="0.998494545"
								y1="9.55740364" x2="9.43883273" y2="0.557403636" id="Path"></line>
								<line x1="0.998494545"
								y1="0.557403636" x2="9.44033818" y2="9.44033818" id="Path"></line>
							</g>
						</g>
					</g>
				</svg>

			</div>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		active: Boolean,
		shouldShowBackButton: Boolean,
	},
};
</script>

<style module lang="scss">
	@import '../styles/mixins';

	$black: $gray-100;

	.overlay {
		position: fixed;
		height: 100vh;
		width: 100%;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.25);
		opacity: 0;
		pointer-events: none;
		transition: .5s ease opacity;
	}

	.overlay.isActive {
		opacity: 0.55;
		pointer-events: all;
	}

	.sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		width: 350px;
		background-color: $beige;
		padding: $spacing-09 $spacing-07;
		transform: translate(100%);
		transition: .5s ease transform;
	}

	.overlay.isActive .sidebar {
		transform: translate(0%);
	}

	.sidebarNavigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sidebarNavigation.noBackButton {
		justify-content: flex-end;
	}

	.backButton, .closeButton {
		cursor: pointer;
	}

	.backButton {
		fill: $black;
		width: 23px;
		height: 23px;
	}

	.closeButton {
		fill: $black;
		width: 11px;
		height: 12px;
	}

</style>
