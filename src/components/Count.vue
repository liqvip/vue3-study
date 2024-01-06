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
  // 数据
  let sum = ref(1)  // 当前求和
  let n = ref(1)  // 用户选择的数字

  // 方法
  function add(){
    sum.value += n.value
  }

  function minus(){
    sum.value -= n.value
  }
</script>