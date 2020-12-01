<!--
 * @Author: your name
 * @Date: 2020-11-27 10:28:19
 * @LastEditTime: 2020-11-27 19:33:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \张仲的本地库\newcomerTraining\zhangzhong\day04\aiyongui\src\App.vue
-->
<template>
  <div id="app">
    
    <HelloWorld msg=""/>
    <Form />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
export default {
  name: 'App',

  components: {
    HelloWorld,
    Form
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
  background-color: #eee;
  display: flex;
  }
</style>
