<template>
  <div>
    <h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
    <button @click="changeToy">修改 Child1 的玩具</button>
    <button @click="changeComputer">修改 Child2 的电脑</button>
    <button @click="getAllChild($refs)">让所有孩子的书变多</button>
    <Child1 ref="c1"/>
    <Child2 ref="c2"/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';

  let house = ref('一套房子')

  let c1 = ref()
  let c2 = ref()

  function changeToy(){
    c1.value.toy = '小汽车'
  }

  function changeComputer(){
    c2.value.computer = '戴尔'
  }

  function getAllChild(refs:{[key:string]:any}){
    for(let key in refs){
      refs[key].book += 3
    }
  }

  defineExpose({
    house
  })
</script>