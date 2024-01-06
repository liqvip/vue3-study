<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from 'vue';
  import {useCountStore} from '@/store/count'

  // 数据
  let n = ref(1)  // 用户选择的数字
  const countStore = useCountStore()
  // 以下两种方式都可以拿到 state 中的数据
  console.log('@@', countStore.sum)
  console.log('@@', countStore.$state.sum)

  // 方法
  function add(){
  }

  function minus(){
  }
</script>