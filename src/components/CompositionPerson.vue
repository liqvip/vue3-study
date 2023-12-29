<!-- vue3 组合式 API 编码方式 -->

<template>
  <div class="person">
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}--{{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" name='Person456' setup>
  import { ref } from 'vue'
  import {type Persons} from '@/types/Persons'

  // 只接收 persons
  // defineProps(['persons']);

  // 接收 persons + 限制类型
  defineProps<{persons: Persons}>();

  // 接收 persons + 限制类型 + 限制必要性 + 指定默认值
  // withDefaults(defineProps<{persons?: Persons}>(),{
  //   persons: ()=> [{id: '001', name: '康师傅', age: 18}]
  // })

  // 接收 list，同时将 props 保存起来
  // let x = defineProps(['persons'])
  // console.log(x.persons)

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    margin: 0 5px;
  }
</style>