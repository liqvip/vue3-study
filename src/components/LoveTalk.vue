<template>
  <div>
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in loveTalkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import axios from 'axios';
import {nanoid} from 'nanoid'
import {useLoveTalkStore} from '@/store/loveTalk'
import { storeToRefs } from 'pinia';

  // 数据
  let loveTalkStore = useLoveTalkStore()

  const {loveTalkList} = storeToRefs(loveTalkStore)

  // $subscribe 监听 state 变化
  loveTalkStore.$subscribe((mutation, state)=>{
    console.log('loveTalkStore 里面保存的数据发生了变化', state)
    localStorage.setItem('loveTalkList', JSON.stringify(state.loveTalkList))
  })

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