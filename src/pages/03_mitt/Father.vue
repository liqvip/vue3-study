<template>
  <div>
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';
</script>