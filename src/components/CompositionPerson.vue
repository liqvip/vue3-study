<!-- vue3 组合式 API 编码方式 -->

<template>
  <div class="person">
    <h1>监听 ref 定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" name='Person456' setup>
  import {ref, watch} from 'vue'

  // 数据
  let person = ref({
    name: '张三',
    age: 18,
  });

  // 方法
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name: '李四', age:90}
  }

  // 监视的是对象的地址值，若想监视对象的内部属性变化，需要手动开启深度监视
  // watch 的第一个参数是：被监视的数据
  // watch 的第二个参数是：被监视的回调
  // watch 的第三个参数是：配置对象(deep, immediate等等)
  watch(person, (newValue, oldValue) => {
    console.log('person 变化了', newValue, oldValue)
  }, {deep: true, immediate: true});
  
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