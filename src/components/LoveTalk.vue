<template>
  <div>
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import axios from 'axios';
import { reactive } from 'vue';
import {nanoid} from 'nanoid'

  interface LoveTalk {
    id: string,
    title: string,
  }

  // 数据
  let talkList = reactive<LoveTalk[]>([])

  // 方法
  async function getLoveTalk(){
    // 发请求，连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = {id: nanoid(), title}
    console.log(obj)
    // 放到数组中
    talkList.unshift(obj)
  }

</script>