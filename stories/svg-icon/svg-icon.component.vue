<template>
  <div class="svg-icon" v-html="svg"></div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '',
    }
  },
  computed: {
    svg() {
      return require(`~/assets/${this.name}.svg`);
    }
  }
}
</script>

<style lang="scss">
  .svg-icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
