<template>
  <div>
    <Button type="primary" @click="printInfo">Primary Button</Button>
    <Button type="primary" @click="changeToLoading" :loading="loading">Click to loading</Button>
  </div>
</template>
<script>
export default {
  methods: {
    printInfo () {
      console.log('Hello!')
    },
    changeToLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>
