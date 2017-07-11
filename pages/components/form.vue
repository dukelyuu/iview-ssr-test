<template>
  <Form>
    <Form-item label="input">
      <Input></Input>
      <Input icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>
      <Input type="textarea" placeholder="请输入..." disabled></Input>
      <Input>
          <Select v-model="select1" slot="prepend" style="width: 80px">
              <Option value="http">http://</Option>
              <Option value="https">https://</Option>
          </Select>
          <Select v-model="select2" slot="append" style="width: 70px">
              <Option value="com">.com</Option>
              <Option value="org">.org</Option>
              <Option value="io">.io</Option>
          </Select>
      </Input>
    </Form-item>
  </Form>
</template>
<script>
export default {
  data () {
    return {
      select1: 'http',
      select2: 'com'
    }
  }
}
</script>
