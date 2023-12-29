<template>
  <CompositionPerson :persons="personList"></CompositionPerson>
</template>

<script lang="ts" setup name="APP">
  import { reactive } from 'vue';
  import CompositionPerson from './components/CompositionPerson.vue';
  import {type Persons} from '@/types/Persons'

  let personList = reactive<Persons>([
    {id:'dfdf1', name: 'zhangsan', age: 28},
    {id:'dfdf2', name: 'lisi', age: 18},
    {id:'dfdf3', name: 'wangwu', age: 8},
  ])
</script>

<style scoped>
  .app {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>