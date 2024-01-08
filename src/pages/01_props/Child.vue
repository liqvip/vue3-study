<template>
  <div>
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父给的车：{{ car }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="">
  import { ref } from 'vue';
  // 数据
  let toy = ref('奥特曼')

  // 声明接收 props
  defineProps(['car', 'sendToy'])
</script>