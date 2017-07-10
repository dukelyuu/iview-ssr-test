<template>
  <div class="test-case">
    <div class="test-case-title">
      {{ title }}
    </div>
    <div class="test-case-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="less">
.test-case {
  &-title {

  }
}
</style>
