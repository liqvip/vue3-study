<template>
  <div>
    <h3>子组件2</h3>
    <h4>玩具：{{ computer }}</h4>
    <h4>书籍：{{ book }} 本</h4>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue';

  let computer = ref('联想')
  let book = ref(6)

  defineExpose({
    computer,
    book
  })
</script>