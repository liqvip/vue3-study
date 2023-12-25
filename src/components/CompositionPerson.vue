<!-- vue3 组合式 API 编码方式 -->

<template>
  <div class="person">
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'CompisitionPerson',
    beforeCreate(){
      console.log('beforeCreate')
    },
    setup(){
      console.log('setup');
      
      // setup 函数中的 this 是 undefined
      // console.log('@@', this);

      // 数据,注意此时的 name, age 不是响应式
      let name = '张三';
      let age = 18;
      let tel = '13888888888'

      // 方法
      function changeName(){
        name = 'zhang-san'
      }

      function changeAge(){
        age += 1;
      }

      function showTel(){
        alert(tel);
      }

      return {
        name,
        age,
        changeName,
        changeAge,
        showTel,
      };
    }
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    margin: 0 5px;
  }
</style>