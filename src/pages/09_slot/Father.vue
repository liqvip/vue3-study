<template>
  <div>
    <h3>父组件</h3>
    <div>
     <Category>
      <template v-slot:s2>
        <ul>
          <li v-for="game in games" :key="game.id">
            {{ game.name }}
          </li>
        </ul>
      </template>
      <template v-slot:s1>
        <h2>热门游戏列表</h2>
      </template>
     </Category>

     <Category>
      <template v-slot:s2>
        <img :src="imgUrl" alt="图片">
      </template>
      <template v-slot:s1>
        <h2>今日美食城市</h2>
      </template>
     </Category>

     <Category>
      <template #s2>
        <video :src="videoUrl" controls></video>
      </template>
      <template #s1>
        <h2>今日影视推荐</h2>
      </template>
     </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { defineProps, reactive } from 'vue'
  import Category from './Category.vue';

  let games = reactive([
    { id: 1, name: '英雄联盟' },
    { id: 2, name: '王者农药' },
    { id: 3, name: '红色警戒' },
    { id: 4, name: '斗罗大陆' },
  ])

  let imgUrl = 'https://img.alicdn.com/imgextra/i1/2401945084/O1CN01b6Cdys1nQWUGGrOBK_!!2401945084.jpg'
  let videoUrl = 'http://vjs.zencdn.net/v/oceans.mp4'


</script>