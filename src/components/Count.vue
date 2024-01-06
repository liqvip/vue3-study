<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
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
import { storeToRefs } from 'pinia';

  // 数据
  let n = ref(1)  // 用户选择的数字
  const countStore = useCountStore()
  // 以下两种方式都可以拿到 state 中的数据
  console.log(countStore)
  console.log('@@', countStore.sum)
  console.log('@@', countStore.$state.sum)

  // storeToRefs 只会关注 store 中的数据，不会对方法进行 ref 包裹
  const {sum} = storeToRefs(countStore)

  // 方法
  function add(){
    countStore.increment(n.value)
  }

  function minus(){
  }
</script>