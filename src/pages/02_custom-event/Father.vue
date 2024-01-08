<template>
  <div>
    <h3>父组件</h3>
    <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
    <!-- 给子组件 Child 绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue'
  import { ref } from 'vue';

  // 数据
  let toy = ref('')

  function saveToy(value:string){
    console.log('saveToy', value)
    toy.value = value
  }
</script>