import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  //真正存储数据的地方
  state(){
    return {
      sum: 6,
    }
  },
  actions: {
    increment(value: number){
      console.log('increment 被调用了', value)
      this.sum += value
    }
  },
  getters: {
    bigSum(state): number{
      console.log('@@@@!!!', state)
      console.log('@@@@!!!', this)
      return this.sum * 10
    }
  }
})