<template>
	<svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path d="m6 5-4 4m4-4-4-4" fill="none" :stroke="color || '#c6c6c6'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(0 1 -1 0 10 -1)"/></svg>
</template>

<script>
export default {
	props: {
		color: String,
	}
}
</script>
