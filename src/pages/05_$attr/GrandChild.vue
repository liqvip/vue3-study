<template>
  <h3>孙组件</h3>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <h4>x: {{ x }}</h4>
    <h4>y: {{ y }}</h4>
    <button @click="updateA(6)">点我将爷爷那里的 a 更新</button>
</template>

<script setup lang="ts">
  defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>