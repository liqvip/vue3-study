<template>
  <div>
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emitter from '@/utils/emitter'

  // 数据
  let toy = ref('奥特曼')
</script>