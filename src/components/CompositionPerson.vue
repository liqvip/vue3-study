<!-- vue3 组合式 API 编码方式 -->

<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我 sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" name='Person456' setup>

  import userDog from '@/hooks/useDog'
  import useSum from '@/hooks/useSum'

  const {sum, add} = useSum()
  const {dogList, getDog} = userDog()
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

  img {
    height: 100px;
  }
</style>