<template>
  <div>
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }} 本</h4>
    <button @click="minusHouse($parent)">干掉父亲的房产</button>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue';

  let toy = ref('奥特曼')
  let book = ref(3)

  function minusHouse(parent:any){
    parent.house = '没房子了'
  }

  // 把数据暴露给父组件
  defineExpose({
    toy,
    book
  })
</script>