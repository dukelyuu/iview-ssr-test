<template>
  <Form label-position="top">
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
    <Form-item label="radio">
      <Radio-group v-model="radio1">
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛" disabled></Radio>
          <Radio label="印度黑羚"></Radio>
      </Radio-group>
      <br/>
      <Radio-group v-model="radio1" vertical>
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛" disabled></Radio>
          <Radio label="印度黑羚"></Radio>
      </Radio-group>
      <br/>
      <Radio-group v-model="radio2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </Radio-group>
    </Form-item>
  </Form>
</template>
<script>
export default {
  data () {
    return {
      select1: 'http',
      select2: 'com',
      radio1: '金斑蝶',
      radio2: '北京'
    }
  }
}
</script>
