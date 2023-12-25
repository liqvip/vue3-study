<template>
  <CompositionPerson></CompositionPerson>
</template>

<script lang="ts">
  import CompositionPerson from './components/CompositionPerson.vue';

  export default {
    name: 'APP',  // 组件名
    components: { // 注册组件
      CompositionPerson
    },
  }
</script>

<style scoped>
  .app {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>