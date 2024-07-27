<script setup lang="ts"> import { ref, watch } from 'vue'
  const person = ref({
    name: '张三',
    age: 18,
  });

  function changeName() {
    person.value.name = '李四';
  }

  function changePerson() {
    person.value = {
      name: '王五',
      age: 20,
    };
  }

  watch(() => person.value.name, (newVal, oldVal) => {
    console.log('person 改变了',newVal, oldVal);
  });
</script>

<template>
  <div>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changeName">改名</button>
    <button @click="changePerson">改人</button>
  </div>
</template>

<style scoped>

</style>