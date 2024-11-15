<template>
  <div>
    <h2>Vue3 组件通信方式</h2>
    <!-- 导航区 -->
    <ul>
      <li v-for="(item, index) in pathList" :key="index">
        <a href="" @click="changePage(item.path)">
          {{ (index+1) + "、" + item.desc }}
        </a>
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter();

  const pathList = [
    {
      path: '/props',
      desc: 'props'
    },
    {
      path: '/event',
      desc: '自定义事件'
    },
    {
      path: '/mitt',
      desc: 'mitt'
    },
    {
      path: '/model',
      desc: 'v-model'
    },
    {
      path: '/attrs',
      desc: '$attrs'
    },
    {
      path: '/ref-parent',
      desc: '$refs、$parent'
    },
    {
      path: '/provide-inject',
      desc: 'provide、inject'
    },
    {
      path: '/pinia',
      desc: 'pinia'
    },
    {
      path: '/slot',
      desc: 'slot'
    },
  ];
  const changePage = (path: string) => {
    router.push({
      path,
    });
  }
</script>

<style scoped>

</style>