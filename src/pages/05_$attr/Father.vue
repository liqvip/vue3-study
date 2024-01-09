<template>
  <div>
    <h3>父组件</h3>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100, y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue'
  import { ref } from 'vue';

  let a = ref('a')
  let b = ref('b')
  let c = ref('c')
  let d = ref('d')

  function updateA(value: number){
    a.value += value
  }

</script>