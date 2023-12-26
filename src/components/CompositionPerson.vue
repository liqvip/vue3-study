<!-- vue3 组合式 API 编码方式 -->

<template>
  <div class="person">
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" name='Person456' setup>
  import { reactive, ref, toRef, toRefs } from 'vue';

  let person = reactive(
    {
      name: '张三',
      age: 18,
    }
  );

  let {name, age} = toRefs(person);
  let n1 = toRef(person, 'age');
  console.log(n1.value);

  // 方法
  function changeName(){
    name.value = 'zhang-san'
    console.log(name.value, person.name);
  }

  function changeAge(){
    age.value += 1;
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