<template>
  <div class="category">
    <slot name="s2">默认内容2</slot>
    <slot name="s1">默认内容1</slot>
  </div>
</template>

<script setup lang="ts" name="">
</script>

<style scoped>
  .category {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>