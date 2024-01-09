<template>
  <div>
    <h3>父组件</h3>
    <!-- 1. v-model 用在 html 标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- v-model 底层原理等价此行代码，动态value值 + input事件。$event 是占位符，表示事件对象 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- 2. v-model 用在组件上 -->
    <MyInput v-model="username"/>
    <!-- 实现原理，参数:modelValue ,自定义事件名:update:modelValue -->
    <!-- <MyInput 
    :modelValue="username" 
    @update:modelValue="username = $event"/> -->
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from 'vue';
  import MyInput from './MyInput.vue';

  // 数据
  let username = ref('张三')
</script>