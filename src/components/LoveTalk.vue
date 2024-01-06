<template>
  <div>
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in loveTalkStore.loveTalkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import axios from 'axios';
import {nanoid} from 'nanoid'
import {useLoveTalkStore} from '@/store/loveTalk'

  // 数据
  let loveTalkStore = useLoveTalkStore()

  // 方法
  async function getLoveTalk(){
    // 发请求，连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = {id: nanoid(), title}
    console.log(obj)
    // 放到数组中
    loveTalkStore.loveTalkList.unshift(obj)
  }

</script>