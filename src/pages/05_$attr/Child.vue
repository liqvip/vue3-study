<template>
  <div>
    <h3>子组件</h3>
    <h4>a: {{ a }}</h4>
    <h4>其他：{{ $attrs }}</h4>
    <GrandChild v-bind="$attrs"/>
  </div>
</template>

<script setup lang="ts" name="Child">
  import GrandChild from './GrandChild.vue';

  defineProps(['a'])
</script>