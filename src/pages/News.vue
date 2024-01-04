<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink :to="{path: '/news/detail', query: {
          id: news.id,
          title: news.title,
          content: news.content,
        }}">{{ news.title }}</RouterLink>
      </li>
    </ul>

    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';

  const newsList = reactive([
    {id: '01', title: '如何一夜暴富', content: '学IT'},
    {id: '02', title: '震惊，万万没想到', content: '明天是周一'},
    {id: '03', title: '好消息！', content: '快过年了'},
  ])
</script>