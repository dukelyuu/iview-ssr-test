<template>
  <div>
    <div>Button:</div>
    <TestCase title="Pure Button">
      <Button type="primary">Button</Button>
      <Button type="text">Text Button</Button>
    </TestCase>
    <TestCase title="Button with Loading">
      <Button type="primary" @click="changeToLoading" :loading="loading">Click to loading</Button>
    </TestCase>
    <TestCase title="Disabled">
      <Button type="primary" disabled>Disabled</Button>
    </TestCase>
    <TestCase title="Button Group">
      <Button-group>
        <Button>取消</Button>
        <Button type="primary">确定</Button>
      </Button-group>
      <Button-group shape="circle">
          <Button type="primary">
              <Icon type="chevron-left"></Icon>
              前进
          </Button>
          <Button type="primary">
              后退
              <Icon type="chevron-right"></Icon>
          </Button>
      </Button-group>
    </TestCase>
    <TestCase title="Vertical Button Group">
        <Button-group vertical>
        <Button type="ghost" icon="social-facebook"></Button>
        <Button type="ghost" icon="social-twitter"></Button>
        <Button type="ghost" icon="social-googleplus"></Button>
        <Button type="ghost" icon="social-tumblr"></Button>
    </Button-group>
    </TestCase>
  </div>
</template>
<script>
import TestCase from '~components/TestCase'
export default {
  components: {
    TestCase
  },
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
