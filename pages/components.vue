<template>
  <div class="components">
    <div class="components-sidebar">
      <Menu :active-name="name" @on-select="gotoRoute">
        <Menu-item name="button">
          Button
        </Menu-item>
        <Menu-item name="icon">
          Icon
        </Menu-item>
      </Menu>
    </div>
    <div class="components-container">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'button'
    }
  },
  methods: {
    gotoRoute (name) {
      this.$router.push(name)
    }
  }
}
</script>
<style lang="less">
html {
  height: 100%;
  body {
    height: 100%;
    #__nuxt {
      height: 100%;
      & > div:not(.progress) {
        height: 100%;
      }
    }
  }
}
@border: #dddee1;
.components {
  height: 100%;
  &-sidebar {
    height: 100%;
    border-right: 1px solid @border;
    width: 240px;
    float: left;
    overflow-y: auto;
  }
  &-container {
    margin-left: 250px;
    height: 100%;
    overflow: auto;
  }
}
</style>

