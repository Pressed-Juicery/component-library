<template>
	<div class="media-row" :style="{ backgroundColor, color }">
		<div class="media-row__content">
			<div class="media-row__content-wrapper">
				<img class="media-row__icon" :src="icon" />
				<p class="media-row__title" v-html="title"></p>
				<p class="media-row__text">
					<slot />
				</p>
			</div>
		</div>
		<div class="media-row__image" :style="{'background-image': 'url(' + img + ')'}">
			<span role="img" :aria-label="alt"></span>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
